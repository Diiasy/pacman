// Create coins
class Coin{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = 4;
        this.height = 4;
    }

    createCoins(){
        let $coins = document.querySelector(".coins");
        let $coin = document.createElement("span");
        $coin.setAttribute("class", "coin");
        $coins.appendChild($coin);
        $coin.style.position = 'absolute';
        $coin.style.left = `${this.x}px`;
        $coin.style.top = `${this.y}px`;
        $coin.style.width = `${this.width}px`;
        $coin.style.height = `${this.height}px`;
    }
}