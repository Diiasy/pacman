// Create pacman
class Pacman{
    render(){
        let $pacman = document.createElement("div");
        $pacman.setAttribute("class", "pacman");
        $pacman.style.position = "absolute";
        $pacman.style.left = "260px";
        $pacman.style.top = "450px";
        $gameboard.appendChild($pacman);
      
        // Move Pacman
        let walls = document.querySelectorAll(".wall");
        let wallsArray = [...walls];
        document.addEventListener("keydown", function(event){
            switch (event.key) {
                case "ArrowLeft":
                    const canGoLeft = (wall) => CollisionWall(wall, $pacman, 'left');
                    if (wallsArray.every(canGoLeft)){
                        if ($pacman.offsetLeft === 0){
                            $pacman.style.left = `${560 - $pacman.offsetWidth + 10}px`;
                        }
                        $pacman.style.left = `${$pacman.offsetLeft - 10}px`;
                    }
                    break;
                case "ArrowRight":
                    const canGoRight = (wall) => CollisionWall(wall, $pacman, 'right');
                    if (wallsArray.every(canGoRight)){
                        if ($pacman.offsetLeft + $pacman.offsetWidth === 560){
                            $pacman.style.left = `-10px`;
                        }
                        $pacman.style.left = `${$pacman.offsetLeft + 10}px`;
                    }
                    break;
                case "ArrowUp":
                    const canGoUp = (wall) => CollisionWall(wall, $pacman, 'up');
                    if (wallsArray.every(canGoUp)){
                        $pacman.style.top = `${$pacman.offsetTop - 10}px`;
                    }
                    break;  
                case "ArrowDown":
                    const canGoDown = (wall) => CollisionWall(wall, $pacman, 'down');
                    if (wallsArray.every(canGoDown)){
                        $pacman.style.top = `${$pacman.offsetTop + 10}px`;
                    }
                    break;
                default:
                    break;
            }
        });

        // Eat coins
        let coins = document.querySelectorAll(".coin");
        let coinsArray = [...coins];

    }
}