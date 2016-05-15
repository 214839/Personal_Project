function link(url, winName, options) {
  winName && open(url, winName, options) || (location = url);
}

function setup()
{

createCanvas(870, 120 );

s = loadImage("Images/Level 2/s.png");
p = loadImage("Images/Level 2/p.png");
e = loadImage("Images/Level 2/e.png");
c = loadImage("Images/Level 2/c.png");
t = loadImage("Images/Level 2/t.png");
r = loadImage("Images/Level 2/r.png");
e1 = loadImage("Images/Level 2/e1.png");
d = loadImage("Images/Level 2/d.png");
l = loadImage("Images/Level 2/l.png");
f = loadImage("Images/Level 2/f.png");
b = loadImage("Images/Level 2/b.png");
g = loadImage("Images/Level 2/g.png");

yp = loadImage("Images/Level 2/yp.jpg");
Undo = loadImage("Images/Level 2/Undo.png");

countClickS = 0;
countClickP = 0;
countClickE = 0;
countClickC = 0;
countClickT = 0;
countClickR = 0;
countClickE1 = 0;


z = 0;

}

function draw()
{

	background(0,255,0);

	fill(255,255,255)
	text(mouseX,300,300);
	text(mouseY,350,300);

	image(yp,0,0);
  stroke(0);
  strokeWeight(5);
  line(732,0,732,120);
  line(739,0,739,120);
  image(Undo,762,10,100,100);

  stroke(0);
	fill(0,0,0);

  if(mouseX > 0 && mouseX < 870 && mouseY > 0 && mouseY < 120)
  {
    cursor(HAND);
  }

	if(countClickS==0){image(b,10,12,100,100)}
	if(countClickS==1){image(s,10,12,100,100)}
	if(countClickS==2){image(g,10,12,100,100)}
	if(countClickS==3){image(f,10,12,100,100)}

 if(countClickP==0){image(f,112,10,100,100)}
	if(countClickP==1){image(d,112,10,100,100)}
	if(countClickP==2){image(p,112,10,100,100)}
	if(countClickP==3){image(e1,112,10,100,100)}

	if(countClickE==0){image(g,212,10,100,100)}
	if(countClickE==1){image(r,212,10,100,100)}
	if(countClickE==2){image(d,212,10,100,100)}
	if(countClickE==3){image(e,212,10,100,100)}

	if(countClickC==0){image(d,312,10,100,100)}
	if(countClickC==1){image(b,312,10,100,100)}
	if(countClickC==2){image(c,312,10,100,100)}
	if(countClickC==3){image(g,312,10,100,100)}

	if(countClickT==0){image(f,412,10,100,100)}
	if(countClickT==1){image(g,412,10,100,100)}
	if(countClickT==2){image(d,412,10,100,100)}
	if(countClickT==3){image(t,412,10,100,100)}

	if(countClickR==0){image(e1,512,10,100,100)}
	if(countClickR==1){image(r,512,10,100,100)}
	if(countClickR==2){image(g,512,10,100,100)}
	if(countClickR==3){image(d,512,10,100,100)}

  if(countClickE1==0){image(g,612,10,100,100)}
	if(countClickE1==1){image(e1,612,10,100,100)}
	if(countClickE1==2){image(f,612,10,100,100)}
	if(countClickE1==3){image(b,612,10,100,100)}

	//1st Line
	//A-L
	if (mouseIsPressed == true && mouseButton == LEFT)
		{
			if (z == 0 && mouseX > 10 && mouseX < 100 && mouseY > 12 && mouseY < 112)
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


	//2nd Line
	//X-L
	if (mouseIsPressed == true && mouseButton == LEFT)
		{
			if (z == 0 && mouseX > 112 && mouseX < 212 && mouseY > 10 && mouseY < 100)
				{
					countClickP = countClickP + 1;
					z = z + 1;
				}
		}
	if (mouseIsPressed == false)
		{
			z = 0;
		}
	if (countClickP == 4)
		{
			countClickP = 0;
		}


	//3rd Line
	//O-U
	if (mouseIsPressed == true && mouseButton == LEFT)
		{
			if (z == 0 && mouseX > 212 && mouseX < 312 && mouseY > 10 && mouseY < 100)
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


	//4th Line
	//H-E
	if (mouseIsPressed == true && mouseButton == LEFT)
		{
			if (z == 0 && mouseX > 312 && mouseX < 412 && mouseY > 10 && mouseY < 100)
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


	//5th Line
	//Y-E
	if (mouseIsPressed == true && mouseButton == LEFT)
		{
			if (z == 0 && mouseX > 412 && mouseX < 512 && mouseY > 10 && mouseY < 100)
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


	//6th Line
	//Q-F
	if (mouseIsPressed == true && mouseButton == LEFT)
		{
			if (z == 0 && mouseX > 512 && mouseX < 612 && mouseY > 10 && mouseY < 100)
				{
					countClickR = countClickR + 1;
					z = z + 1;
				}
		}
	if (mouseIsPressed == false)
		{
			z = 0;
		}
	if (countClickR == 4)
		{
			countClickR = 0;
		}

    //7th Line
  	//Q-F
  	if (mouseIsPressed == true && mouseButton == LEFT)
  		{
  			if (z == 0 && mouseX > 612 && mouseX < 712 && mouseY > 10 && mouseY < 100)
  				{
  					countClickE1 = countClickE1 + 1;
  					z = z + 1;
  				}
  		}
  	if (mouseIsPressed == false)
  		{
  			z = 0;
  		}
  	if (countClickE1 == 4)
  		{
  			countClickE1 = 0;
  		}

	if(countClickS == 1 && countClickP == 2 && countClickE == 3 && countClickC == 2 && countClickT == 3 && countClickR == 1 && countClickE1 == 1)
	{
		link("level3.html");
	}

  if(mouseIsPressed == true)
  {
    if(mouseX > 762 && mouseX < 862 && mouseY > 0 && mouseY < 120)
    {
      link("level2.html");
    }
  }
}
