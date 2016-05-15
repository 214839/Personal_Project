function link(url, winName, options) {
  winName && open(url, winName, options) || (location = url);
}

function setup()
{

  createCanvas(619,403);

  load = loadImage("Images/Level 7/AC.png");
  pics = loadImage("Images/Level 7/BC.png");
  asterix = loadImage("Images/Level 7/asterix.png");
  z = 0;
  mouseC = 0;
  x = 0;

}

function draw()
{

  background(0,0,0);
  image(load,0,0,619,403);
  fill(255,255,255);

  if (mouseIsPressed == true)
  	{
  		if (mouseButton == LEFT)
  		{
  			if(mouseX > 272 && mouseX < 354 && mouseY > 164 && mouseY < 215)

  				{
  					image(pics,0,0,619,403);
  				}
  		}
  	}


  	//Overall MouseC
  	if(mouseIsPressed == true)
  	{
  		if(mouseButton == LEFT && y == 1)
  		{
  			if(mouseX > 260 && mouseX < 370 && mouseY > 120 && mouseY < 160)
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

  	//ASTERIX
  	if(mouseC >= 1)
  	{
  		image(asterix,257,237,30,30);
  	}
  	if(mouseC >=2)
  	{
  		image(asterix,287,237,30,30);
  	}
  	if(mouseC >=3)
  	{
  		image(asterix,317,237,30,30);
  	}
  	if(mouseC >=4)
  	{
  		image(asterix,347,237,30,30);
  	}

  	//0
  	if(mouseIsPressed == true && z == 0)
  	{
  		if(mouseX > 265 && mouseX < 286 && mouseY > 120 && mouseY < 160)
  		{
  			if(mouseC == 1)
  			{
  				x = x + 1000 * 0;
  				z = 1;
  			}
  			if(mouseC == 2)
  			{
  				x = x + 100 * 0;
  				z = 1;
  			}
  			if(mouseC == 3)
  			{
  				x = x + 10 * 0;
  				z = 1;
  			}
  			if(mouseC == 4)
  			{
  				x = x +1 * 0;
  				z = 1;
  			}

  		}
  	}

  	if(mouseIsPressed == false)
  	{
  		z = 0;
  	}

  	//1
  	if(mouseIsPressed == true && z == 0)
  	{
  		if(mouseX > 295 && mouseX < 311 && mouseY > 120 && mouseY < 160)
  		{
  			if(mouseC == 1)
  			{
  				x = x + 1000 * 1;
  				z = 1;
  			}
  			if(mouseC == 2)
  			{
  				x = x + 100 * 1;
  				z = 1;
  			}
  			if(mouseC == 3)
  			{
  				x = x + 10 * 1;
  				z = 1;
  			}
  			if(mouseC == 4)
  			{
  				x = x +1 * 1;
  				z = 1;
  			}

  		}
  	}
  	if(mouseIsPressed == false)
  	{
  		z = 0;
  	}

  	//2
  	if(mouseIsPressed == true && z == 0)
  	{
  		if(mouseX > 318 && mouseX <338 && mouseY > 120 && mouseY < 160)
  		{
  			if(mouseC == 1)
  			{
  				x = x + 1000 * 2;
  				z = 1;
  			}
  			if(mouseC == 2)
  			{
  				x = x + 100 * 2;
  				z = 1;
  			}
  			if(mouseC == 3)
  			{
  				x = x + 10 * 2;
  				z = 1;
  			}
  			if(mouseC == 4)
  			{
  				x = x +1 * 2;
  				z = 1;
  			}

  		}
  	}
  	if(mouseIsPressed == false)
  	{
  		z = 0;
  	}

  	//3
  	if(mouseIsPressed == true && z == 0)
  	{
  		if(mouseX > 348 && mouseX < 370 && mouseY > 120 && mouseY < 160)
  		{
  			if(mouseC == 1)
  			{
  				x = x + 1000 * 3;
  				z = 1;
  			}
  			if(mouseC == 2)
  			{
  				x = x + 100 * 3;
  				z = 1;
  			}
  			if(mouseC == 3)
  			{
  				x = x + 10 * 3;
  				z = 1;
  			}
  			if(mouseC == 4)
  			{
  				x = x +1 * 3;
  				z = 1;
  			}

  		}
  	}
  	if(mouseIsPressed == false)
  	{
  		z = 0;
  	}

  	//OTHERS
  	if(x == 2 && mouseC == 4)
  	{
  		link("Outro.html");
  	}
  	if(x != 2 && mouseC >= 4)
  	{
  		fill(0,0,0);
  		rect(279,280,70,25);
  		fill(255,255,255);
  		textSize(15);
  		text("Try Again!",281,296);
  		if(mouseIsPressed == true && mouseButton == LEFT )
  		{
  			if(mouseX > 279 && mouseX < 350 && mouseY > 280 && mouseY < 305)
  			{
  				link("level7.html");
  			}
  		}
  	}

    //cursor
    if(mouseX > 260 && mouseX < 370 && mouseY > 120 && mouseY < 160)
    {
      cursor(HAND);
    }else{
      if(mouseX > 272 && mouseX < 354 && mouseY > 164 && mouseY < 215)
      {
        cursor(HAND);
      }else{
          cursor(ARROW);
        }
      }
}
