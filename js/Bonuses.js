


[ ] Bonus: refactor to have a single class for Pipes


class Pipe {
    constructor(typeOfPipe){
        this.positionX = 90;
        this.positionY = typeOfPipe === "top" ? 45 : -10;
        
        if(typeOfPipe === "top"){
            this.color = "red";
        } else {
            this.color = "purple"
        }

        // ...
        // ...
        // ...
    }
}


const pT = new Pipe("top");
const pB = new Pipe("bottom");


[ ] Bonus: implement genNewCeiling() and genNewFloor() in a single function





90
0

