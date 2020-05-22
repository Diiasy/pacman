class Pacman{
    constructor(){
        this.x = 265;
        this.y = 455;
        this.width = 30;
        this.height = 30;
        this.direction = 'W';
        this.createPacman();
    }

    createPacman(){
        let $pacman = document.createElement("img");
        $pacman.src = "./images/pacman.gif";
        $pacman.setAttribute("class", "pacman");
        $pacman.style.transform = 'rotate(180deg)';
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
        this.rotate(this.direction);
    }

    rotate(direction){
        let $pacman = document.querySelector(".pacman");
        switch(direction){
            case 'W':
                $pacman.style.transform = 'none';
                $pacman.style.transform = 'rotate(180deg)';
                break;
            case 'E':
                $pacman.style.transform = 'none';
                break;
            case 'N':
                $pacman.style.transform = 'none';
                $pacman.style.transform = 'rotate(-90deg)';
                break;
            case 'S':
                $pacman.style.transform = 'none';
                $pacman.style.transform = 'rotate(90deg)';
                break;
            default:
                break;
        }
    }
}
