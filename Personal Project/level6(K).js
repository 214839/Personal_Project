function link(url, winName, options) {
  winName && open(url, winName, options) || (location = url);
}

function setup() {
  createCanvas(250, 500);
  undo = loadImage("Images/Level 6/Undo.png");
  mouseC = 0;
  y = 0;
  z = 0;
  x = 0;
}

function draw() {
  background(0);

  //UNDO
  fill(255);
  rect(200,450,49,49);
  image(undo,200,450,50,50);
  if(mouseIsPressed == true && mouseButton == LEFT)
  {
    if(mouseX > 200 && mouseX < 250 && mouseY > 450 && mouseY < 500)
    {
      link("level6.html");
    }
  }

  //cursor
  if(mouseX > 75 && mouseX < 175 && mouseY > 75 && mouseY < 175)
  {
    cursor(HAND);
  }else{
    if(mouseX > 75 && mouseX < 175 && mouseY > 300 && mouseY < 400)
    {
      cursor(HAND);
    }else{
      if(mouseX > 200 && mouseX < 250 && mouseY > 450 && mouseY < 500)
      {
        cursor(HAND);
      }
      else{
        cursor(ARROW);
      }
    }
  }

    //WHEN GREEN CIRCLE CLICKED
    //GREEN CIRCLE
    fill(0,255,0);
    if(mouseIsPressed == true && mouseButton == LEFT)
    {
      if(mouseX > 75 && mouseX < 175 && mouseY > 75 && mouseY < 175)
      {
        fill(255);
      }
    }
    ellipse(125,125,100,100);

    //WHEN RED CIRCLE CLICKED
    //RED CIRCLE
    fill(255,0,0);
    if(mouseIsPressed == true && mouseButton == LEFT)
    {
      if(mouseX > 75 && mouseX < 175  && mouseY > 300 && mouseY < 400)
      {
        fill(255);
      }
    }
    ellipse(125,350,100,100);

    //MOUSE C
    if(mouseIsPressed == true && mouseButton == LEFT && y == 0)
    {
      if(mouseX > 75 && mouseX < 175  && mouseY > 300 && mouseY < 400 || mouseX > 75 && mouseX < 175 && mouseY > 75 && mouseY < 175)
      {
        mouseC = mouseC + 1;
        y = 1;
      }
    }
    if(mouseIsPressed == false)
    {
      y = 0;
    }

    //FOR GREEN CIRCLE
    if(mouseIsPressed == true && z == 0)
    {
      if(mouseX > 75 && mouseX < 175 && mouseY > 75 && mouseY < 175)
      {
        if(mouseC == 1)
        {
          x = x + 100000 * 1;
          z = 1;
        }
        if(mouseC == 2)
        {
          x = x + 10000 * 1;
          z = 1;
        }
        if(mouseC == 3)
        {
          x = x + 1000 * 1;
          z = 1;
        }
        if(mouseC == 4)
        {
          x = x + 100 * 1;
          z = 1;
        }
        if(mouseC == 5)
        {
          x = x + 10 * 1;
          z = 1;
        }
        if(mouseC == 6)
        {
          x = x + 1 * 1;
          z = 1;
        }
      }
    }
    if(mouseIsPressed == false)
  	{
  		z = 0;
  	}

    //FOR RED CIRCLE
    if(mouseIsPressed == true && z == 0)
    {
      if(mouseX > 75 && mouseX < 175  && mouseY > 300 && mouseY < 400)
      {
        if(mouseC == 1)
        {
          x = x + 100000 * 2;
          z = 1;
        }
        if(mouseC == 2)
        {
          x = x + 10000 * 2;
          z = 1;
        }
        if(mouseC == 3)
        {
          x = x + 1000 * 2;
          z = 1;
        }
        if(mouseC == 4)
        {
          x = x + 100 * 2;
          z = 1;
        }
        if(mouseC == 5)
        {
          x = x + 10 * 2;
          z = 1;
        }
        if(mouseC == 6)
        {
          x = x + 1 * 2;
          z = 1;
        }
      }
    }
    if(mouseIsPressed == false)
  	{
  		z = 0;
  	}

    if(x == 212112 && mouseC >= 6)
    {
      link("level7.html");
    }
    if(mouseC > 6 && x != 212112)
    {
      link("level6(K).html");
    }


}
