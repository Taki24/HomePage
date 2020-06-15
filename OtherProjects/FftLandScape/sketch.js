let mic, fft;

let cols,
    rows,
    scl,
    w,
    h,
    terrain = [];

function setup() {
  createCanvas(1100, 700, WEBGL);

  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT(0.6, 1024);
  fft.setInput(mic);

  w = 560;
  h = 560;
  scl = 25;
  
  cols = w / scl;
  rows = h / scl;
  for(let x = 0; x < cols; x++) {
    terrain[x] = [];
    for(let y = 0; y < rows; y++) {
      terrain[x][y] = -100;
    }
  }
}

function draw() {

  let spectrum = fft.analyze();

  for(let i = 2; i < rows - 2; ++i){
    for(let j = 2; j < cols - 2; ++j){
      terrain[j][i] = map(spectrum[i*j], 0, 255, -100, -10);
    }
  }

  background(0);
  //fill(255, 255, 255, 90);
  //noStroke();
  stroke(105);
  // noFill();

  translate(-30, -110);
  rotateX(PI / 3);
  rotateZ(millis() / 5500);
  translate(-w / 2, -h / 2);


  for(let y = 0; y < rows - 1; ++y){
    beginShape(TRIANGLE_STRIP);
    for(let x = 0; x < cols; ++x){
      vertex(x * scl, y * scl, terrain[x][y]);
      vertex(x * scl, (y+1) * scl, terrain[x][y+1]);
      // fill(60, (x+y)*1.5, 0);
      fill((x*y)/2-40, 10, 0);
    }
    endShape();
  }
}
