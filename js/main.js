console.log("hello world");

class Bird {
    constructor() {
        this.positionX = 12;
        this.positionY = 50;
        this.width = 4;
        this.height = 4;
        
        this.birdId = document.getElementById("bird");
        this.birdId.style.left = this.positionX + "vw";
        this.birdId.style.bottom = this.positionY + "vh";
        this.birdId.style.width = this.width + "vw";
        this.birdId.style.height = this.height + "vh";
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

function fluidFly() {

    const jump = setInterval((element) => {
        bird.moveUp();
    }, 13)

    setTimeout((element) =>   {
        clearInterval(jump);    
    }, 250)
}

     
function gravity(){
    const fall = setInterval((element) => {
        bird.movedDown();
        //could add a conditional statement here intensifing the decrement interval if "space" code event listener hasn't been executed in XX amount of ms
        //The answer to this is yes based on GPT, need to create a timestamp 
        // Then a clear interval would need to be set which removes the additional gravity pull after the user again presses the space bar.
    }, 20);
}      

gravity();


    

//

document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
        // This is where the conditional start of gameplay statement should go
        fluidFly();
        console.log("it works!");
    }
})