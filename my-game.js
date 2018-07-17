// constants to set up the environment

const CANVAS_WIDTH = 500;

const CANVAS_HEIGHT = 500;

const BACKGROUND_COLOR = 'lightblue';



// location of the player

var playerX = 100;

var playerY = 50;

var name = "sam";

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  //fill('grey');
  //arc(200, 50, 100, 80, 0, PI, CHORD);
}

// loops forever
function draw() {
  // Draw background
  background(BACKGROUND_COLOR);
  
  // Draw player
  drawPlayer(playerX, playerY);
  
  // Player movement
  if (keyIsDown(LEFT_ARROW)) {
    playerX--;
  }

  else if (keyIsDown(RIGHT_ARROW)) {
    playerX++;
  }

  else if (keyIsDown(UP_ARROW)) {
    playerY--;
  }

  else if (keyIsDown(DOWN_ARROW)) {
    playerY++;
  }
}

// draws a snowman
function drawPlayer(pX, pY) {
  //replace this...
  
	noStroke();
  fill('white');
  
  // body
  ellipse(pX, pY, 50, 50);
  ellipse(pX, pY+50, 75, 75);
  ellipse(pX, pY+100, 100, 100);
  
  // eyes
  fill('black');
  ellipse(pX-10, pY-5, 10, 10);
  ellipse(pX+10, pY-5, 10, 10);
  
  // nose
  fill('orange');
  triangle(pX, pY, pX+10, pY+5, pX-10, pY+10);
}
