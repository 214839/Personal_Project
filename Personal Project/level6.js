function link(url, winName, options) {
  winName && open(url, winName, options) || (location = url);
}

function setup() {
  createCanvas(700, 500);
  bgf = loadImage("Images/Level 6/bgf.jpg");
  laptop = loadImage("Images/Level 6/laptop.png");
  imageshow = false;
}

function draw() {
  background(255);
  image(bgf,0,0,700,500);
  fill(255);

  //IF THE LAPTOP IS PRESSED
  if(mouseIsPressed == true)
  {
    if(mouseButton == LEFT)
    {
      if(mouseX > 433 && mouseX < 500 && mouseY > 204 && mouseY < 250)
      {
        imageshow = true;
      }
    }
  }

  //LAPTOP SHOW
  if(imageshow == true)
  {
    image(laptop,0,0,700,500);
    if(mouseIsPressed == true)
    {
      if(mouseX > 341 && mouseX < 359 && mouseY > 292 && mouseY < 306)
      {
        imageshow = false;
      }
    }
  }

  //CURSOR
  if(imageshow == false)
  {
    if(mouseX > 433 && mouseX < 500 && mouseY > 204 && mouseY < 250)
    {
      cursor(HAND);
    }else{
      if(mouseX > 75 && mouseX < 115 && mouseY > 343 && mouseY < 361)
      {
        cursor(HAND);
      }else{
        cursor(ARROW);
      }
    }
  }else{
      if(mouseX > 341 && mouseX < 359 && mouseY > 292 && mouseY < 306)
      {
        cursor(HAND);
      }else{
        cursor(ARROW);
      }
  }

  //PRESS THE BOOK
  if(mouseIsPressed == true && mouseButton == LEFT)
  {
    if(mouseX > 75 && mouseX < 115 && mouseY > 343 && mouseY < 361)
    {
      link("level6(K).html")
    }
  }
}
