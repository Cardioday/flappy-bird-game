
//Pipe obstacle
class Pipe {
    constructor(typeOfPipe, positionY) {
        this.positionX = 95;
        this.positionY = positionY;
        this.width = 6;
        this.height = 64;
        this.typeOfPipe = typeOfPipe;
        this.image = this.typeOfPipe === "top" ? "./pics/toppipe.png" : "./pics/bottompipe.png";


        this.createDomDiv();
        this.createDomImg();
    }
    createDomDiv() {
        //create Element
        this.pipeDiv = document.createElement("div");

        //add context and modify the styling
        this.pipeDiv.style.left = this.positionX + "vw";
        //By changing this you've altered the collision detection.
        this.pipeDiv.style.bottom = this.positionY + "vh";
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

//////////////////
//Obstacle Array//
/////////////////

function startObstacles() {

    //holds all of the newly generated obstacle instances
    const pipeArray = [];

    //Generate obstacles
    setInterval(() => {

        //creating random positioning references along the Y axis
        const topPipeY = Math.floor(Math.random() * (70 - 30 + 1) + 30);
        const bottomPipeY = (topPipeY - 64 - 24);

        //creating new instances of pipe
        const pT = new Pipe("top", topPipeY);
        const pB = new Pipe("bottom", bottomPipeY);

        //Moving pipes to pipeArray
        pipeArray.push(pT, pB);

    }, 1250)

    //Move all obstacles
    setInterval(() => {

        pipeArray.forEach((instance) => {

            //moves obstacle every 1.5 secs
            instance.moveLeft();

            //detects collision between player and pipes
            if (
                bird.positionX < instance.positionX + instance.width &&
                bird.positionX + bird.width > instance.positionX &&
                bird.positionY < instance.positionY + instance.height &&
                bird.positionY + bird.height > instance.positionY
            ) {
                gameOver("yes");
            }
        }, 1250)
    })
}



