//initially started in 3D - going to try 2D but I'm having some trouble getting it to work

let moveX, moveY, moveZ;
let resetJump = 0;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
	moveY = 20
	moveX = windowWidth/10
	moveZ = 0
}

function draw() {
	camera(moveX, moveY,moveZ - 600)
  background(100);
	
		if (keyIsDown(LEFT_ARROW)) {
    moveX += 2;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    moveX -= 2;
  }

  if (keyIsDown(UP_ARROW)) {
    moveZ -= 2;
  }

  if (keyIsDown(DOWN_ARROW)) {
    moveZ += 2;
  }
/*
	if (keyPressed(32)) {
    moveY += 2;
  }
*/

  fill(255);
  stroke(0);
  push();
  translate(moveX, moveY, moveZ);
  sphere(50);
  pop();
}
/*
function keyPressed(){
	if (keyCode === 32) {
		moveY -= 2
}}
*/