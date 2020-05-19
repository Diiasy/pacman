// Create pacman
class Pacman{
    constructor(){
        this.x = 265;
        this.y = 455;
        this.width = 30;
        this.height = 30;
        this.createPacman();
    }

    createPacman(){
        let $pacman = document.createElement("div");
        $pacman.setAttribute("class", "pacman");
        $pacman.style.position = "absolute";
        $pacman.style.left = `${this.x}px`;
        $pacman.style.top = `${this.y}px`;
        $pacman.style.width = `${this.width}px`;
        $pacman.style.height = `${this.height}px`;
        $gameboard.appendChild($pacman);
    }

    render(){
        let $pacman = document.querySelector(".pacman");
        $pacman.style.left = `${this.x}px`;
        $pacman.style.top = `${this.y}px`;
        $pacman.style.width = `${this.width}px`;
        $pacman.style.height = `${this.height}px`;
    }
}
