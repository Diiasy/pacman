class Ghost{
    constructor(name){
        this.x = 265;
        this.y = 265;
        this.width = 30;
        this.height = 30;
        this.direction = 'N';
        this.createGhosts(name);
    }
    
    

    createGhosts(name){
        switch(name){
            case 'blinky':
                let $blinky = document.createElement("img");
                $blinky.src = "./images/blinky.png";
                $blinky.classList.add("ghost", "blinky");
                $blinky.style.position = "absolute";
                $blinky.style.left = `${this.x}px`;
                $blinky.style.top = `${this.y}px`;
                $blinky.style.width = `${this.width}px`;
                $blinky.style.height = `${this.height}px`;
                $gameboard.appendChild($blinky);
                break;
            case 'pinky':
                let $pinky = document.createElement("img");
                $pinky.src = "./images/pinky.png";
                $pinky.classList.add("ghost", "pinky");
                $pinky.style.position = "absolute";
                $pinky.style.left = `${this.x}px`;
                $pinky.style.top = `${this.y}px`;
                $pinky.style.width = `${this.width}px`;
                $pinky.style.height = `${this.height}px`;
                $gameboard.appendChild($pinky);
                break;
            case 'inky':
                let $inky = document.createElement("img");
                $inky.src = "./images/inky.png";
                $inky.classList.add("ghost", "inky");
                $inky.style.position = "absolute";
                $inky.style.left = `${this.x}px`;
                $inky.style.top = `${this.y}px`;
                $inky.style.width = `${this.width}px`;
                $inky.style.height = `${this.height}px`;
                $gameboard.appendChild($inky);
                break;
            case 'clyde':
                let $clyde = document.createElement("img");
                $clyde.src = "./images/clyde.png";
                $clyde.classList.add("ghost", "clyde");
                $clyde.style.position = "absolute";
                $clyde.style.left = `${this.x}px`;
                $clyde.style.top = `${this.y}px`;
                $clyde.style.width = `${this.width}px`;
                $clyde.style.height = `${this.height}px`;
                $gameboard.appendChild($clyde);
                break;
            default:
                break;
        }
    }

    render(name){
        switch (name){
            case 'blinky':
                let $blinky = document.querySelector(".blinky");
                $blinky.style.left = `${this.x}px`;
                $blinky.style.top = `${this.y}px`;
                $blinky.style.width = `${this.width}px`;
                $blinky.style.height = `${this.height}px`;
                break;
            case 'pinky':
                let $pinky = document.querySelector(".pinky");
                $pinky.style.left = `${this.x}px`;
                $pinky.style.top = `${this.y}px`;
                $pinky.style.width = `${this.width}px`;
                $pinky.style.height = `${this.height}px`;
                break;
            case 'inky':
                let $inky = document.querySelector(".inky");
                $inky.style.left = `${this.x}px`;
                $inky.style.top = `${this.y}px`;
                $inky.style.width = `${this.width}px`;
                $inky.style.height = `${this.height}px`;
                break;
            case 'clyde':
                let $clyde = document.querySelector(".clyde");
                $clyde.style.left = `${this.x}px`;
                $clyde.style.top = `${this.y}px`;
                $clyde.style.width = `${this.width}px`;
                $clyde.style.height = `${this.height}px`;
                break;
            default:
                break;
        }
    }

    moveGhost(name){
        let $ghost = document.querySelector(`.${name}`);
        let fixThis = this;
        let walls = document.querySelectorAll(".wall");
        let wallsArray = [...walls];
        function move(){
            if (fixThis.direction === 'W'){
                let intervalW = setInterval(()=>{
                    const canGoLeft = (wall) => CollisionWallGhost(wall, $ghost, 'left');
                    if (wallsArray.every(canGoLeft)){
                        $ghost.style.left = `${$ghost.offsetLeft - 1}px`;
                    }else{
                        let otherDirections = ['N', 'S'];
                        let random = Math.floor(Math.random()*otherDirections.length);
                        let nextDirection = otherDirections[random];
                        fixThis.direction = nextDirection;
                        console.log(fixThis.direction);
                        clearInterval(intervalW);
                        move();
                    }
                },10);
            }else if (fixThis.direction === 'E'){
                let intervalE = setInterval(()=>{
                    const canGoRight = (wall) => CollisionWallGhost(wall, $ghost, 'right');
                    if (wallsArray.every(canGoRight)){
                        $ghost.style.left = `${$ghost.offsetLeft + 1}px`;
                    }else{
                        let otherDirections = ['N', 'S'];
                        let random = Math.floor(Math.random()*otherDirections.length);
                        let nextDirection = otherDirections[random];
                        fixThis.direction = nextDirection;
                        console.log(fixThis.direction);
                        clearInterval(intervalE);
                        move();
                    }
                },10);
            }else if (fixThis.direction === 'N'){
                let intervalN = setInterval(()=>{
                    const canGoUp = (wall) => CollisionWallGhost(wall, $ghost, 'up');
                    if (wallsArray.every(canGoUp)){
                        $ghost.style.top = `${$ghost.offsetTop - 1}px`;
                    }else{
                        let otherDirections = ['W', 'E'];
                        let random = Math.floor(Math.random()*otherDirections.length);
                        let nextDirection = otherDirections[random];
                        fixThis.direction = nextDirection;
                        console.log(fixThis.direction);
                        clearInterval(intervalN);
                        move();
                    }
                },10);
            }else if (fixThis.direction === 'S'){
                let intervalS = setInterval(()=>{
                    const canGoDown = (wall) => CollisionWallGhost(wall, $ghost, 'down');
                    if (wallsArray.every(canGoDown)){
                        $ghost.style.top = `${$ghost.offsetTop + 1}px`;
                    }else{
                        let otherDirections = ['W', 'E'];
                        let random = Math.floor(Math.random()*otherDirections.length);
                        let nextDirection = otherDirections[random];
                        fixThis.direction = nextDirection;
                        console.log(fixThis.direction);
                        clearInterval(intervalS);
                        move();
                    }
                },10);
            }
        }
        move();
    }

}