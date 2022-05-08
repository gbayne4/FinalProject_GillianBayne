
let divider = 2;
let sunsize = 1;
var littleMan; //main character
var tTrees
var sTrees; //background
var puddle;
var grass;
let moveX, moveY;
var SCENE_W = 3000; //scene barrier width
var SCENE_H = 3000; //scene barrier height
var sunPiece1,sunPiece2,sunPiece1,sunPiece3,sunPiece4,sunPiece5,sunPiece6,sunPiece7,sunPiece8,sunPiece9,sunPiece10;
let pieceVis_1 = true, pieceVis_2 = true, pieceVis_3 = true, pieceVis_4 = true, pieceVis_5 = true, pieceVis_6 = true, pieceVis_7 = true, pieceVis_8 = true,pieceVis_9 = true,pieceVis_10 = true;
let light_sizex = 100, light_sizey = 100;

function preload(){
	shortTree_img = loadImage('images/shorttree.PNG')
	bigTree_img = loadImage('images/bigtree.PNG')
	water_img = loadImage('images/water.PNG')
	miniflame_img = loadImage('images/miniflame.PNG')
	right_walk0 = loadImage('images/littleMan_right0.PNG')
	right_walk1 = loadImage('images/littleMan_right1.PNG')
	left_walk0 = loadImage('images/littleMan_left0.PNG')
	left_walk1 = loadImage('images/littleMan_left1.PNG')
	//sun_back_img = loadImage('sun_back.PNG')
}

function setup() {
	//colorMode(HSB,190,100,1000);
	createCanvas(windowWidth, windowHeight);
	moveX = width/2;
	moveY = height/2;
	sTrees = new Group();
	tTrees = new Group();
	puddle = new Group();
	grass = new Group();
/*
sun_back = createSprite(width/2, height/2, 40, 40);
	sun_back.addImage(sun_back_img)
	sun_back.scale =.1
*/	
//water puddles
for(var i = 0; i<50; i++) {
	var water = createSprite(random(-width-SCENE_W, SCENE_W+width), random(-height-SCENE_W , SCENE_H+height), 150,150);
	water.addImage(water_img)
	water.scale = .5
	puddle.add(water);
}
//create player
//colorMode(HSB,190,100,10);
littleMan = createSprite(width/2, height/2, 40, 40);
	littleMan.scale = .3
	littleMan.addAnimation('up', 'images/littleMan_up2.PNG','images/littleMan_up0.PNG','images/littleMan_up1.PNG')
	littleMan.addAnimation('down', 'images/littleMan_down2.PNG','images/littleMan_down0.PNG','images/littleMan_down1.PNG')
	littleMan.addAnimation('still','images/littleMan_down0.PNG')
		littleMan.addAnimation('right', right_walk0,right_walk1)
	littleMan.addAnimation('left', left_walk0,left_walk1)
littleMan.setCollider('circle', -10, 2, 20)
	
	
//colorMode(HSB,190,100,1000);	
//generate trees in background
for(var i = 0; i<400; i++) {
var shortTrees = createSprite(random(-width, SCENE_W+width), random(-height, SCENE_H+height), 40,70);
	shortTrees.addImage(shortTree_img)
	shortTrees.scale = .2
	shortTrees.setCollider('rectangle',  0, 0, 40,100); //makes trees collidable
	sTrees.add(shortTrees); 
	sTrees.immovable = true;
	
var tallTrees = createSprite(random(-width, SCENE_W+width), random(-height, SCENE_H+height), 40,110);
	tallTrees.addImage(bigTree_img)
	tallTrees.scale = .4
	tallTrees.setCollider('rectangle',  0, 0, 30,110); //makes trees collidable
	tTrees.immovable = true;
	tTrees.add(tallTrees); 
}
//colorMode(HSB,3000,100,10);
	//considered making these a group but wanted more control
	//sun pieces that'll be collected
	sunPiece1 = createSprite(random(-width/2 + 50, SCENE_W - 50), random(-height/2 + 50, SCENE_H - 50), 10,10);
	fill(225,255,211,150)	
	ellipse(sunPiece1.position.x,sunPiece1.position.y,100,100)	
	sunPiece1.addImage(miniflame_img)
		sunPiece1.scale = .03
	sunPiece1.setCollider('circle', 0, 5, 5)

	sunPiece2 = createSprite(random(-width/2 + 50, SCENE_W - 50), random(-height/2 + 50, SCENE_H - 50), 10,10);
	fill(225,255,211,150)	
	ellipse(sunPiece2.position.x,sunPiece2.position.y,100,100)	
	sunPiece2.addImage(miniflame_img)
		sunPiece2.scale =.03
	sunPiece2.setCollider('circle', 0, 5, 5)

		sunPiece3 = createSprite(random(-width/2 + 50, SCENE_W - 50), random(-height/2 + 50, SCENE_H - 50), 10,10);
	fill(225,255,211,150)	
	ellipse(sunPiece3.position.x,sunPiece3.position.y,100,100)		
	sunPiece3.addImage(miniflame_img)
		sunPiece3.scale =.03	
	sunPiece3.setCollider('circle', 0, 5, 5)
	
		sunPiece4 = createSprite(random(-width/2 + 50, SCENE_W - 50), random(-height/2 + 50, SCENE_H - 50), 10,10);
	fill(225,255,211,150)	
	ellipse(sunPiece4.position.x,sunPiece4.position.y,100,100)	
	sunPiece4.addImage(miniflame_img)
		sunPiece4.scale =.03
	sunPiece4.setCollider('circle', 0, 5, 5)
	
		sunPiece5 = createSprite(random(-width/2 + 50, SCENE_W - 50), random(-height/2 + 50, SCENE_H - 50), 10,10);
			fill(225,255,211,150);
	ellipse(sunPiece5.position.x,sunPiece5.position.y,100,100);
	sunPiece5.addImage(miniflame_img);
		sunPiece5.scale = .03
	sunPiece5.setCollider('circle', 0, 5, 5)
	
		sunPiece6 = createSprite(random(-width/2 + 50, SCENE_W - 50), random(-height/2 + 50, SCENE_H - 50), 10,10);
				fill(225,255,211,150)	
	ellipse(sunPiece6.position.x,sunPiece6.position.y,100,100)		
	sunPiece6.addImage(miniflame_img)
		sunPiece6.scale = .03
	sunPiece6.setCollider('circle', 0, 5, 5)
	
		sunPiece7 = createSprite(random(-width/2 + 50, SCENE_W - 50), random(-height/2 + 50, SCENE_H - 50), 10,10);
				fill(225,255,211,150)	
	ellipse(sunPiece7.position.x,sunPiece7.position.y,100,100)	
	sunPiece7.addImage(miniflame_img)
		sunPiece7.scale = .03
	sunPiece7.setCollider('circle', 0, 5, 5)
	
		sunPiece8 = createSprite(random(-width/2 + 50, SCENE_W - 50), random(-height/2 + 50, SCENE_H - 50), 10,10);
				fill(225,255,211,150)	
	ellipse(sunPiece8.position.x,sunPiece8.position.y,100,100)	
	sunPiece8.addImage(miniflame_img)
		sunPiece8.scale = .03
	sunPiece8.setCollider('circle', 0, 5, 5)
		
	sunPiece9 = createSprite(random(-width/2 + 50, SCENE_W - 50), random(-height/2 + 50, SCENE_H - 50), 10,10);
		fill(225,255,211,150)
ellipse(sunPiece9.position.x,sunPiece9.position.y,100,100)	
	sunPiece9.addImage(miniflame_img)
		sunPiece9.scale = .03
	sunPiece9.setCollider('circle', 0, 5, 5)
	
		sunPiece10 = createSprite(random(-width/2 + 50,  SCENE_W - 50), random(-height/2 + 50, SCENE_H - 50), 10,10);
			fill(225,255,211,150)
	ellipse(sunPiece10.position.x,sunPiece10.position.y,100,100)
	sunPiece10.addImage(miniflame_img)
		sunPiece10.scale = .03
	sunPiece10.setCollider('circle', 0, 5, 5)
	
	sun = createSprite(width/2, height/2, 10, 10)
		//	sun.addImage(miniflame_img)
		//	sun.scale = .01
}

function draw() {
	//colorMode(HSB,190,100,1000);
	background(0);
	
	sun.scale = .01
		noStroke()
fill(225,255,211,150)
ellipse(littleMan.position.x,littleMan.position.y,light_sizex,light_sizey)

	//grass
	/*
	fill(50,255,50,5)
	for(var x = 0; x<width; x+=20) {
	for(var y = 0; y<height; y+=20) {
		rect(x, y, 20,20);
			}}
			*/
	//set littleMans motion
littleMan.velocity.x = (moveX-littleMan.position.x)/divider;
littleMan.velocity.y = (moveY-littleMan.position.y)/divider;
//littleMan.position.x = moveX
//littleMan.position.y = moveY
	
// the sun thats making everything glow - may or may not keep
sun.velocity.x = littleMan.velocity.x 
sun.velocity.y = littleMan.velocity.y 

sun.position.x = littleMan.position.x;
sun.position.y = littleMan.position.y;
sun.scale = sunsize

	
 //making it glitchy
	if (littleMan.overlap(puddle) == true){
			divider = 20
		
	}else{
			divider -=1
		if (divider<=2){
			divider = 2
		}}


	
	
	if (littleMan.overlap(sunPiece1) == true && pieceVis_1 == true){
		sunPiece1.removed = true
		pieceVis_1 = false
		sunsize += .2
		light_sizex += 20
		light_sizey += 20
	}
		if (littleMan.overlap(sunPiece2) == true && pieceVis_2 == true){
		sunPiece2.removed = true
		pieceVis_2 = false
		sunsize += .2
		light_sizex += 20
		light_sizey += 20
	}
		if (littleMan.overlap(sunPiece3) == true && pieceVis_3 == true){
		sunPiece3.removed = true
		pieceVis_3 = false
		sunsize += .2
		light_sizex += 20
		light_sizey += 20
	}
		if (littleMan.overlap(sunPiece4) == true && pieceVis_4 == true){
		sunPiece4.removed = true
		pieceVis_4 = false
		sunsize += .2
		light_sizex += 20
		light_sizey += 20
	}
		if (littleMan.overlap(sunPiece5) == true && pieceVis_5 == true){
		sunPiece5.removed = true
		pieceVis_5 = false
		sunsize += .2
		light_sizex += 20
		light_sizey += 20
	}
		if (littleMan.overlap(sunPiece6) == true && pieceVis_6 == true){
		sunPiece6.removed = true
		pieceVis_6 = false
		sunsize += .2
		light_sizex += 20
		light_sizey += 20
	}
		if (littleMan.overlap(sunPiece7) == true && pieceVis_7 == true){
		sunPiece7.removed = true
		pieceVis_7 = false
		sunsize += .2
		light_sizex += 20
		light_sizey += 20
	}
		if (littleMan.overlap(sunPiece8) == true && pieceVis_8 == true){
		sunPiece8.removed = true
		pieceVis_8 = false
		sunsize += .2
		light_sizex += 20
		light_sizey += 20
	}
			if (littleMan.overlap(sunPiece9) == true && pieceVis_9 == true){
		sunPiece9.removed = true
		pieceVis_9 = false
		sunsize += .2
		light_sizex += 20
		light_sizey += 20
	}
		if (littleMan.overlap(sunPiece10) == true && pieceVis_10 == true){
		sunPiece10.removed = true
		pieceVis_10 = false
		sunsize += .2
		light_sizex += 20
		light_sizey += 20
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
    moveX -= 6; 
		littleMan.changeAnimation('left')
  }

  else if (keyDown(RIGHT_ARROW)) {
    moveX  += 6;
		littleMan.changeAnimation('right')
  }

  else if (keyDown(UP_ARROW)) {
    moveY -= 6;
		littleMan.changeAnimation('up')
  }

  else if (keyDown(DOWN_ARROW)) {
    moveY += 6;
		littleMan.changeAnimation('down')
  }
	else {
		littleMan.changeAnimation('still')
	}
	
	//keep trees as barriers - littleMan bounces off the trees lol
		if (keyDown(LEFT_ARROW) && (littleMan.collide(sTrees) == true || littleMan.collide(tTrees) == true)){
    moveX += 30;
		//littleMan.velocity.x += 2
			//littleMan.position.x += 2
  }

  else if (keyDown(RIGHT_ARROW) && (littleMan.collide(sTrees) == true || littleMan.collide(tTrees) == true)) {
    moveX  -= 30;
		//littleMan.velocity.x -= 2
		//littleMan.position.x -= 2
  }

  else if (keyDown(UP_ARROW) && (littleMan.collide(sTrees) == true || littleMan.collide(tTrees) == true)){
    moveY += 30;
		//littleMan.velocity.y += 2
		//littleMan.position.y += 2
  }

  else if (keyDown(DOWN_ARROW) && (littleMan.collide(sTrees) == true || littleMan.collide(tTrees) == true)) {
    moveY -= 30;
		//littleMan.velocity.y -= 2
		//littleMan.position.y -= 2
  }
	

	//littleMan bounces off trees when he collides
	littleMan.collide(sTrees);
	littleMan.collide(tTrees);
	sun.collide(sTrees);
	sun.collide(tTrees);
	
	//trees not on top of water - makes code super slow
	//puddle.displace(sTrees)
	//puddle.displace(tTrees)
	//so that the sunPieces don't land on top of the trees (can't go around)
	sTrees.displace(sunPiece1);
	sTrees.displace(sunPiece2);
	sTrees.displace(sunPiece3);
	sTrees.displace(sunPiece4);
	sTrees.displace(sunPiece5);
	sTrees.displace(sunPiece6);
	sTrees.displace(sunPiece7);
	sTrees.displace(sunPiece8);
	sTrees.displace(sunPiece9);
	sTrees.displace(sunPiece10);
	
	tTrees.displace(sunPiece1);
	tTrees.displace(sunPiece2);
	tTrees.displace(sunPiece3);
	tTrees.displace(sunPiece4);
	tTrees.displace(sunPiece5);
	tTrees.displace(sunPiece6);
	tTrees.displace(sunPiece7);
	tTrees.displace(sunPiece8);
	tTrees.displace(sunPiece9);
	tTrees.displace(sunPiece10);
	

	
	//keeps littleMan within the game
	if(littleMan.position.x < -width/2){ //x left
		littleMan.position.x = -width/2;
		sun.position.x = -width/2;
		moveX += 3
	}
  if(littleMan.position.y < -height/2){
    littleMan.position.y = -height/2;
		sun.position.y = -height/2;
		moveY += 3
	}
  if(littleMan.position.x > SCENE_W){
    littleMan.position.x = SCENE_W;
		sun.position.x = SCENE_W;
		moveX -= 3
	}
  if(littleMan.position.y > SCENE_H){
    littleMan.position.y = SCENE_H;
		sun.position.y = SCENE_H;
		moveY -= 3
	}
	
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
