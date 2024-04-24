class Bird {
    constructor() {
        this.positionX = 12; //12
        this.positionY = 60; //60
        this.width = 4; //4
        this.height = 4; //4
        
        this.createDomElm();
        this.createDomImg();
    }
    createDomElm(){
        //create element
        this.birdId = document.createElement("div");

        //add styling and attributes
        this.birdId.style.left = this.positionX + "vw";
        this.birdId.style.bottom = this.positionY + "vh";
        this.birdId.style.width = this.width + "vw";
        this.birdId.style.height = this.height + "vh";
        this.birdId.style.position = "absolute";

        this.birdId.setAttribute("class", "bird");
        

        //append to html
        const parent = document.querySelector("#board")
        parent.appendChild(this.birdId);
    }
    createDomImg(){
        //create element
        this.flappyImg = document.createElement("img")

        //add styling and attributes
        this.flappyImg.src = "./flappybird.png";
        this.flappyImg.alt = "Flappy not happy";
        this.flappyImg.setAttribute("id", "flappyPhoto");

        //append to html
        this.birdId.appendChild(this.flappyImg);
    }
    moveUp(){
        this.positionY = this.positionY + 1;
        this.birdId.style.bottom = this.positionY + "vh";
        console.log(this.positionY);
    }    
    movedDown() {
        this.positionY = this.positionY - 1;
        this.birdId.style.bottom = this.positionY + "vh";
        console.log(this.positionY);
}
}

const bird = new Bird();

// Flying mechanics

//upward lift of bird on the Y axis
function fluidFly() {

    const jump = setInterval((element) => {
        bird.moveUp();
        //prevents the bird from jumping outside of the board
        if (bird.positionY > 75) {
            clearInterval(jump);
        }
    }, 13)

    setTimeout((element) =>   {
        clearInterval(jump);    
    }, 250)
}

//downward force effect on the bird while flying
function gravity(){
    const fall = setInterval((element) => {
        bird.movedDown();
        //could add a conditional statement here intensifing the decrement interval if "space" code event listener hasn't been executed in XX amount of ms 
        if (bird.positionY < 1) {
            clearInterval(fall);
        }
        if (bird.positionY < 0){
            gameOver();
        }
    }, 20);
}
///////////
liftOff();
//starts the game
function liftOff() {
    let count = 0
document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
        count++;
        // This is where the conditional start of gameplay statement should go
        fluidFly();
        console.log("it works!");
    }
    if (count === 1) {
        gravity();
        startObstacles();
    }
})
}
