class CeilingObs {
    constructor() {
        this.positionX = 90;
        this.positionY = 45;
        this.width = 6;
        this.height = 40;
        
        this.ceilingId = document.querySelector(".topObstacle");
        this.ceilingId.style.left = this.positionX + "vw";
        this.ceilingId.style.bottom = this.positionY + "vh";
        this.ceilingId.style.width = this.width + "vw";
        this.ceilingId.style.height = this.height + "vh";

        this.elementId = document.createElement("div");
    }
    moveUp(){
        this.positionY = this.positionY + 1;
        this.ceilingId.style.bottom = this.positionY + "vh";
        console.log(this.positionY);
    }
    movedDown() {
        this.positionY = this.positionY - 1;
        this.ceilingId.style.bottom = this.positionY + "vh";
        console.log(this.positionY);
    }
    moveLeft() {
        this.positionX = this.positionX - 1;
        this.ceilingId.style.left = this.positionX + "vw";
    }
    moveRight() {
        this.positionX = this.positionX + 1;
        this.ceilingId.style.left = this.positionX + "vw";
    }
    
}

class FloorObs {
    constructor() {
        this.positionX = 90;
        this.positionY = 0;
        this.width = 6;
        this.height =40;
        
        this.floorId = document.querySelector(".bottomObstacle");
        this.floorId.style.left = this.positionX + "vw";
        this.floorId.style.bottom = this.positionY + "vh";
        this.floorId.style.width = this.width + "vw";
        this.floorId.style.height = this.height + "vh";

        this.elementId = document.createElement("div");
    }
    moveUp(){
        this.positionY = this.positionY + 1;
        this.floorId.style.bottom = this.positionY + "vh";
        console.log(this.positionY);
    }
    movedDown() {
        this.positionY = this.positionY - 1;
        this.floorId.style.bottom = this.positionY + "vh";
        console.log(this.positionY);
    }
    moveLeft() {
        this.positionX = this.positionX - 1;
        this.floorId.style.left = this.positionX + "vw";
    }
    moveRight() {
        this.positionX = this.positionX + 1;
        this.floorId.style.left = this.positionX + "vw";
    }
    
}

/*Both of these will need to be set with their own interval timers which executes the following:
-Move the respective obstacles left at a constant pace to imitate motion
-Generates a new obstacle at a constant gap rate from the last
-Generates random sizes (heights) that do not intersect or come too close to one another 
*/

const floorObs = new FloorObs();
const ceilingObs = new CeilingObs();

function horizMoveCeiling() {
    const incoming = setInterval((element) => {
        ceilingObs.moveLeft();
    }, 60)
}

function horizMoveFloor() {
    const incoming = setInterval((element) => {
        floorObs.moveLeft();
    }, 60)
}

function newObs() {

        const spot = document.querySelector("#board");
        
        const floorObsInterval = setInterval(() => {
         const floorObs = new FloorObs();
            spot.appendChild(floorObs.elementId);
            floorObs.horizMoveCeiling();
        }, 1000);

        const ceilingObsInterval = setInterval(() => {
            const ceilingObs = new CeilingObs();
            ceilingObs.horizMoveFloor();
            spot.appendChild(ceilingObs.elementId);
            
    }, 1000)    
}
//The above is a mess, make sure to clean it up

//Need a function to remove the obstacles that have went past the vw.
//Need a function to generate new obstacles
//Need a function to randomly generate heights of said obstacles

// function fluidFly() {

//     const jump = setInterval((element) => {
//         bird.moveUp();
//     }, 13)

//     setTimeout((element) =>   {
//         clearInterval(jump);    
//     }, 250)
// }

