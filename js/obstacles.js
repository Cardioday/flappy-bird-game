
//Ceiling obstacle (pipe)
class CeilingObs {
    constructor() {
        this.positionX = 90;
        this.positionY = 45;
        this.width = 6;
        this.height = 50;
        
        this.ceilingId = document.querySelector(".topObstacle");
        this.ceilingId.style.left = this.positionX + "vw";
        this.ceilingId.style.bottom = this.positionY + "vh";
        this.ceilingId.style.width = this.width + "vw";
        this.ceilingId.style.height = this.height + "vh";

        this.ceilingId.style.position = "absolute";
        this.ceilingId.style.backgroundColor = "red"
       
    }        
}

//Floor obstacle (pipe)

class FloorObs {
    constructor() {
        this.positionX = 90;
        this.positionY = -10;
        this.width = 6;
        this.height =50;
        
        this.floorId = document.querySelector(".bottomObstacle");
        this.floorId.style.left = this.positionX + "vw";
        this.floorId.style.bottom = this.positionY + "vh";
        this.floorId.style.width = this.width + "vw";
        this.floorId.style.height = this.height + "vh";

        this.floorId.style.position = "absolute";
        this.floorId.style.backgroundColor = "purple"

    }  
}

/*Both of these will need to be set with their own interval timers which executes the following:
-Move the respective obstacles left at a constant pace to imitate motion
-Generates a new obstacle at a constant gap rate from the last
-Generates random sizes (heights) that do not intersect or come too close to one another 
*/

//New instances to be able to reference outside of the class
const floorObs = new FloorObs();
const ceilingObs = new CeilingObs();

//Reference to the board element
const spot = document.querySelector("#board");

/*///////////////////////////
TOP PIPE
*///////////////////////////
//Placeholder variable for scoping

let newDivTop;

//Generates a new ceiling obstacle on a set interval

function genNewCeiling() {
    let newDivTop = document.createElement("div");
    let topImg = document.createElement("img")
    topImg.src = "./toppipe.png";
    topImg.alt = "Flappy not happy";

    newDivTop.classList.add("copyTopObstacle");
    newDivTop.style.left = ceilingObs.positionX + "vw";
    newDivTop.style.bottom = ceilingObs.positionY + "vh";
    newDivTop.style.width = ceilingObs.width + "vw";
    newDivTop.style.height = ceilingObs.height + "vh";

    newDivTop.style.position = ceilingObs.ceilingId.style.position;
    newDivTop.style.backgroundColor = "black";

//adding class list for testing purposes, will insert graphic later

    spot.appendChild(newDivTop);
    newDivTop.appendChild(topImg);

    const movementInterval = setInterval(() => {
        const location = parseFloat(newDivTop.style.left)
        if(location > 0){
            newDivTop.style.left = location - 1 + "vw";
        } else {
            newDivTop.remove(); 
        }
    }, 60)
}
//Invoke Top Obstacle generation function genNewCeiling() based upon interval timer

function newCeilingInterval() {
    const interval = setInterval(()=>{
        genNewCeiling();
    },1500)
}







/*///////////////////////////
BOTTOM PIPE
*///////////////////////////

let newDivBot;

//Generates a new ceiling obstacle on a set interval
function genNewFloor(){ 
    let newDivBot = document.createElement("div");
    let botImg = document.createElement("img")
    botImg.src = "./bottompipe.png";
    botImg.alt = "Flappy not happy";

    newDivBot.classList.add("copybottomObstacle");
    newDivBot.style.left = floorObs.positionX + "vw";
    newDivBot.style.bottom = floorObs.positionY + "vh";
    newDivBot.style.width = floorObs.width + "vw";
    newDivBot.style.height = floorObs.height + "vh";

    newDivBot.style.position = floorObs.floorId.style.position;
    newDivBot.style.backgroundColor = "yellow";
   
     //adding class list for testing purposes, will insert graphic later

     spot.appendChild(newDivBot);
     newDivBot.appendChild(botImg);
       
     const movementInterval = setInterval(() => {
        const location = parseFloat(newDivBot.style.left)
        if(location > 0){
            newDivBot.style.left = location - 1 + "vw";
        } else {
            newDivBot.remove(); 
        }
    }, 60)

}

//Invoke Bottom Obstacle generation function genNewFloor() based upon interval timer
function newFloorInterval() {
    const interval = setInterval(()=>{
        genNewFloor();
    },1500)
}


//Need a function to randomly generate heights of said obstacles

//////////////////////
// COLLISION DETECTION
//////////////////////

//////////////////////
//C