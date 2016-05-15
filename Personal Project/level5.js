function link(url, winName, options) {
  winName && open(url, winName, options) || (location = url);
}

function setup(){

createCanvas(691,403);

lp = loadImage("Images/Level 5/level53.png");

}


function draw()
{
	background(0,0,0);

	image(lp,0,0,691,403);
	fill(255,255,255);

	if (mouseIsPressed == true){

		if (mouseX > 482 && mouseX < 529 && mouseY > 277 && mouseY < 296){

			link("level5(2).html");

		}

	}

	if (mouseX > 482 && mouseX < 529 && mouseY > 277 && mouseY < 296)
	{
		cursor(HAND);
	}
	else
	{
		cursor(ARROW);
	}

}
