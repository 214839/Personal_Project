function link(url, winName, options) {
  winName && open(url, winName, options) || (location = url);
}

function preload(){
  mySound = loadSound("Audio/song.mp3");
}

var tp;

function setup() {
  createCanvas(720, 480);
  tp = loadImage("Images/PlayGame/tp.png");

  mySound.setVolume(0.05);
  mySound.play();
}

function draw() {
  background(0);
  fill(255);
  image(tp,0,0,720,480);
  if(mouseIsPressed == true && mouseButton == LEFT)
  {
    if(mouseX > 520 && mouseX < 720 && mouseY > 420 && mouseY < 480)
    {
      link("blevel.html");
    }
  }
  if(mouseX > 520 && mouseX < 720 && mouseY > 420 && mouseY < 480)
  {
    cursor(HAND);
  }else{
    cursor(ARROW);
  }

}
