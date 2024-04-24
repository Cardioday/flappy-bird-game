
//Pipe obstacle
class Pipe {
    constructor(typeOfPipe) {
        this.positionX = 90;
        this.positionY = 0;
        this.width = 6;
        this.image = typeOfPipe === "top" ? "./toppipe.png" : "./bottompipe.png";


        this.createDomDiv();
        this.createDomImg();   
    }
    createDomDiv() {
        //create Element
        this.pipeDiv = document.createElement("div");

        //add context and modify the styling
        this.pipeDiv.style.left = this.positionX + "vw";
        this.pipeDiv.style.bottom = this.positionY; //this.positionY + "vh";
        this.pipeDiv.style.width = this.width + "vw";
        this.pipeDiv.style.height = this.height + "vh";
        this.pipeDiv.style.position = "absolute";
        this.pipeDiv.setAttribute("class", "obstacle")

        // append to the DOM 
        const parent = document.querySelector("#board");
        parent.appendChild(this.pipeDiv);

    }

    createDomImg() {
        //create Element
        this.pipeImg = document.createElement("img");

        //add context and modify the styling
        this.pipeImg.src = this.image;
        this.pipeImg.alt = "Flappy not happy";
        this.pipeImg.setAttribute("class", "obstaclePhoto");

        // append to the DOM
        this.pipeDiv.appendChild(this.pipeImg);
    }

    moveLeft() {
        this.positionX = this.positionX - .1;
        this.pipeDiv.style.left = this.positionX + "vw";
    }
}

/////
//Obstacle Array//
/////

function startObstacles() {
    const pipeArray = [];

    //Generate obstacles
    setInterval(() => {
        const pT = new Pipe("top");
        const pB = new Pipe("bottom");

        //This sets the range of the top pipe (top pipe max y location - min y location + 1) + min Y location);
        const randomPosition = Math.floor(Math.random() * (70 - 30 + 1) + 30);

        pT.pipeDiv.style.bottom = randomPosition + "vh";
        //This sets the gap between obstacles generated (random position - pipe height - gap between pipes)
        pB.pipeDiv.style.bottom = (randomPosition - 64 - 30) + "vh";

        
        pipeArray.push(pT, pB);
        // pipeArray.push(pB);
    }, 1000)

    //Move all obstacles
    setInterval(() => {
        pipeArray.forEach((instance) => {
            //move obstacle
            instance.moveLeft();

            //detect collision
            if (
                bird.positionX < instance.positionX + instance.width &&
                bird.positionX + bird.width > instance.positionX &&
                bird.positionY < instance.positionY + instance.height &&
                bird.positionY + bird.height > instance.positionY
            ) {
                // gameOver();
            }
        }, 5000)
    })
}


//Universal function to end the game when certain criteria are met.
function gameOver() {
    console.log("collision detected")
    location.href = "gameover.html";
}
