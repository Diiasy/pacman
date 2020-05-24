class GameOver{
    constructor(){
        this.stopGame = false;
    }

    gameOver(){
        let $pacman = document.querySelector('.pacman');
        let $ghost = document.querySelectorAll('.ghost');

        for (let i=0; i<$ghost.length; i++){
            if(!($ghost[i].offsetTop + $ghost[i].offsetHeight < $pacman.offsetTop || 
                $ghost[i].offsetTop >  $pacman.offsetTop +  $pacman.offsetHeight ||
                $ghost[i].offsetLeft + $ghost[i].offsetWidth < $pacman.offsetLeft ||
                $ghost[i].offsetLeft > $pacman.offsetLeft + $pacman.offsetWidth)) {
                    this.gameOverMessage();
                    this.stopGame = true;
            }
        }
    }

    gameOverMessage(){
        let $gameOver = document.createElement('div');
        $gameOver.classList.add('text', 'game-over');
        $gameOver.innerHTML = 'GAME OVER';
        $gameboard.appendChild($gameOver);
        let $newGame = document.createElement('div');
        $newGame.classList.add('new-game');
        $newGame.innerHTML = 'Press Space to start again';
        $gameboard.appendChild($newGame);
        let die = new Sound("./audio/die.ogg");
        die.volume(0.8);
        die.play();
        document.addEventListener("keydown", function(event){
            if(event.key === ' '){
                document.location.reload(true);
            }
        });
    }
}