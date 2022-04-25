
var littleMan;
var trees;
let moveX, moveY;

function setup() {
	createCanvas(windowWidth, windowHeight);
	moveX = width/2;
	moveY = height/2;
	background(100);
	trees = new Group();
}

function draw() {
	littleMan = createSprite(moveX, moveY, 50, 100);
	
	littleMan.velocity.x = (camera.mouseX-littleMan.position.x)/20;
  littleMan.velocity.y = (camera.mouseY-littleMan.position.y)/20;
	
	if (keyIsDown(LEFT_ARROW)) {
    moveX += 2;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    moveX -= 2;
  }

  if (keyIsDown(UP_ARROW)) {
    moveY -= 2;
  }

  if (keyIsDown(DOWN_ARROW)) {
    moveY += 2;
  }

	
	camera.position.x = littleMan.position.x;
	camera.position.y = littleMan.position.y;
}
