window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    $board.innerHTML = '';
    let game = new Game();
    game.start();
  };
};

let $board = document.querySelector("#game-board");

class Game {
  constructor(){
    this.car = new Car();
    this.obstacles = new Obstacle();
  }
  start(){
    let $road = document.querySelector(".road-img");
    let $scoredisplay = document.querySelector(".score-display");
    $road.classList.remove("hide");
    $scoredisplay.classList.remove("hide");
    this.render();
  }

  render(){
    let $score = document.querySelector(".score");
    $score.innerHTML = 0;
    this.car.render();
    this.obstacles.render();
  }
}

class Car {
  render(){
    let $car = document.querySelector(".car-img");
    $car.classList.remove("hide");
    $car.style.left = '875px';
    let $road = document.querySelector(".road-img");
    document.addEventListener("keydown", function(event){
      switch (event.key) {
          case "ArrowLeft":
              $car.style.left = `${$car.offsetLeft - 10}px`;
              break;
          case "ArrowRight":
              $car.style.left = `${$car.offsetLeft + 10}px`;
              break;
         default:
              break;
      }
      if(detectionCarInRoad($car, $road)) alert("You are off the road");
    });
  }
}



class Obstacle {
  constructor(){
    this.obstacles = [];
  }

  render(){
    let intervalId = setInterval(()=> {
      let $obstacle = document.createElement("div");
      let poolOfObstacles = ['obstacle75', 'obstacle100', 'obstacle125', 'obstacle150', 'obstacle175', 'obstacle200']
      $obstacle.setAttribute("class", `${poolOfObstacles[Math.floor(Math.random()*6)]}`);
      $board.appendChild($obstacle);
      // Depending on the size of the obstacle it can appear from one side to the other of the road
      // One obstacle every 4 seconds
      this.obstacles.push($obstacle);
      let nbOfObs = this.obstacles.length;
      let lastObstacle = this.obstacles[nbOfObs-1];
      if (lastObstacle === '.obstacle75'){
        lastObstacle.style.left = `${740+(Math.random() * 245)}px`;
      } else if (lastObstacle === '.obstacle100'){
        lastObstacle.style.left = `${740+(Math.random() * 220)}px`;
      } else if (lastObstacle === '.obstacle125'){
        lastObstacle.style.left = `${740+(Math.random() * 195)}px`;
      } else if (lastObstacle === '.obstacle150'){
        lastObstacle.style.left = `${740+(Math.random() * 170)}px`;
      } else if (lastObstacle === '.obstacle175'){
        lastObstacle.style.left = `${740+(Math.random() * 145)}px`;
      } else {
        lastObstacle.style.left = `${740+(Math.random() * 120)}px`;
      }
    },3000)

    // Obstacles are falling of 1px every 0.05sec
    setInterval(()=> {
      let $car = document.querySelector(".car-img");
      let $score = document.querySelector(".score");
      this.obstacles.forEach(($obstacle)=> {
        if(CollisionWall($obstacle, $car)){
          let $gameover = document.createElement("div");
          $gameover.setAttribute("class", "gameover");
          $gameover.innerHTML = `GAME OVER!... </br> Your final score: ${$score.innerHTML}`;
          $board.appendChild($gameover);
          clearInterval(intervalId);
          this.obstacles = [];
        } 
        $obstacle.style.top = `${$obstacle.offsetTop + 1}px`;
      })
    },10)
    // Managing score every 0.5 seconds
    // Don't work because some elements going through the for loop didn't pass the car yet: they are never counted in the score
    // Find a solution to check the obstacle once it is not on the screen anymore
    setInterval(()=> {
      let $car = document.querySelector(".car-img");
      let $score = document.querySelector(".score");
      let score = 0;
      this.obstacles.forEach(($obstacle)=> {
        if ($obstacle.offsetTop > $car.offsetTop + $car.height) {
          score += 1
          $score.innerHTML = `${score}`;
        }
      })
    },500);  
  }
}


function detectionCarInRoad($dom1,$dom2){
    let el1 = {
        x: $dom1.offsetLeft,
        y: $dom1.offsetTop,
        width: $dom1.offsetWidth,
        height: $dom1.offsetHeight
    }
    
    let el2 = {
        x:$dom2.offsetLeft,
        y:$dom2.offsetTop,
        width:$dom2.offsetWidth,
        height:$dom2.offsetHeight
    }

    if((el2.x + el2.width < el1.x + 90||
          el2.x + 90 > el1.x + el1.width
    )) {
        return true;
    } else {
        return false
    }
}

function CollisionWall($dom1,$dom2){
  let el1 = {
      x: $dom1.offsetLeft,
      y: $dom1.offsetTop,
      width: $dom1.offsetWidth,
      height: $dom1.offsetHeight
  }
  
  let el2 = {
      x:$dom2.offsetLeft,
      y:$dom2.offsetTop,
      width:$dom2.offsetWidth,
      height:$dom2.offsetHeight
  }

  if(!(el2.y + el2.height < el1.y || 
    el2.y > el1.y + el1.height ||
    el2.x + el2.width < el1.x ||
    el2.x > el1.x + el1.width)) {
      return true;
  } else {
      return false
  }
}