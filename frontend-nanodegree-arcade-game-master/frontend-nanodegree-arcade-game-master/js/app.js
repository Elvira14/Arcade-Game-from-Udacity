//count how many times the player wins
let winCounter = document.querySelector('.winningNumber');
let win = 0;

Object.prototype.render = function() {

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

}



Object.prototype.reset = function() {

  player.x = 200;
  player.y = 400;

}



// creating enemy

class Enemy {
    constructor (x,y) {
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = Math.floor((Math.random() * 200) + 100);
    }


update (dt) {
    if (this.x <= 500) {
        this.x += this.speed * dt;
    } else {
        this.x = -50;
    }


    //if a collision happens

    if (player.x >= this.x - 30 && player.x <= this.x + 30) {
        if (player.y >= this.y - 30 && player.y <= this.y + 30) {
        this.reset();
        }
        }
    };
};




// player class


class Player {
    constructor(x, y) {
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 400;
}

update () {
    //up
    if (this.direction === 'up') {
        this.y -= 100;
    //down
    } else if (this.y!=400 && this.direction === 'down') {
        this.y += 100;
    //rigth
    } else if (this.x!=400 && this.direction === 'right') {
        this.x += 100;
    //left
    } else if (this.x>0 && this.direction === 'left') {
        this.x -= 100;
    }
    

    this.direction=null;

    
    //when you reach the water

    if (this.y < 25) {

    win++;    
    winCounter.innerHTML = 'Winning number: ' + win;

    this.reset(); 
    }
}

    handleInput (e) {

    {this.direction = e;} 
    }
};

// creating new player object
let player = new Player();

// creating enemies

const totalNumberOfEnemies=4;
let allEnemies = [];

for (let i = 0; i < totalNumberOfEnemies; i++){

allEnemies.push(new Enemy(-2,Math.floor((Math.random() * 180) + 60)));

}



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
   };

    player.handleInput(allowedKeys[e.keyCode]);

});