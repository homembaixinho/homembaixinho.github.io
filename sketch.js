let scl = 50;
let ypos = 0;
let speed = 0.1;
let w, h, r, rows, cols;

function setup() { 
  createCanvas(windowWidth, windowHeight, WEBGL);

  w = width * 2
  h = height * 2

  d = w/3

  rows = w/scl
  cols = h/scl
}

function draw() { 
  background(0)
  rotateX(PI / 2.5)

  fill(0)
  stroke(64, 220, 254);
  strokeWeight(2)

  push()
  translate(-w/2, -h/2) 

  for (let x = 0; x <= rows; x++) {
    beginShape(TRIANGLE_STRIP)
    for (let y = 0; y <= cols; y ++) {
      let amp, nextAmp

      if (x < 1/3 * rows -1 || x > 2/3 * rows) {
        amp = nextAmp = 100
      } else if (x < 1/3 * rows) {
        amp = 100
        nextAmp = 10
      } else if (x > 2/3 * rows -1) {
        amp = 10
        nextAmp = 100
      } else {
        amp = nextAmp = 10
      } 

      vertex(x*scl, y*scl, map(noise(x, ypos + y*0.2), 0, 1, -amp, amp))
      vertex((x+1)*scl, y*scl, map(noise(x+1, ypos + y*0.2), 0, 1, -nextAmp, nextAmp))
    }
    endShape()
  }

  ypos -= speed
  pop()

  push()
  translate(0, -1.5*h/2)
  rotateX(-PI/2.5)
  
  stroke(237, 3, 255)
  fill(237, 3, 255)
  ellipse(0, 0, d)

  stroke(0)
  strokeWeight(5)
  for (let y = 100; y >= -d; y-= 15) {
    line(-d/2, y, d/2, y)
  }
  pop()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  
  w = width * 2
  h = height * 2
  
  d = w/3

  rows = w/scl
  cols = h/scl
}
