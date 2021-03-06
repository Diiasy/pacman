window.addEventListener ('load', () => {
    let game = new Game();
    game.start();
    document.addEventListener("keydown", function(event){
        if(event.key === 'Enter'){
            game.startPlay();
        }
    });
  });

let $gameboard =  document.getElementById("game");

// Create maze/game
class Game{
    constructor(){
        this.walls = [];
        this.coins = [];
        this.pacman = new Pacman();
        this.score = new Score();
        this.blinky = new Ghost('blinky');
        this.pinky = new Ghost('pinky');
        this.inky = new Ghost('inky');
        this.clyde = new Ghost('clyde');
        this.cherry = new Fruit('cherry');
    }

    start(){
        this.welcomeMessage();
        // Gather all walls in a div
        let $walls = document.createElement("div");
        $walls.setAttribute("class", "walls");
        $gameboard.appendChild($walls);
        this.createWalls();
        this.walls.forEach(wall => wall.render());
        // Gather all coins in a div
        let $coins = document.createElement("div");
        $coins.setAttribute("class", "coins");
        $gameboard.appendChild($coins);
        this.createCoins();
        this.coins.forEach(coin => coin.createCoins());
        this.score.createScore();
    }

    startPlay(){
        this.intro();
        setTimeout(()=>{
            this.movePacman();
            //Movement of the ghosts 
            this.blinky.moveGhost('blinky');
            setTimeout(()=>{
                this.pinky.moveGhost('pinky');
            },3000);
            setTimeout(()=>{
                this.inky.moveGhost('inky');
            },6000);
            setTimeout(()=>{
                this.clyde.moveGhost('clyde');
            },9000);
            // setTimeout(()=>{
                setInterval(()=>{
                    this.cherry.addFruit();
                },30000);
            // }, 15000);
            setInterval(()=>{
                this.winGame();
            },50);
            let sirenInterval = setInterval(()=>{
                this.siren();
                if (this.blinky.gameOver.stopGame === true || this.pinky.gameOver.stopGame === true || this.inky.gameOver.stopGame === true || this.clyde.gameOver.stopGame === true){
                    clearInterval(sirenInterval);
                }
            },1600);
        }, 4000)        
    }

    createWalls(){
        let wall_1 = new Wall(0, 0, 560, 10);
        this.walls.push(wall_1);
        let wall_2a = new Wall(0, 0, 10, 200);
        this.walls.push(wall_2a);
        let wall_2b = new Wall(0, 380, 10, 240);
        this.walls.push(wall_2b);
        let wall_3 = new Wall(0, 610, 560, 10);
        this.walls.push(wall_3);
        let wall_4a = new Wall(550, 0, 10, 200);
        this.walls.push(wall_4a);
        let wall_4b = new Wall(550, 380, 10, 240);
        this.walls.push(wall_4b);
        let wall_5 = new Wall(50, 50, 60, 40);
        this.walls.push(wall_5);
        let wall_6 = new Wall(150, 50, 80, 40);
        this.walls.push(wall_6);
        let wall_7 = new Wall(270, 10, 20, 80);
        this.walls.push(wall_7);
        let wall_8 = new Wall(330, 50, 80, 40);
        this.walls.push(wall_8);
        let wall_9 = new Wall(450, 50, 60, 40);
        this.walls.push(wall_9);
        let wall_10 = new Wall(50, 130, 60, 20);
        this.walls.push(wall_10);
        let wall_11 = new Wall(150, 130, 20, 140);
        this.walls.push(wall_11);
        let wall_12 = new Wall(210, 130, 140, 20);
        this.walls.push(wall_12);
        let wall_13 = new Wall(390, 130, 20, 140);
        this.walls.push(wall_13);
        let wall_14 = new Wall(450, 130, 60, 20);
        this.walls.push(wall_14);
        let wall_15 = new Wall(10, 190, 100, 10);
        this.walls.push(wall_15);
        let wall_16 = new Wall(170, 190, 60, 20);
        this.walls.push(wall_16);
        let wall_17 = new Wall(270, 150, 20, 60);
        this.walls.push(wall_17);
        let wall_18 = new Wall(330, 190, 60, 20);
        this.walls.push(wall_18);
        let wall_19 = new Wall(450, 190, 100, 10);
        this.walls.push(wall_19);
        let wall_20 = new Wall(100, 200, 10, 60);
        this.walls.push(wall_20);
        let wall_21 = new Wall(450, 200, 10, 60);
        this.walls.push(wall_21);
        let wall_22 = new Wall(0, 260, 110, 10);
        this.walls.push(wall_22);
        let wall_23 = new Wall(210, 250, 50, 10);
        this.walls.push(wall_23);
        let wall_24 = new Wall(300, 250, 50, 10);
        this.walls.push(wall_24);
        let wall_25 = new Wall(450, 260, 110, 10);
        this.walls.push(wall_25);
        let wall_26 = new Wall(210, 260, 10, 60);
        this.walls.push(wall_26);
        let wall_27 = new Wall(340, 260, 10, 60);
        this.walls.push(wall_27);
        let wall_28 = new Wall(0, 310, 110, 10);
        this.walls.push(wall_28);
        let wall_29 = new Wall(210, 320, 140, 10);
        this.walls.push(wall_29);
        let wall_30 = new Wall(450, 310, 110, 10);
        this.walls.push(wall_30);
        let wall_31 = new Wall(100, 320, 10, 60);
        this.walls.push(wall_31);
        let wall_32 = new Wall(150, 310, 20, 80);
        this.walls.push(wall_32);
        let wall_33 = new Wall(390, 310, 20, 80);
        this.walls.push(wall_33);
        let wall_34 = new Wall(450, 320, 10, 60);
        this.walls.push(wall_34);
        let wall_35 = new Wall(210, 370, 140, 20);
        this.walls.push(wall_35);
        let wall_36 = new Wall(10, 380, 100, 10);
        this.walls.push(wall_36);
        let wall_37 = new Wall(450, 380, 100, 10);
        this.walls.push(wall_37);
        let wall_38 = new Wall(270, 390, 20, 60);
        this.walls.push(wall_38);
        let wall_39 = new Wall(50, 430, 60, 20);
        this.walls.push(wall_39);
        let wall_40 = new Wall(150, 430, 80, 20);
        this.walls.push(wall_40);
        let wall_41 = new Wall(330, 430, 80, 20);
        this.walls.push(wall_41);
        let wall_42 = new Wall(450, 430, 60, 20);
        this.walls.push(wall_42);
        let wall_43 = new Wall(90, 450, 20, 60);
        this.walls.push(wall_43);
        let wall_44 = new Wall(450, 450, 20, 60);
        this.walls.push(wall_44);
        let wall_45 = new Wall(10, 490, 40, 20);
        this.walls.push(wall_45);
        let wall_46 = new Wall(150, 490, 20, 60);
        this.walls.push(wall_46);
        let wall_47 = new Wall(210, 490, 140, 20);
        this.walls.push(wall_47);
        let wall_48 = new Wall(390, 490, 20, 60);
        this.walls.push(wall_48);
        let wall_49 = new Wall(510, 490, 40, 20);
        this.walls.push(wall_49);
        let wall_50 = new Wall(50, 550, 180, 20);
        this.walls.push(wall_50);
        let wall_51 = new Wall(270, 510, 20, 60);
        this.walls.push(wall_51);
        let wall_52 = new Wall(330, 550, 180, 20);
        this.walls.push(wall_52);
    }

    createCoins(){
        // Last line
        for (let i=0; i<26; i++){
            let coin_1 = new Coin(10 + 18 + 20*i, 570 + 18 );
            this.coins.push(coin_1);
        }
        // Column 1
        for (let i=0; i<8; i++){
            // The coin is 4px wide and high, so we need 18px added to it to center it
            // When going from the right it is 22px because we need to add the width of the coin
            let coin_1 = new Coin(10 + 18, 10 + 18 + 20*i);
            let coin_2 = new Coin(560 - 10 - 22, 10 + 18 + 20*i);
            this.coins.push(coin_1, coin_2);
        }
        for (let i=0; i<4; i++){
            let coin_1 = new Coin(10 + 18, 390 + 18 + 20*i);
            let coin_2 = new Coin(560 - 10 - 22, 390 + 18 + 20*i);
            this.coins.push(coin_1, coin_2);
        }
        for (let i=0; i<3; i++){
            let coin_1 = new Coin(10 + 18, 510 + 18 + 20*i);
            let coin_2 = new Coin(560 - 10 - 22, 510 + 18 + 20*i);
            this.coins.push(coin_1, coin_2);
        }
        // Column 2 to 5
        for (let i=0; i<4; i++){
            let coin_1 = new Coin(30 + 18 + 20*i, 10 + 18);
            let coin_2 = new Coin(560 - 30 - 22 - 20*i, 10 + 18);
            this.coins.push(coin_1, coin_2);
        }
        for (let i=0; i<4; i++){
            let coin_1 = new Coin(30 + 18 + 20*i, 90 + 18);
            let coin_2 = new Coin(560 - 30 - 22 - 20*i, 90 + 18);
            this.coins.push(coin_1, coin_2);
        }
        for (let i=0; i<4; i++){
            let coin_1 = new Coin(30 + 18 + 20*i, 150 + 18);
            let coin_2 = new Coin(560 - 30 - 22 - 20*i, 150 + 18);
            this.coins.push(coin_1, coin_2);
        }
        for (let i=0; i<4; i++){
            let coin_1 = new Coin(30 + 18 + 20*i, 390 + 18);
            let coin_2 = new Coin(560 - 30 - 22 - 20*i, 390 + 18);
            this.coins.push(coin_1, coin_2);
        }
        for (let i=0; i<2; i++){
            let coin_1 = new Coin(30 + 18 + 20*i, 450 + 18);
            let coin_2 = new Coin(560 - 30 - 22 - 20*i, 450 + 18);
            this.coins.push(coin_1, coin_2);
        }
        for (let i=0; i<2; i++){
            let coin_1 = new Coin(50 + 18, 470 + 18  + 20*i);
            let coin_2 = new Coin(560 - 50 - 22, 470 + 18  + 20*i);
            this.coins.push(coin_1, coin_2);
        }
        for (let i=0; i<4; i++){
            let coin_1 = new Coin(30 + 18 + 20*i, 510 + 18);
            let coin_2 = new Coin(560 - 30 - 22 - 20*i, 510 + 18);
            this.coins.push(coin_1, coin_2);
        }
        // Column 6
        for (let i=0; i<26; i++){
            let coin_1 = new Coin(110 + 18, 10 + 18  + 20*i);
            let coin_2 = new Coin(560 - 110 - 22, 10 + 18  + 20*i);
            this.coins.push(coin_1, coin_2);
        }
        // Line 1
        for (let i=0; i<6; i++){
            let coin_1 = new Coin(130 + 18 + 20*i, 10 + 18);
            let coin_2 = new Coin(560 - 130 - 22 - 20*i, 10 + 18);
            this.coins.push(coin_1, coin_2);
        }
        // Line 3
        for (let i=0; i<7; i++){
            let coin_1 = new Coin(130 + 18 + 20*i, 90 + 18);
            let coin_2 = new Coin(560 - 130 - 22 - 20*i, 90 + 18);
            this.coins.push(coin_1, coin_2);
        }
        // Line 5
        for (let i=0; i<4; i++){
            let coin_1 = new Coin(170 + 18 + 20*i, 150 + 18);
            let coin_2 = new Coin(560 - 170 - 22 - 20*i, 150 + 18);
            this.coins.push(coin_1, coin_2);
        }
        // Line 20
        for (let i=0; i<6; i++){
            let coin_1 = new Coin(130 + 18 + 20*i, 390 + 18);
            let coin_2 = new Coin(560 - 130 - 22 - 20*i, 390 + 18);
            this.coins.push(coin_1, coin_2);
        }
        // Line 23
        for (let i=0; i<6; i++){
            let coin_1 = new Coin(130 + 18 + 20*i, 450 + 18);
            let coin_2 = new Coin(560 - 130 - 22 - 20*i, 450 + 18);
            this.coins.push(coin_1, coin_2);
        }
        // Line 26
        for (let i=0; i<4; i++){
            let coin_1 = new Coin(170 + 18 + 20*i, 510 + 18);
            let coin_2 = new Coin(560 - 170 - 22 - 20*i, 510 + 18);
            this.coins.push(coin_1, coin_2);
        }
        // Column 9
        for (let i=0; i<2; i++){
            let coin_1 = new Coin(170 + 18, 110 + 18  + 20*i);
            let coin_2 = new Coin(560 - 170 - 22, 110 + 18  + 20*i);
            this.coins.push(coin_1, coin_2);
        }
        for (let i=0; i<2; i++){
            let coin_1 = new Coin(170 + 18, 470 + 18  + 20*i);
            let coin_2 = new Coin(560 - 170 - 22, 470 + 18  + 20*i);
            this.coins.push(coin_1, coin_2);
        }
        // Column 12
        for (let i=0; i<3; i++){
            let coin_1 = new Coin(230 + 18, 30 + 18  + 20*i);
            let coin_2 = new Coin(560 - 230 - 22, 30 + 18  + 20*i);
            this.coins.push(coin_1, coin_2);
        }
        for (let i=0; i<2; i++){
            let coin_1 = new Coin(230 + 18, 410 + 18  + 20*i);
            let coin_2 = new Coin(560 - 230 - 22, 410 + 18  + 20*i);
            this.coins.push(coin_1, coin_2);
        }
        for (let i=0; i<2; i++){
            let coin_1 = new Coin(230 + 18, 530 + 18  + 20*i);
            let coin_2 = new Coin(560 - 230 - 22, 530 + 18  + 20*i);
            this.coins.push(coin_1, coin_2);
        }
    }

    welcomeMessage(){
        let $welcome = document.createElement('div');
        $welcome.classList.add('welcome');
        $welcome.innerHTML = 'Welcome! </br> Press Enter to start a game';
        $gameboard.appendChild($welcome);
    }

    intro(){
        let $welcome = document.querySelector('.welcome');
        $welcome.style.visibility = 'hidden';
        let introSound = new Sound("./audio/opening_song.ogg");
        introSound.play();
        let $ready = document.createElement('div');
        $ready.classList.add('text', 'ready');
        $ready.innerHTML = 'READY!';
        $gameboard.appendChild($ready);
        setTimeout(()=>{
            $gameboard.removeChild($ready);
        }, 4001);
    }

    siren(){
        let siren = new Sound("./audio/siren.ogg");
        siren.volume(0.2);
        siren.play();

    }

    movePacman(){
        let fixThis = this;
        // function moveLeft(){
        //     if (fixThis.pacman.direction === 'W'){
        //         let intervalW = setInterval(()=>{
        //             const canGoLeft = (wall) => CollisionWallPacman(wall, fixThis.pacman, 'left');
        //             if (fixThis.walls.every(canGoLeft)){
        //                 if (fixThis.pacman.x - 5 === 0){
        //                     fixThis.pacman.x = 560 - fixThis.pacman.width + 5;
        //                 }
        //                 fixThis.pacman.x -= 1;
        //                 fixThis.eatCoins();
        //             }else{
        //                 clearInterval(intervalW);
        //             }
        //         },23);
        //     }
        // }
        document.addEventListener("keydown", function(event){
            switch (event.key) {
                case "ArrowLeft":
                    fixThis.pacman.direction = 'W';
                    // moveLeft();
                    const canGoLeft = (wall) => CollisionWallPacman(wall, fixThis.pacman, 'left');
                    if (fixThis.walls.every(canGoLeft)){
                        if (fixThis.pacman.x - 5 === 0){
                            fixThis.pacman.x = 560 - fixThis.pacman.width + 5;
                        }
                        fixThis.pacman.x -= 10;
                        fixThis.eatCoins();
                        fixThis.eatFruit('cherry');
                    }
                    break;
                case "ArrowRight":
                    fixThis.pacman.direction = 'E';
                    const canGoRight = (wall) => CollisionWallPacman(wall, fixThis.pacman, 'right');
                    if (fixThis.walls.every(canGoRight)){
                        if (fixThis.pacman.x + fixThis.pacman.width + 5 === 560){
                            fixThis.pacman.x = -5;
                        }
                        fixThis.pacman.x += 10;
                        fixThis.eatCoins();
                        fixThis.eatFruit('cherry');
                    }
                    break;
                case "ArrowUp":
                    fixThis.pacman.direction = 'N';
                    const canGoUp = (wall) => CollisionWallPacman(wall, fixThis.pacman, 'up');
                    if (fixThis.walls.every(canGoUp)){
                        fixThis.pacman.y -= 10;
                        fixThis.eatCoins();
                        fixThis.eatFruit('cherry');
                    }
                    break;  
                case "ArrowDown":
                    fixThis.pacman.direction = 'S';
                    const canGoDown = (wall) => CollisionWallPacman(wall, fixThis.pacman, 'down');
                    if (fixThis.walls.every(canGoDown)){
                        fixThis.pacman.y += 10;
                        fixThis.eatCoins();
                        fixThis.eatFruit('cherry');
                    }
                    break;
                default:
                    break;
            }
            fixThis.pacman.render();
        });
    }

    eatCoins(){
        let $coins = document.querySelectorAll(".coin");
        let chomp = new Sound("./audio/eating.ogg");
        for (let i=0; i<this.coins.length; i++){
            if(eat(this.pacman, this.coins[i])){
                $coins.item(i).remove();
                this.coins.splice(i, 1);
                // this.score is an object from the class Score. We are searching for the key score from this object
                this.score.score += 10;
                chomp.volume(0.8);
                chomp.play();
                this.score.render();
                break;
            }
        }
    }

    eatFruit(name){
        let $fruit = document.querySelector(`.${name}`);
        if ($fruit !== null){
            let fruit = new Sound("./audio/fruit.mp3");
            if(eatFruit(this.pacman, $fruit)){
                // this.score is an object from the class Score. We are searching for the key score from this object
                this.score.score += 100;
                fruit.play();
                this.score.render();
                $fruit.remove();
            }
        }
    }

    winGame(){
        if (this.coins.length === 0){
            let $win = document.createElement('div');
            $win.classList.add('text', 'win');
            $win.innerHTML = 'YOU WIN!';
            $gameboard.appendChild($win);
            let $newGame = document.createElement('div');
            $newGame.classList.add('new-game');
            $newGame.innerHTML = 'Press Space to start again';
            $gameboard.appendChild($newGame);
            document.addEventListener("keydown", function(event){
                if(event.key === ' '){
                    document.location.reload(true);
                }
            });
        }
    }

}
