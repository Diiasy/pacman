// Create pacman
class Pacman{
    constructor(){
        this.x = 260;
        this.y = 450;
        this.width = 40;
        this.height = 40;
    }
    render(){
        let $pacman = document.createElement("div");
        $pacman.setAttribute("class", "pacman");
        $pacman.style.position = "absolute";
        $pacman.style.left = `${this.x}px`;
        $pacman.style.top = `${this.y}px`;
        $pacman.style.width = `${this.width-10}px`;
        $pacman.style.height = `${this.height-10}px`;
        $gameboard.appendChild($pacman);
      
        // // Move Pacman
        // let walls = document.querySelectorAll(".wall");
        // let wallsArray = [...walls];
        // document.addEventListener("keydown", function(event){
        //     switch (event.key) {
        //         case "ArrowLeft":
        //             const canGoLeft = (wall) => CollisionWall(wall, $pacman, 'left');
        //             if (wallsArray.every(canGoLeft)){
        //                 if ($pacman.offsetLeft === 0){
        //                     $pacman.style.left = `${560 - $pacman.offsetWidth + 10}px`;
        //                 }
        //                 $pacman.style.left = `${$pacman.offsetLeft - 10}px`;
        //             }
        //             break;
        //         case "ArrowRight":
        //             const canGoRight = (wall) => CollisionWall(wall, $pacman, 'right');
        //             if (wallsArray.every(canGoRight)){
        //                 if ($pacman.offsetLeft + $pacman.offsetWidth === 560){
        //                     $pacman.style.left = `-10px`;
        //                 }
        //                 $pacman.style.left = `${$pacman.offsetLeft + 10}px`;
        //             }
        //             break;
        //         case "ArrowUp":
        //             const canGoUp = (wall) => CollisionWall(wall, $pacman, 'up');
        //             if (wallsArray.every(canGoUp)){
        //                 $pacman.style.top = `${$pacman.offsetTop - 10}px`;
        //             }
        //             break;  
        //         case "ArrowDown":
        //             const canGoDown = (wall) => CollisionWall(wall, $pacman, 'down');
        //             if (wallsArray.every(canGoDown)){
        //                 $pacman.style.top = `${$pacman.offsetTop + 10}px`;
        //             }
        //             break;
        //         default:
        //             break;
        //     }
        // });

        // // Eat coins
        // let coins = document.querySelectorAll(".coin");
        // let coinsArray = [...coins];
        // let score = document.querySelector(".score");
        // for (let i=0; i<coins.length; i++){
        //     if(eatCoins($pacman, coins[i])){
        //         coins.splice(i, 1);
        //     }
        // }

    }
}




function eatCoins($dom1,$dom2){
    let el1 = {
        x: $dom1.x,
        y: $dom1.y,
        width: $dom1.width,
        height: $dom1.height
    }
    
    let el2 = {
        x:$dom2.x,
        y:$dom2.y,
        width:$dom2.width,
        height:$dom2.height
    }
  
    if(!(el2.y + el2.height < el1.y || 
      el2.y > el1.y + el1.height ||
      el2.x + el2.width < el1.x ||
      el2.x > el1.x + el1.width)) {
        return true;
    } else {
        return false
    }
  }