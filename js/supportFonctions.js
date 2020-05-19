// Stop when encounter wall
function CollisionWall($dom1,$dom2, direction){
    let el1 = {
        x: $dom1.x,
        y: $dom1.y,
        width: $dom1.width,
        height: $dom1.height
    }
    
    let el2 = {
        x:$dom2.x-5,
        y:$dom2.y-5,
        // + 10 is to compensate the border of pacman
        width:$dom2.width + 10,
        height:$dom2.height + 10
    }
  
    switch(direction){
        case 'left':
            if (!(el1.x + el1.width === el2.x && el1.y < el2.y + el2.height && el1.y + el1.height > el2.y)){
                return true;
            }
            break;
        case 'right':
            if (!(el1.x === el2.x + el2.width && el1.y < el2.y + el2.height && el1.y + el1.height > el2.y)){
                return true;
            } 
            break;
        case 'up':
            if (!(el1.y + el1.height === el2.y && el1.x < el2.x + el2.width && el1.x + el1.width > el2.x)){
                return true;
            } 
            break;
        case 'down':
            if (!(el1.y === el2.y + el2.height && el1.x < el2.x + el2.width && el1.x + el1.width > el2.x)){
                return true;
            }
            break;
        default:
            break;
    }
}

// Define the collision with a coin
function eatCoins($dom1,$dom2){
    let el1 = {
        x: $dom1.x,
        y: $dom1.y,
        width: $dom1.width,
        height: $dom1.height
    }
    
    let el2 = {
        x:$dom2.x,
        y:$dom2.y,
        width:$dom2.width,
        height:$dom2.height
    }
    
    if(!(el2.y + el2.height < el1.y || 
      el2.y > el1.y + el1.height ||
      el2.x + el2.width < el1.x ||
      el2.x > el1.x + el1.width)) {
        return true;
    } else {
        return false;
    }
  }
