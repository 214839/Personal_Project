function link(url, winName, options) {
  winName && open(url, winName, options) || (location = url);
}

var showc;

function setup() {
  createCanvas(664, 350);
  noStroke();

  bg = loadImage("Images/Level 3/bg3.png");
  scroll = loadImage("Images/Level 3/scroll.png");

  showc = false;

}

function draw() {
  background(0);
  image(bg,0,0,664,350);
  fill(255);
  if(mouseIsPressed == true && mouseButton == LEFT)
  {
    if(mouseX > 0 && mouseX < 60 && mouseY > 90 && mouseY < 140)
    {
      link("level3(2).html");
    }
  }

  if(mouseX > 0 && mouseX < 60 && mouseY > 90 && mouseY < 140)
  {
    cursor(HAND);
  }else{
    cursor(ARROW);
  }

  //For the scroll
  if(mouseIsPressed == true && mouseButton == LEFT)
  {
    if(mouseX > 63 && mouseX < 71 && mouseY > 267 && mouseY < 318)
    {
      showc = true;
    }
  }

  if(showc == true)
  {
    image(scroll,10,10,380,340);
    if(mouseIsPressed == true && mouseButton == LEFT)
    {
      if(mouseX > 336 && mouseX < 358 && mouseY > 43 && mouseY < 71)
      {
        showc = false;
      }
    }
  }

  if(mouseIsPressed == true && mouseButton == LEFT)
  {
    if(mouseX > 634 && mouseX < 655 && mouseY > 134 && mouseY < 167)
    {
      link("level3(3).html")
    }
  }

}
