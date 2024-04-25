class Bird {
    constructor() {
        this.positionX = 12; 
        this.positionY = 40; 
        this.width = 4; 
        this.height = 4;
        this.parent = document.querySelector("#board");

        this.createDomElm();
        this.createDomImg();
    }
    createDomElm() {
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
        this.parent.appendChild(this.birdId);
    }
    createDomImg() {
        //create element
        this.flappyImg = document.createElement("img")

        //add styling and attributes
        this.flappyImg.src = "./pics/flappybird.png";
        this.flappyImg.alt = "Flappy not happy";
        this.flappyImg.setAttribute("id", "flappyPhoto");

        //append to html
        this.birdId.appendChild(this.flappyImg);
    }
    moveUp() {
        this.positionY = this.positionY + 1;
        this.birdId.style.bottom = this.positionY + "vh";
    }
    movedDown() {
        this.positionY = this.positionY - 1;
        this.birdId.style.bottom = this.positionY + "vh";
    }
}

//generated instance of bird on board
const bird = new Bird();

///////////////////
// Game Start
//////////////////

liftOff();
//starts the game conditional on user key press
function liftOff() {
    let count = 0
    document.addEventListener("keydown", (e) => {
        if (e.code === "Space") {
            count++;
            fluidFly();
        }
        if (count === 1) {
            gravity();
            startObstacles();
            scoreCounter();
        }
    })
}

///////////////////
// Flying mechanics
//////////////////
//upward lift of bird on the Y axis
function fluidFly() {

    const jump = setInterval((element) => {
        bird.moveUp();
        //prevents the bird from jumping outside of the board
        if (bird.positionY > 75) {
            clearInterval(jump);
        }
        //ends game if bird does move outside board
        if (bird.positionY > 78) {
            gameOver("yes");
        }
    }, 12) //13

    setTimeout((element) => {
        clearInterval(jump);
    }, 250) //250
}

///////////
//Gravity
//////////

//downward force effect on the bird while flying
function gravity() {
    const fall = setInterval((element) => {
        bird.movedDown();
        //could add a conditional statement here intensifing the decrement interval if "space" code event listener hasn't been executed in XX amount of ms 
        if (bird.positionY < 1) {
            gameOver("yes");
        }
    }, 20);
}


///////////
//Score Counter
//////////

//variables for scoping
let score;
let counter = 0;

function scoreCounter() {

    score = setInterval(() => {
        counter++;
        const scoreboard = document.querySelector("#resultsContainer");
        scoreboard.innerText = "";
        scoreboard.innerText = `Score: ${counter}`
    }, 250)
}

/////////
//Display Final Score
/////////

function displayFinalScore() {

    const storedValue = localStorage.getItem("finalCount");

    const finalScore = document.querySelector("#scoreDisplay");

    finalScore.innerText = `Final Score: ${storedValue}`;
}

///////////
//GameOver
//////////

//Universal function to end the game when certain criteria are met.
function gameOver(yes) {
    if (yes === "yes") {

        //clearing the score count interval
        clearInterval(score);

        //storing the final counter results locally for transfer to gameover page
        localStorage.setItem("finalCount", counter);

        //referencing the gameover page
        location.href = "gameover.html";
    } else {
    }
}
