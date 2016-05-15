function link(url, winName, options) {
  winName && open(url, winName, options) || (location = url);
}

function preload(){
  mySound = loadSound("Audio/song.mp3");
}

var tp;

function setup() {
  createCanvas(720, 480);
  tp = loadImage("Images/2Exit/bgf.jpg");

  mySound.setVolume(0.05);
  mySound.play();
}

function draw() {
  background(0);
  fill(255);
  image(tp,0,0,720,480);
  if(mouseIsPressed == true && mouseButton == LEFT)
  {
    if(mouseX > 614 && mouseX < 701 && mouseY > 427 && mouseY < 459)
    {
      link("https://twitter.com/userd_p3");
    }
  }
  if(mouseX > 614 && mouseX < 701 && mouseY > 427 && mouseY < 459)
  {
    cursor(HAND);
  }else{
      cursor(ARROW);
    }
}
