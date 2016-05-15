function link(url, winName, options) {
  winName && open(url, winName, options) || (location = url);
}

function setup()
{

createCanvas( 230, 612 );

s = loadImage("Images/Level 5/s.png");
u = loadImage("Images/Level 5/u.png");
n = loadImage("Images/Level 5/n.png");
d = loadImage("Images/Level 5/d.png");
a = loadImage("Images/Level 5/a.png");
y = loadImage("Images/Level 5/y.png");
o = loadImage("Images/Level 5/o.png");
f = loadImage("Images/Level 5/f.png");
e = loadImage("Images/Level 5/e.png");
g = loadImage("Images/Level 5/g.png");
b = loadImage("Images/Level 5/b.png");
c = loadImage("Images/Level 5/c.png");

yp = loadImage("Images/Level 5/yp.jpg");
undo = loadImage("Images/Level 5/undo.png");
reset = loadImage("Images/Level 5/reset.png");

countClickC = 0;
countClickL = 0;
countClickO = 0;
countClickS = 0;
countClickE = 0;
countClickT = 0;

z = 0;
x = 0;

}

function draw()
{

	background(0,255,0);

	fill(255,255,255)
	text(mouseX,300,300);
	text(mouseY,350,300);

	image(yp,0,0);
  strokeWeight(5);
  stroke(0);
  line(120,12,120,600);
  image(reset,130,312,100,100);
  image(undo,130,412,100,100);

	fill(0,0,0);
	text(countClickC,300,350);
	text(countClickL,300,370);
	text(countClickO,300,390);
	text(countClickS,300,410);
	text(countClickE,300,430);
	text(countClickT,300,450);

	if(countClickC==0){image(o,10,12,100,100)}
	if(countClickC==1){image(s,10,12,100,100)}
	if(countClickC==2){image(a,10,12,100,100)}
	if(countClickC==3){image(u,10,12,100,100)}

	if(countClickL==0){image(d,10,112,100,100)}
	if(countClickL==1){image(a,10,112,100,100)}
	if(countClickL==2){image(u,10,112,100,100)}
	if(countClickL==3){image(g,10,112,100,100)}

	if(countClickO==0){image(o,10,212,100,100)}
	if(countClickO==1){image(u,10,212,100,100)}
	if(countClickO==2){image(a,10,212,100,100)}
	if(countClickO==3){image(n,10,212,100,100)}

	if(countClickS==0){image(y,10,312,100,100)}
	if(countClickS==1){image(a,10,312,100,100)}
	if(countClickS==2){image(d,10,312,100,100)}
	if(countClickS==3){image(e,10,312,100,100)}

	if(countClickE==0){image(f,10,412,100,100)}
	if(countClickE==1){image(g,10,412,100,100)}
	if(countClickE==2){image(d,10,412,100,100)}
	if(countClickE==3){image(a,10,412,100,100)}

	if(countClickT==0){image(g,10,512,100,100)}
	if(countClickT==1){image(y,10,512,100,100)}
	if(countClickT==2){image(u,10,512,100,100)}
	if(countClickT==3){image(e,10,512,100,100)}

	//1st Line
	//A-L
	if (mouseIsPressed == true && mouseButton == LEFT)
		{
			if (z == 0 && mouseX > 10 && mouseX < 100 && mouseY > 12 && mouseY < 112)
				{
					countClickC = countClickC + 1;
					z = z + 1;
				}
		}
	if (mouseIsPressed == false)
		{
			z = 0;
		}
	if (countClickC == 4)
		{
			countClickC = 0;
		}


	//2nd Line
	//X-L
	if (mouseIsPressed == true && mouseButton == LEFT)
		{
			if (z == 0 && mouseX > 10 && mouseX < 100 && mouseY > 112 && mouseY < 212)
				{
					countClickL = countClickL + 1;
					z = z + 1;
				}
		}
	if (mouseIsPressed == false)
		{
			z = 0;
		}
	if (countClickL == 4)
		{
			countClickL = 0;
		}


	//3rd Line
	//O-U
	if (mouseIsPressed == true && mouseButton == LEFT)
		{
			if (z == 0 && mouseX > 10 && mouseX < 100 && mouseY > 212 && mouseY < 312)
				{
					countClickO = countClickO + 1;
					z = z + 1;
				}
		}
	if (mouseIsPressed == false)
		{
			z = 0;
		}
	if (countClickO == 4)
		{
			countClickO = 0;
		}


	//4th Line
	//H-E
	if (mouseIsPressed == true && mouseButton == LEFT)
		{
			if (z == 0 && mouseX > 10 && mouseX < 100 && mouseY > 312 && mouseY < 412)
				{
					countClickS = countClickS + 1;
					z = z + 1;
				}
		}
	if (mouseIsPressed == false)
		{
			z = 0;
		}
	if (countClickS == 4)
		{
			countClickS = 0;
		}


	//5th Line
	//Y-E
	if (mouseIsPressed == true && mouseButton == LEFT)
		{
			if (z == 0 && mouseX > 10 && mouseX < 100 && mouseY > 412 && mouseY < 512)
				{
					countClickE = countClickE + 1;
					z = z + 1;
				}
		}
	if (mouseIsPressed == false)
		{
			z = 0;
		}
	if (countClickE == 4)
		{
			countClickE = 0;
		}


	//6th Line
	//Q-F
	if (mouseIsPressed == true && mouseButton == LEFT)
		{
			if (z == 0 && mouseX > 10 && mouseX < 100 && mouseY > 512 && mouseY < 612)
				{
					countClickT = countClickT + 1;
					z = z + 1;
				}
		}
	if (mouseIsPressed == false)
		{
			z = 0;
		}
	if (countClickT == 4)
		{
			countClickT = 0;
		}

	if(countClickC == 1 && countClickL == 2 && countClickO == 3 && countClickS == 2 && countClickE == 3 && countClickT == 1)
	{
		link("level6.html");
	}
  if(mouseX > 0 && mouseX < 110 && mouseY > 0 && mouseY < 612)
  {
    cursor(HAND);
  }else{
    if(mouseX > 130 && mouseX < 230 && mouseY > 312 && mouseY < 512)
    {
      cursor(HAND);
    }else{
      cursor(ARROW);
    }
  }

  if(mouseIsPressed == true && mouseButton == LEFT)
  {
    if(mouseX > 130 && mouseX < 230 && mouseY > 312 && mouseY < 412)
    {
      link("4keypad.html");
    }
    if(mouseX > 130 && mouseX < 230 && mouseY > 412 && mouseY < 512)
    {
      link("level5(2).html");
    }
  }  
}
