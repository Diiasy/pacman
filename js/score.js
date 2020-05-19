class Score{
    constructor(){
        this.score = 0;
    }

    createScore(){
        let $scorename = document.createElement("div");
        $scorename.innerHTML = 'SCORE';
        $scorename.setAttribute("class", "score-name");
        $gameboard.appendChild($scorename);
        let $score = document.createElement("span");
        $score.innerHTML = this.score;
        $score.setAttribute("class", "score");
        $scorename.appendChild($score);
    }

    render(){
        let $score = document.querySelector(".score");
        $score.innerHTML = this.score;
    }
}