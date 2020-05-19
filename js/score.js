class Score{
    render(){
        let $scorename = document.createElement("div");
        $scorename.innerHTML = 'SCORE';
        $scorename.setAttribute("class", "score-name");
        $gameboard.appendChild($scorename);
        let $score = document.createElement("span");
        $score.innerHTML = '0';
        $score.setAttribute("class", "score");
        $scorename.appendChild($score);
    }
}