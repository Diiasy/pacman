// Create walls
class Wall{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    render(){
        let $wall = document.createElement("span");
        $wall.setAttribute("class", "wall");
        $gameboard.appendChild($wall);
        $wall.style.position = 'absolute';
        $wall.style.left = `${this.x}px`;
        $wall.style.top = `${this.y}px`;
        $wall.style.width = `${this.width-4}px`;
        $wall.style.height = `${this.height-4}px`;
    }
}