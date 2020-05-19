// Create pacman
class Pacman{
    constructor(){
        this.x = 260;
        this.y = 450;
        this.width = 40;
        this.height = 40;
        this.createPacman();
    }

    createPacman(){
        let $pacman = document.createElement("div");
        $pacman.setAttribute("class", "pacman");
        $pacman.style.position = "absolute";
        $pacman.style.left = `${this.x}px`;
        $pacman.style.top = `${this.y}px`;
        $pacman.style.width = `${this.width-10}px`;
        $pacman.style.height = `${this.height-10}px`;
        $gameboard.appendChild($pacman);
    }

    render(){
        let $pacman = document.querySelector(".pacman");
        $pacman.style.left = `${this.x}px`;
        $pacman.style.top = `${this.y}px`;
        $pacman.style.width = `${this.width-10}px`;
        $pacman.style.height = `${this.height-10}px`;
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