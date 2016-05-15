function link(url, winName, options) {
  winName && open(url, winName, options) || (location = url);
}

function preload(){
  mySound = loadSound("Audio/song1.m4a");
}

function setup() {
  createCanvas(691, 400);
  textSize(15);

  bgf = loadImage("Images/Level 4/wallf.png");

  mySound.setVolume(0.3);
  mySound.play();
}

function draw() {
  image(bgf,0,0,691,400);
  if(mouseIsPressed == true)
  {
    if(mouseX > 215 && mouseX < 262 && mouseY > 220 && mouseY < 280)
    {
      link("level2.html");
    }
    if(mouseX > 291 && mouseX < 342 && mouseY > 220 && mouseY < 280)
    {
      link("level1.html");
    }
    if(mouseX > 368 && mouseX < 414 && mouseY > 220 && mouseY < 280)
    {
      link("level5.html");
    }
    if(mouseX > 446 && mouseX < 495 && mouseY > 220 && mouseY < 280)
    {
      link("level3.html");
    }
  }

  if(mouseX > 215 && mouseX < 495 && mouseY > 220 && mouseY < 280)
  {
    cursor(HAND);
  }else{
    cursor(ARROW);
  }
}
