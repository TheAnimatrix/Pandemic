let bubbles = [];
function windowResized() {
    //console.log('resized');
    resizeCanvas(windowWidth, windowHeight);
  }
function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.position(0, 0);
  canvas.style('z-index', '-1');
  for (let i = 0; i < 15; i++) {
    let x = random(window.innerWidth);
    let y = random(window.innerHeight);
    let r = random(5, 30);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}


function mousePressed() {
  for (let i = bubbles.length - 1; i >= 0; i--) {
    if (bubbles[i].contains(mouseX, mouseY)) {
      bubbles.splice(i, 1);
    }
  }
}

function draw() {
  background(45,45,45);
  for (let i = 0; i < bubbles.length; i++) {
    if (bubbles[i].contains(mouseX, mouseY)) {
      bubbles[i].changeColor(255);
    } else {
      bubbles[i].changeColor(0);
    }
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }

  changeColor(bright) {
    this.brightness = bright;
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  move() {
    
   
    
    this.x = this.x + random(-1,1);
  
    this.y = this.y + random(-1,1);
  }

  show() {
    stroke(249,70,89);
    strokeWeight(4);
    fill(this.brightness, 125);
    
    beginShape();
    for(let a=0;a<360;a+=10)
    {
         let c= 1.5*this.r* sin(a) + this.x;
         let  m= 1.5*this.r* cos(a) + this.y;
         
         vertex(c,m);
    }
    endShape();
    ellipse(this.x, this.y, this.r * 2);

    
  }
}
