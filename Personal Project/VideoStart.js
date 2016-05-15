function link(url, winName, options) {
  winName && open(url, winName, options) || (location = url);
}
function setup() {
  createCanvas(720,480);

  vs = createVideo('Videos/vs.mp4');
  vs.loop();
  vs.hide();

}

function draw() {
  background(255);

  image(vs,0,0,710.8,400);
  fill(255);
  if(vs.time() >= 15)
  {
    link("playGame.html");
  }

}
