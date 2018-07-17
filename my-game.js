/*
	Put the code for your game in this file.
	This code is just for you to get started.	

	by Sam Kolovson
 */

// constants to set up the environment
const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;
const BACKGROUND_COLOR = 'lightblue';

// variables to hold the players location
var playerX = 50;
var playerY = 50;

/*
	The setup function runs once when the program starts.
 */
function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}

/*
	 The draw function loops over and over until the program stops
	 or when noLoop() is called.
 */
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

/*
	This function draw the player on the screen at pX, pY.
 */
function drawPlayer(pX, pY) {
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
