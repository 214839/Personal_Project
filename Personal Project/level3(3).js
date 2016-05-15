function link(url, winName, options) {
  winName && open(url, winName, options) || (location = url);
}

function setup()
{
  createCanvas( 1425, 520 );

  dash = loadImage("Images/Level 3/dash.png");
  dot = loadImage("Images/Level 3/dot.png");
  dot1 = loadImage("Images/Level 3/dot1.png");
  reset = loadImage("Images/Level 3/reset.png");
  back = loadImage("Images/Level 3/back2.png");
  asterix = loadImage("Images/Level 3/asterix.png");

  //Clicking Purposes
  mouseC = 0;
  mouseDash = 0;
  mouseDot = 0;
  rectL = 300;
  rectH = 200;
  z = 0;
  x = 0;
  w = 0;
  wrong = 0;

}

function draw()
{

	//Background
	background(0,0,0);

		//Keypad
	fill(186,186,186)
	rect(50,50,rectL,rectH);
	rect(50,250,rectL,rectH);
  rect(400,325,975,75); // space
  rect(650,100,100,100); //reset
  rect(1000,100,100,100); //back
  image(dash,50,50,300,200);
  image(dot,0,250,400,200);
  image(reset,660,110,80,80);
  image(back,1000,100,100,100);

  //Overall MouseC
  if(mouseIsPressed == true)
  {
    if(mouseButton == LEFT && y == 1)
    {
      if(mouseX > 50 && mouseX < 350 && mouseY > 50 && mouseY < 450)
      {
        mouseC = mouseC + 1;
        y = 0;
      }
    }
  }

  if(mouseIsPressed == false)
  {
    y = 1
  }

  if(mouseC >= 1)
  {
    image(asterix,400,325,75,75);
  }
  if(mouseC >= 2)
  {
    image(asterix,475,325,75,75);
  }
  if(mouseC >= 3)
  {
    image(asterix,550,325,75,75);
  }
  if(mouseC >= 4)
  {
    image(asterix,625,325,75,75);
  }
  if(mouseC >= 5)
  {
    image(asterix,700,325,75,75);
  }
  if(mouseC >= 6)
  {
    image(asterix,775,325,75,75);
  }
  if(mouseC >= 7)
  {
    image(asterix,850,325,75,75);
  }
  if(mouseC >= 8)
  {
    image(asterix,925,325,75,75);
  }
  if(mouseC >= 9)
  {
    image(asterix,1000,325,75,75);
  }
  if(mouseC >= 10)
  {
    image(asterix,1075,325,75,75);
  }
  if(mouseC >= 11)
  {
    image(asterix,1150,325,75,75);
  }
  if(mouseC >= 12)
  {
    image(asterix,1225,325,75,75);
  }
  if(mouseC >= 13)
  {
    image(asterix,1300,325,75,75);
  }


  //BACK AND RESET
  if(mouseIsPressed == true && mouseButton == LEFT)
  {
    if(mouseX > 650 && mouseX < 750 && mouseY > 100 && mouseY < 200)
    {
      link("level3(3).html");
    }
  }

  if(mouseIsPressed == true && mouseButton == LEFT)
  {
    if(mouseX > 1000 && mouseX < 1100 && mouseY > 100 && mouseY < 200)
    {
      link("level3.html");
    }
  }

  //ACTUAL CODE
  //dash
  if(mouseIsPressed == true && z == 0)
	{
		if(mouseX > 50 && mouseX < 350 && mouseY > 50 && mouseY < 250)
		{
			if(mouseC == 1)
			{
				x = x + 1000000000000 * 1;
				z = 1;
			}
			if(mouseC == 2)
			{
				x = x + 100000000000 * 1;
				z = 1;
			}
			if(mouseC == 3)
			{
				x = x + 10000000000 * 1;
				z = 1;
			}
			if(mouseC == 4)
			{
				x = x + 1000000000 * 1;
				z = 1;
			}
      if(mouseC == 5)
			{
				x = x + 100000000 * 1;
				z = 1;
			}
      if(mouseC == 6)
			{
				x = x + 10000000 * 1;
				z = 1;
			}
      if(mouseC == 7)
			{
				x = x + 1000000 * 1;
				z = 1;
			}
      if(mouseC == 8)
			{
				x = x + 100000 * 1;
				z = 1;
			}
      if(mouseC == 9)
			{
				x = x + 10000 * 1;
				z = 1;
			}
      if(mouseC == 10)
			{
				x = x + 1000 * 1;
				z = 1;
			}
      if(mouseC == 11)
			{
				x = x + 100 * 1;
				z = 1;
			}
      if(mouseC == 12)
			{
				x = x + 10 * 1;
				z = 1;
			}
      if(mouseC == 13)
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

  //dot
  if(mouseIsPressed == true && z == 0)
	{
		if(mouseX > 50 && mouseX < 350 && mouseY > 250 && mouseY < 450)
		{
			if(mouseC == 1)
			{
				x = x + 2000000000000 * 1;
				z = 1;
			}
			if(mouseC == 2)
			{
				x = x + 200000000000 * 1;
				z = 1;
			}
			if(mouseC == 3)
			{
				x = x + 20000000000 * 1;
				z = 1;
			}
			if(mouseC == 4)
			{
				x = x + 2000000000 * 1;
				z = 1;
			}
      if(mouseC == 5)
			{
				x = x + 200000000 * 1;
				z = 1;
			}
      if(mouseC == 6)
			{
				x = x + 20000000 * 1;
				z = 1;
			}
      if(mouseC == 7)
			{
				x = x + 2000000 * 1;
				z = 1;
			}
      if(mouseC == 8)
			{
				x = x + 200000 * 1;
				z = 1;
			}
      if(mouseC == 9)
			{
				x = x + 20000 * 1;
				z = 1;
			}
      if(mouseC == 10)
			{
				x = x + 2000 * 1;
				z = 1;
			}
      if(mouseC == 11)
			{
				x = x + 200 * 1;
				z = 1;
			}
      if(mouseC == 12)
			{
				x = x + 20 * 1;
				z = 1;
			}
      if(mouseC == 13)
			{
				x = x + 2 * 1;
				z = 1;
			}
		}
	}
	if(mouseIsPressed == false)
	{
		z = 0;
	}

  //CODE SOLVED
  if(mouseC >= 13 && x == 1212221222122)
  {
    link("level4.html");
  }
  if(mouseC >= 13 && x != 1212221222122 && w == 0)
  {
    mouseC = 0;
    x = 0;
    z = 0;
    wrong = wrong + 1;
    w = 1;
  }
  if(w > 0)
  {
    w = 0;
  }
  if(wrong == 1)
  {
    textSize(50);
    text("TRY AGAIN",700,289);
  }
  if(wrong == 2)
  {
    textSize(50);
    text("YOU CAN DO BETTER",600,289);
  }
  if(wrong == 3)
  {
    textSize(50);
    text("TRY HARDER",700,289);
  }
  if(wrong == 4)
  {
    textSize(50);
    text("YOU CAN'T JUST GUESS IT",590,289);
  }
  if(wrong == 5)
  {
    link("level3.html");
  }

}
