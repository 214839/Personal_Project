function link(url, winName, options) {
  winName && open(url, winName, options) || (location = url);
}

function preload(){
  mySound = loadSound("Audio/song.mp3");
}

//THE LIGHTS
var bgb;
var lo1;
var lo2;
var lo3;
var lo4;
var lo5;
var lo6;

//TRANSPARENT BACKGROUNDS
var t1;
var t2;
var t3;
var t4;
var t5;
var t6;

//SCROLL
var scroll;


function setup() {
  createCanvas(592, 446);
  //LOAD IMAGE FOR LIGHTS
  bgb = loadImage("Images/Level 1/bgb.png");
  lo1 = loadImage("Images/Level 1/lo1.png");
  lo2 = loadImage("Images/Level 1/lo2.png");
  lo3 = loadImage("Images/Level 1/lo3.png");
  lo4 = loadImage("Images/Level 1/lo4.png");
  lo5 = loadImage("Images/Level 1/lo5.png");
  lo6 = loadImage("Images/Level 1/lo6.png");

  //LOAD IMAGE FOR THE TRANSPARENT BACKGROUND's
  t1 = loadImage("Images/Level 1/t1.png");
  t2 = loadImage("Images/Level 1/t2.png");
  t3 = loadImage("Images/Level 1/t3.png");
  t4 = loadImage("Images/Level 1/t4.png");
  t5 = loadImage("Images/Level 1/t5.png");
  t6 = loadImage("Images/Level 1/t6.png");

  //LOAD IMAGE FOR SCROLL
  scroll = loadImage("Images/Level 1/scroll.png");

// VARIABLES FOR LIGHT
  ml1 = 1;
  mls1 = 0;
  ml2 = 1;
  mls2 = 0;
  ml3 = 1;
  mls3 = 0;
  ml4 = 1;
  mls4 = 0;
  ml5 = 1;
  mls5 = 0;
  ml6 = 1;
  mls6 = 0;

  mySound.setVolume(0.05);
  mySound.play();
}

function draw() {
  background(0);
  image(bgb, 0, 0);
  fill(255);

//LIGHT 1
  if(mouseIsPressed == true)
  {
    if(mouseButton == LEFT && mls1 == 0)
    {
      if(mouseX > 40 && mouseX < 85 && mouseY > 50 && mouseY < 100)
      {
        if(ml1 == 1)
        {
          ml1 = 2;
        }else{
          ml1 = 1;
        }
        mls1 = 1;
      }
    }
  }
  if(mouseIsPressed == false)
  {
    mls1 = 0;
  }

// LIGHT 2
  if(mouseIsPressed == true)
  {
    if(mouseButton == LEFT && mls2 == 0)
    {
      if(mouseX > 125 && mouseX < 175 && mouseY > 50 && mouseY < 100)
      {
        if(ml2 == 1)
        {
          ml2 = 2;
        }else{
          ml2 = 1;
        }
        mls2 = 1;
      }
    }
  }
  if(mouseIsPressed == false)
  {
    mls2 = 0;
  }

  // LIGHT 3
    if(mouseIsPressed == true)
    {
      if(mouseButton == LEFT && mls3 == 0)
      {
        if(mouseX > 220 && mouseX < 270 && mouseY > 50 && mouseY < 100)
        {
          if(ml3 == 1)
          {
            ml3 = 2;
          }else{
            ml3 = 1;
          }
          mls3 = 1;
        }
      }
    }
    if(mouseIsPressed == false)
    {
      mls3 = 0;
    }

    // LIGHT 4
      if(mouseIsPressed == true)
      {
        if(mouseButton == LEFT && mls4 == 0)
        {
          if(mouseX > 310 && mouseX < 360 && mouseY > 50 && mouseY < 100)
          {
            if(ml4 == 1)
            {
              ml4 = 2;
            }else{
              ml4 = 1;
            }
            mls4 = 1;
          }
        }
      }
      if(mouseIsPressed == false)
      {
        mls4 = 0;
      }

      // LIGHT 5
        if(mouseIsPressed == true)
        {
          if(mouseButton == LEFT && mls5 == 0)
          {
            if(mouseX > 410 && mouseX < 460 && mouseY > 50 && mouseY < 100)
            {
              if(ml5 == 1)
              {
                ml5 = 2;
              }else{
                ml5 = 1;
              }
              mls5 = 1;
            }
          }
        }
        if(mouseIsPressed == false)
        {
          mls5 = 0;
        }

        // LIGHT 6
          if(mouseIsPressed == true)
          {
            if(mouseButton == LEFT && mls6 == 0)
            {
              if(mouseX > 500 && mouseX < 550 && mouseY > 50 && mouseY < 100)
              {
                if(ml6 == 1)
                {
                  ml6 = 2;
                }else{
                  ml6 = 1;
                }
                mls6 = 1;
              }
            }
          }
          if(mouseIsPressed == false)
          {
            mls6 = 0;
          }

// DETERMINING IF THE LIGHT IS ON/OFF
//T1
  if(ml1 == 1)
  {
    image(lo1,38,57);
  }
  if(ml1 == 2)
  {
    image(t1,0,0);
  }

//T2
  if(ml2 == 1)
  {
    image(lo2,128,57);
  }
  if(ml2 == 2)
  {
    image(t2,0,0);
  }

  //T3
    if(ml3 == 1)
    {
      image(lo3,220,57);
    }
    if(ml3 == 2)
    {
      image(t3,0,0);
    }

  //T4
    if(ml4 == 1)
    {
      image(lo4,312,57);
    }
    if(ml4 == 2)
    {
      image(t4,0,0);
    }

  //T5
    if(ml5 == 1)
    {
      image(lo5,413,57);
    }
    if(ml5 == 2)
    {
      image(t5,0,0);
    }

  //T6
    if(ml6 == 1)
    {
      image(lo6,498,57);
    }
    if(ml6 == 2)
    {
      image(t6,0,0);
    }

  if(mouseIsPressed == true)
  {
    if(mouseX > 75 && mouseX < 100 && mouseY > 175 && mouseY < 210)
    {
      image(scroll, 55, 150,225,300);
    }
  }

  if(ml1 == 1 && ml2 == 2 && ml3 == 1 && ml4 == 2 && ml5 == 2 && ml6 == 1)
  {
    link("level2.html");

  }

}
