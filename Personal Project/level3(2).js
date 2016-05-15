function link(url, winName, options) {
  winName && open(url, winName, options) || (location = url);
}

var max_distance;

function setup() {
  createCanvas(710, 400);
  noStroke();
  max_distance = dist(0, 0, width, height);
  back = loadImage("Images/Level 3/back.png");
}

function draw() {
  background(0);
  image(back,650,340,60,60);
  for(var i = 0; i <= width; i += 20) {
    for(var j = 0; j <= height; j += 20) {
      var size = dist(mouseX, mouseY, i, j);
      size = size/max_distance * 200;
      ellipse(i, j, size, size);
    }
  }
  fill(255);
  textSize(100);
  text("KILL",200,200);

  if(mouseIsPressed == true && mouseButton == LEFT)
  {
    if(mouseX > 650 && mouseX < 710 && mouseY > 340 && mouseY < 400)
    {
      link("level3.html");
    }
  }

  if(mouseX > 650 && mouseX < 710 && mouseY > 340 && mouseY < 400)
  {
    cursor(HAND);
  }else{
    cursor(ARROW);
  }
}
