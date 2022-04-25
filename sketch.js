
var littleMan; //main character
var trees; //background 
let moveX, moveY;
var SCENE_W = 3000; //scene barrier width
var SCENE_H = 3000; //scene barrier height

function setup() {
	createCanvas(windowWidth, windowHeight);
	moveX = width/2;
	moveY = height/2;
	trees = new Group();
	//create player
	littleMan = createSprite(width/2, height/2, 40, 40);
	
	
	
	
	//generate trees in background
	for(var i = 0; i<300; i++) {
  var newTrees = createSprite(random(-width, SCENE_W+width), random(-height, SCENE_H+height), random(50,80),random(80,130));
	newTrees.setCollider('rectangle',  0, 0, 40,40); //makes trees collidable
//	newTrees.immovable = true;
	trees.add(newTrees);
}}

function draw() {
	background(15,30,127);
	//set littleMans motion
	littleMan.position.x = moveX
	littleMan.position.y = moveY
	
	
	//controlling the little main with keyboard
	if (keyIsDown(LEFT_ARROW)) {
    moveX -= 2; 
  }

  if (keyIsDown(RIGHT_ARROW)) {
    moveX  += 2;
  }

  if (keyIsDown(UP_ARROW)) {
    moveY -= 2;
  }

  if (keyIsDown(DOWN_ARROW)) {
    moveY += 2;
  }
	
	//littleMan bounces off trees when he collides
	trees.displace(littleMan, false);

	//keeps littleMan within the game
	if(littleMan.position.x < -width/2)
    littleMan.position.x = -width/2;
  if(littleMan.position.y < -height/2)
    littleMan.position.y = -height/2;
  if(littleMan.position.x > SCENE_W)
    littleMan.position.x = SCENE_W;
  if(littleMan.position.y > SCENE_H)
    littleMan.position.y = SCENE_H;
	
		//camera following the player	
	camera.position.x = littleMan.position.x;
	camera.position.y = littleMan.position.y;
	
	
drawSprites();
}