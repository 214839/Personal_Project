var fingers;

function setup() {
  createCanvas(320, 240);
  // specify multiple formats for different browsers
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  noStroke();
  fill(0);
}

function draw() {
  background(255);
  capture.loadPixels();
  var stepSize = round(constrain(mouseX / 8, 6, 32));
  for (var y=0; y<height; y+=stepSize) {
    for (var x=0; x<width; x+=stepSize) {
      var i = y * width + x;
      var darkness = (255 - capture.pixels[i*4]) / 255;
      var radius = stepSize * darkness;
      ellipse(x, y, radius, radius);
    }
  }
}
