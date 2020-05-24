class Fruit{
    constructor(name){
        this.name = name;
        this.x = 265;
        this.y = 335;
        this.width = 30;
        this.height = 30;
    }

    addFruit(){
        let $fruit = document.createElement("img");
        $fruit.src = `./images/${this.name}.png`;
        $fruit.setAttribute("class", `${this.name}`);
        $gameboard.appendChild($fruit);
        $fruit.style.position = 'absolute';
        $fruit.style.left = `${this.x}px`;
        $fruit.style.top = `${this.y}px`;
        $fruit.style.width = `${this.width}px`;
        $fruit.style.height = `${this.height}px`;
        setTimeout(()=>{
            $fruit.remove();
        }, 15000);
    }
}