function link(url, winName, options) {
  winName && open(url, winName, options) || (location = url);
}

function setup(){

createCanvas(619,403);
lp = loadImage("Images/Level 5/level53final.png");

}


function draw()
{
	background(0,0,0);
	image(lp,0,0,619,403);
	fill(255,255,255);

	if(mouseIsPressed == true)
	{
		if(mouseButton == LEFT)
		{
			if(mouseX > 498 && mouseX < 555 && mouseY > 360 && mouseY < 370)
			{
				link("4keypad.html")
			}
		}
	}
  if(mouseX > 498 && mouseX < 555 && mouseY > 360 && mouseY < 370)
  {
    cursor(HAND);
  }else{
    cursor(ARROW);
  }

}
