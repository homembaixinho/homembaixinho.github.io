function setup() { 
  createCanvas(windowWidth, windowHeight, WEBGL);

  s = 50
  speed = 0.03
  angle = PI/2.5
  cyan = color('#40dcfe')
  pink = color('#ed03ff')

  w = 1.5*width
  h = height
  rows = w/s
  cols = h/s+2
  pos = 0
  r = width/6
  
  heights = []  
  for (let i = 0; i <= rows; i++)
    heights[i] = []
}

function draw() { 
  background(0)
  
  for (let i = 0; i <= rows; i++) {
    for (let j = 0; j <= rows; j++) {
      heights[i][j] =
        sin(map(abs(i-rows/2), 0, rows/2, 0, HALF_PI)) *
        map(noise(i, pos - j*0.2), 0, 1, 0, 200)
    }
  }

  pos += speed

  push()
    rotateX(angle)
    translate(-w/2, -h/2)
    strokeWeight(1)
    stroke(cyan)
    fill(0)
  
    for (let j = 0; j <= cols; j++) {
      beginShape(TRIANGLE_STRIP)
      for (let i = 0; i <= rows; i++) {
        vertex(i*s, j*s, heights[i][j])
        vertex(i*s, (j+1)*s, heights[i][j+1])
      }
      endShape();
    }
  pop()
  
  push()
    rotateX(angle + HALF_PI)
    translate(0, h/16, h/2)
  
    stroke(pink)
    fill(pink)
    ellipse(0, 0, r*2)
  
    stroke(0)
    strokeWeight(2)
    for (let i = -r; i <= r; i += r/15) {
      line(-r, i, r, i)
    }
  
  pop()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  
  w = 1.5*width
  h = height
  rows = w/s
  cols = h/s+1
  pos = 0
  r = width/6
}
