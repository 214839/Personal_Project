function link(url, winName, options) {
  winName && open(url, winName, options) || (location = url);
}

function preload(){
  mySound = loadSound("Audio/song.mp3");
}

function setup() {
  // create canvas
  createCanvas(600, 300);
  textSize(15)

  //book VARIABLES
  bo = false;
  bc = false;

  bgf = loadImage("Images/Level 2/bgf.png");
  booko = loadImage("Images/Level 2/booko.png");
  bookoh = loadImage("Images/Level 2/bookoh.png");


  mySound.setVolume(0.05);
  mySound.play();
}

function draw() {
  image(bgf,0,0);
  fill(255);

  //When the book is closed
  if(mouseIsPressed == true)
  {
    if(mouseX > 25 && mouseX < 60 && mouseY > 250 && mouseY < 280)
    {
      bo = true;
      bc = false;
    }
  }
  if(bo == true)
  {
    image(booko,127,50,352,200);
  }


  //When the book is open
  if(mouseIsPressed == true && bo == true)
  {
    if(mouseX > 127 && mouseX < 429 && mouseY > 50 && mouseY < 250)
    {
      bc = true;
      bo = false;
    }
  }

  if(mouseIsPressed == true && bo == true)
  {
    if(mouseX > 440 && mouseX < 454 && mouseY > 200 && mouseY < 230)
    {
      image(bookoh,127,50,352,200);
    }
  }

  //cursor changes
  //Book Open
  if(mouseX > 127 && mouseX < 479 && mouseY > 50 && mouseY < 250 && bc == false)
  {
    cursor(HAND);
  }else{
    cursor(ARROW);
  }

  //Book Closed
  if(mouseX > 25 && mouseX < 60 && mouseY > 250 && mouseY < 280 && bo == false)
  {
    cursor(HAND);
  }else{
    cursor(ARROW);
  }

  if(mouseIsPressed == true)
  {
    if(mouseX > 250 && mouseX < 275 && mouseY > 100 & mouseY < 125)
    {
      link("level2(Unlocked).html");
    }
  }

}
