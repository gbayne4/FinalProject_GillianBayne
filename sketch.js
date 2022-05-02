let divider = 2;
var littleMan; //main character
var tTrees
var sTrees; //background
var puddle;
let moveX, moveY;
var SCENE_W = 5000; //scene barrier width
var SCENE_H = 5000; //scene barrier height
var sunPiece1,sunPiece2,sunPiece1,sunPiece3,sunPiece4,sunPiece5,sunPiece6,sunPiece7,sunPiece8,sunPiece9,sunPiece10;

function setup() {
	colorMode(HSB,190,100,100);
	createCanvas(windowWidth, windowHeight);
	moveX = width/2;
	moveY = height/2;
	sTrees = new Group();
	tTrees = new Group();
	puddle = new Group();


//water puddles
for(var i = 0; i<100; i++) {
	var water = createSprite(random(-width, SCENE_W+width), random(-height, SCENE_H+height), 200,200);
	puddle.add(water);
}
//create player
littleMan = createSprite(width/2, height/2, 40, 40);
littleMan.setCollider('circle', -10, 2, 20)
	
	
	
//generate trees in background
for(var i = 0; i<600; i++) {
var shortTrees = createSprite(random(-width, SCENE_W+width), random(-height, SCENE_H+height), 40,70);
	shortTrees.setCollider('rectangle',  0, 0, 30,60); //makes trees collidable
	sTrees.add(shortTrees); 
	sTrees.immovable = true;
	
var tallTrees = createSprite(random(-width, SCENE_W+width), random(-height, SCENE_H+height), 40,110);
	tallTrees.setCollider('rectangle',  0, 0, 30,110); //makes trees collidable
	tTrees.immovable = true;
	tTrees.add(tallTrees); 
}

	//considered making these a group but wanted more control
	//sun pieces that'll be collected
		sunPiece1 = createSprite(random(-width/2 + 50, SCENE_W - 50), random(-height/2 + 50, SCENE_H - 50), 10,10);
	sunPiece1.setCollider('circle', 0, 5, 5)
		sunPiece2 = createSprite(random(-width/2 + 50, SCENE_W - 50), random(-height/2 + 50, SCENE_H - 50), 10,10);
	sunPiece2.setCollider('circle', 0, 5, 5)
		sunPiece3 = createSprite(random(-width/2 + 50, SCENE_W - 50), random(-height/2 + 50, SCENE_H - 50), 10,10);
	sunPiece3.setCollider('circle', 0, 5, 5)
		sunPiece4 = createSprite(random(-width/2 + 50, SCENE_W - 50), random(-height/2 + 50, SCENE_H - 50), 10,10);
	sunPiece4.setCollider('circle', 0, 5, 5)
		sunPiece5 = createSprite(random(-width/2 + 50, SCENE_W - 50), random(-height/2 + 50, SCENE_H - 50), 10,10);
	sunPiece5.setCollider('circle', 0, 5, 5)
		sunPiece6 = createSprite(random(-width/2 + 50, SCENE_W - 50), random(-height/2 + 50, SCENE_H - 50), 10,10);
	sunPiece6.setCollider('circle', 0, 5, 5)
		sunPiece7 = createSprite(random(-width/2 + 50, SCENE_W - 50), random(-height/2 + 50, SCENE_H - 50), 10,10);
	sunPiece7.setCollider('circle', 0, 5, 5)
		sunPiece8 = createSprite(random(-width/2 + 50, SCENE_W - 50), random(-height/2 + 50, SCENE_H - 50), 10,10);
	sunPiece8.setCollider('circle', 0, 5, 5)
		sunPiece9 = createSprite(random(-width/2 + 50, SCENE_W - 50), random(-height/2 + 50, SCENE_H - 50), 10,10);
	sunPiece9.setCollider('circle', 0, 5, 5)
		sunPiece10 = createSprite(random(-width/2 + 50,  SCENE_W - 50), random(-height/2 + 50, SCENE_H - 50), 10,10);
	sunPiece10.setCollider('circle', 0, 5, 5)
}

function draw() {
	background(15,30,127);
	//set littleMans motion
		littleMan.velocity.x = (moveX-littleMan.position.x)/divider;
		littleMan.velocity.y = (moveY-littleMan.position.y)/divider;
	
	if (littleMan.overlap(puddle) == true){
			divider = 200
		
	}else{
			divider -=2
		if (divider<=2){
			divider = 2
		}}
	
	
	if (littleMan.overlap(sunPiece1) == true){
		sunPiece1.position.x = littleMan.position.x
		sunPiece1.position.y = littleMan.position.y
	}
		if (littleMan.overlap(sunPiece2) == true){
		sunPiece2.position.x = littleMan.position.x
		sunPiece2.position.y = littleMan.position.y
	}
		if (littleMan.overlap(sunPiece3) == true){
		sunPiece3.position.x = littleMan.position.x
		sunPiece3.position.y = littleMan.position.y
	}
		if (littleMan.overlap(sunPiece4) == true){
		sunPiece4.position.x = littleMan.position.x
		sunPiece4.position.y = littleMan.position.y
	}
		if (littleMan.overlap(sunPiece5) == true){
		sunPiece5.position.x = littleMan.position.x
		sunPiece5.position.y = littleMan.position.y
	}
		if (littleMan.overlap(sunPiece6) == true){
		sunPiece6.position.x = littleMan.position.x
		sunPiece6.position.y = littleMan.position.y
	}
		if (littleMan.overlap(sunPiece7) == true){
		sunPiece7.position.x = littleMan.position.x
		sunPiece7.position.y = littleMan.position.y
	}
		if (littleMan.overlap(sunPiece8) == true){
		sunPiece8.position.x = littleMan.position.x
		sunPiece8.position.y = littleMan.position.y
	}
			if (littleMan.overlap(sunPiece9) == true){
		sunPiece9.position.x = littleMan.position.x
		sunPiece9.position.y = littleMan.position.y
	}
		if (littleMan.overlap(sunPiece10) == true){
		sunPiece10.position.x = littleMan.position.x
		sunPiece10.position.y = littleMan.position.y
	}
	
/*
		if (littleMan.overlap(puddle) == true){
		littleMan.velocity.x = (moveX-littleMan.position.x)/200;
		littleMan.velocity.y = (moveY-littleMan.position.y)/200;
		
	}else{
  littleMan.velocity.x = (moveX-littleMan.position.x)/2;
  littleMan.velocity.y = (moveY-littleMan.position.y)/2;
	}
*/

	//controlling the little main with keyboard
	if (keyDown(LEFT_ARROW)) {
    moveX -= 3; 
  }

  if (keyDown(RIGHT_ARROW)) {
    moveX  += 3;
  }

  if (keyDown(UP_ARROW)) {
    moveY -= 3;
  }

  if (keyDown(DOWN_ARROW)) {
    moveY += 3;
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

/*	
loadPixels();
	let rad = 90;
	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			let pos = (x + y * width) * 4;
			let r = pixels[pos];
			let g = pixels[pos + 1];
			let b = pixels[pos + 2];

			let d = dist(x, y, mouseX, mouseY);


			let adjustBrightness = map(d, 0, rad, 1, 0);
			r *= adjustBrightness;
			g *= adjustBrightness;
			b *= adjustBrightness;


			r = constrain(r, 0, 255);
			g = constrain(g, 0, 255);
			b = constrain(b, 0, 255);


			pixels[pos] = r;
			pixels[pos + 1] = g;
			pixels[pos + 2] = b;
			pixels[pos + 3] = 255;
		}
	}
updatePixels();

*/
drawSprites();
}