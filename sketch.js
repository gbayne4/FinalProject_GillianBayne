//I figured it out!!

var littleMan; //main character
var tTrees
var sTrees; //background 
let moveX, moveY;
var SCENE_W = 3000; //scene barrier width
var SCENE_H = 3000; //scene barrier height

function setup() {
	createCanvas(windowWidth, windowHeight);
	moveX = width/2;
	moveY = height/2;
	sTrees = new Group();
	tTrees = new Group();
	//create player
	littleMan = createSprite(width/2, height/2, 40, 40);
	littleMan.setCollider('circle', -10, 2, 20)

	
//generate trees in background
for(var i = 0; i<500; i++) {
var shortTrees = createSprite(random(-width, SCENE_W+width), random(-height, SCENE_H+height), 40,70);
	shortTrees.setCollider('rectangle',  0, 0, 30,60); //makes trees collidable
	sTrees.add(shortTrees); 
	sTrees.immovable = true;
	
var tallTrees = createSprite(random(-width, SCENE_W+width), random(-height, SCENE_H+height), 40,110);
	tallTrees.setCollider('rectangle',  0, 0, 30,110); //makes trees collidable
	tTrees.immovable = true;
	tTrees.add(tallTrees); 
}}

function draw() {
	background(15,30,127);
	//set littleMans motion
  littleMan.velocity.x = (moveX-littleMan.position.x)/10;
  littleMan.velocity.y = (moveY-littleMan.position.y)/10;

	

	//controlling the little main with keyboard
	if (keyDown(LEFT_ARROW)) {
    moveX -= 2; 
  }

  if (keyDown(RIGHT_ARROW)) {
    moveX  += 2;
  }

  if (keyDown(UP_ARROW)) {
    moveY -= 2;
  }

  if (keyDown(DOWN_ARROW)) {
    moveY += 2;
  }

	//littleMan bounces off trees when he collides
	littleMan.collide(sTrees);
	littleMan.collide(tTrees);
	
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

tTrees.debug = mouseIsPressed;
sTrees.debug = mouseIsPressed;
littleMan.debug = mouseIsPressed;
drawSprites();
}