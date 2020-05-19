// Create coins
class Coin{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    render(){
        let $coin = document.createElement("span");
        $coin.setAttribute("class", "coin");
        $gameboard.appendChild($coin);
        $coin.style.position = 'absolute';
        $coin.style.left = `${this.x}px`;
        $coin.style.top = `${this.y}px`;
    }
}