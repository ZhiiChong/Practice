// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const para = document.querySelector('p');
let count = 0;

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min,max) {
  const num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}

function randomColor() {
  return 'rgb(' + 
         random(0, 255) + ', ' + 
         random(0, 255) + ', ' +
         random(0, 255) + ')';
}

class Shape {
  constructor(x, y, velX, velY, exists) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.exists = exists;
  }
}

class Ball extends Shape {
  constructor(x, y, velX, velY, color, size, exists) {
    super(x, y, velX, velY, exists);

    this.color = color;
    this.size = size;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  update() {
    if ((this.x + this.size) >= width) {
      this.x = width - this.size;
      this.velX = -(this.velX);
    }
  
    if ((this.x - this.size) <= 0) {
      this.x = this.size;
      this.velX = -(this.velX);
    }
  
    if ((this.y + this.size) >= height) {
      this.y = height - this.size;
      this.velY = -(this.velY);
    }
  
    if ((this.y - this.size) <= 0) {
      this.y = this.size;
      this.velY = -(this.velY);
    }
  
    this.x += this.velX;
    this.y += this.velY;
  }

  collisionDetect() {
    for (var j = 0; j < balls.length; j++) {
      if (!(this === balls[j]) && balls[j].exists) {
        var dx = this.x - balls[j].x;
        var dy = this.y - balls[j].y;
        var distance = Math.sqrt(dx * dx + dy * dy);
  
        if (distance < this.size + balls[j].size) {
          balls[j].color = this.color = randomColor();
        }
      }
    }
  }
}

class EvilCircle extends Shape {
  constructor(x, y, exists) {
    super(x, y, exists);

    this.velX = 20;
    this.velY = 20;
    this.color = 'white';
    this.size = 10;
  }

  draw() {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 3;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();
  }

  checkBounds() {
    if ((this.x + this.size) > width) {
      this.x = width - this.size;
    }
  
    if ((this.x - this.size) < 0) {
      this.x = this.size;
    }
  
    if ((this.y + this.size) > height) {
      this.y = height - this.size;
    }
  
    if ((this.y - this.size) < 0) {
      this.y = this.size;
    }
  }

  setControls() {
    window.onkeydown = e => {
      if (e.key === 'a') {
        this.x -= this.velX;
      } else if (e.key === 'd') {
        this.x += this.velX;
      } else if (e.key === 'w') {
        this.y -= this.velY;
      } else if (e.key === 's') {
        this.y += this.velY;
      }
    }
  }

  collisionDetect() {
    for (var j = 0; j < balls.length; j++) {
      if (balls[j].exists) {
        var dx = this.x - balls[j].x;
        var dy = this.y - balls[j].y;
        var distance = Math.sqrt(dx * dx + dy * dy);
  
        if (distance < this.size + balls[j].size) {
          balls[j].exists = false;
          count--;
        }
      }
    }
  }
}

let balls = [];

let evilBall = new EvilCircle(width/2, height/2, true);
evilBall.setControls();

function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);

  while (balls.length < 25) {
    let ball = new Ball (
      random(0, width),
      random(0, height),
      random(-7, 7),
      random(-7, 7),
      randomColor(),
      random(10, 20),
      true
    );
    balls.push(ball);
    count++;
  }

  for (var i = 0; i < balls.length; i++) {
    if(!balls[i].exists){
      continue;
    }
    balls[i].draw();
    balls[i].update();
    balls[i].collisionDetect();
  }

  evilBall.draw();
  evilBall.checkBounds();
  evilBall.collisionDetect();

  para.textContent = '还剩 ' + count + ' 个球';

  requestAnimationFrame(loop);
}

loop();