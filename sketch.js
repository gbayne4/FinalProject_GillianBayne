

let divider = 2;
let sunsize = .02;
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
let o1 = 150, o2 = 150, o3 = 150, o4 = 150, o5 = 150, o6 = 150, o7 = 150, o8 = 150, o9 = 150, o10 = 150;
let stick_posx = -15, stick_posy = -30;
let count = 0 ;
let reduce = true;
let collected_all = 0;
let game_over = false, you_won = false;
let game_begin = false;
let timer = 500;
let sun_left = 10;
let opening = true, opening1 = false, opening2 = false, opening3 = false;
let helper = 0;
let wait = 0;
let reset = false;

function preload(){
	font = loadFont('font/font0.ttf');
	shortTree_img = loadImage('images/shorttree_lowo.PNG')
	bigTree_img = loadImage('images/bigtree_lowo.PNG')
	water_img = loadImage('images/water_lowo.PNG')
	miniflame_img = loadImage('images/miniflame.PNG')
	right_walk0 = loadImage('images/littleMan_right0.PNG')
	right_walk1 = loadImage('images/littleMan_right1.PNG')
	left_walk0 = loadImage('images/littleMan_left0.PNG')
	left_walk1 = loadImage('images/littleMan_left1.PNG')
	still_front = loadImage('images/littleMan_down0.PNG')
	down_1 = loadImage('images/littleMan_down2.PNG')
	down_2 = loadImage('images/littleMan_down1.PNG')
	up_1 = loadImage('images/littleMan_up2.PNG')
	up_2 = loadImage('images/littleMan_up0.PNG')
	up_3 = loadImage('images/littleMan_up1.PNG')
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
	water.setCollider('rectangle', 0, 0,450,450)
	puddle.add(water);
}

//generate trees in background
for(var i = 0; i<400; i++) {
var shortTrees = createSprite(random(-width, SCENE_W+width), random(-height, SCENE_H+height), 40,70);
	shortTrees.addImage(shortTree_img)
	shortTrees.scale = .2
	shortTrees.setCollider('rectangle',  0, 0, 90,150); //makes trees collidable
	sTrees.add(shortTrees); 
	sTrees.immovable = true;
	
var tallTrees = createSprite(random(-width, SCENE_W+width), random(-height, SCENE_H+height), 40,110);
	tallTrees.addImage(bigTree_img)
	tallTrees.scale = .4
	tallTrees.setCollider('rectangle',  0, 0, 60,200); //makes trees collidable
	tTrees.immovable = true;
	tTrees.add(tallTrees); 
}
//colorMode(HSB,3000,100,10);
	//considered making these a group but wanted more control
	//sun pieces that'll be collected
	//at least one sun piece nearby first round
	sunPiece1 = createSprite(random(0, width), random(0, height), 10,10);
	sunPiece1.addImage(miniflame_img)
		sunPiece1.scale = .03
	sunPiece1.setCollider('circle', 0, 5, 5)

	sunPiece2 = createSprite(random(-width/2 + 50, SCENE_W - 50), random(-height/2 + 50, SCENE_H - 50), 10,10);	
	sunPiece2.addImage(miniflame_img)
		sunPiece2.scale =.03
	sunPiece2.setCollider('circle', 0, 5, 5)

		sunPiece3 = createSprite(random(-width/2 + 50, SCENE_W - 50), random(-height/2 + 50, SCENE_H - 50), 10,10);		
	sunPiece3.addImage(miniflame_img)
		sunPiece3.scale =.03
	sunPiece3.setCollider('circle', 0, 5, 5)
	
		sunPiece4 = createSprite(random(-width/2 + 50, SCENE_W - 50), random(-height/2 + 50, SCENE_H - 50), 10,10);
	sunPiece4.addImage(miniflame_img)
		sunPiece4.scale =.03
	sunPiece4.setCollider('circle', 0, 5, 5)
	
		sunPiece5 = createSprite(random(-width/2 + 50, SCENE_W - 50), random(-height/2 + 50, SCENE_H - 50), 10,10);
	sunPiece5.addImage(miniflame_img);
		sunPiece5.scale = .03
	sunPiece5.setCollider('circle', 0, 5, 5)
	
		sunPiece6 = createSprite(random(-width/2 + 50, SCENE_W - 50), random(-height/2 + 50, SCENE_H - 50), 10,10);	
	sunPiece6.addImage(miniflame_img)
		sunPiece6.scale = .03
	sunPiece6.setCollider('circle', 0, 5, 5)
	
		sunPiece7 = createSprite(random(-width/2 + 50, SCENE_W - 50), random(-height/2 + 50, SCENE_H - 50), 10,10);
	sunPiece7.addImage(miniflame_img)
		sunPiece7.scale = .03
	sunPiece7.setCollider('circle', 0, 5, 5)
	
		sunPiece8 = createSprite(random(-width/2 + 50, SCENE_W - 50), random(-height/2 + 50, SCENE_H - 50), 10,10);
	sunPiece8.addImage(miniflame_img)
		sunPiece8.scale = .03
	sunPiece8.setCollider('circle', 0, 5, 5)
		
	sunPiece9 = createSprite(random(-width/2 + 50, SCENE_W - 50), random(-height/2 + 50, SCENE_H - 50), 10,10);	
	sunPiece9.addImage(miniflame_img)
		sunPiece9.scale = .03
	sunPiece9.setCollider('circle', 0, 5, 5)
	
		sunPiece10 = createSprite(random(-width/2 + 50,  SCENE_W - 50), random(-height/2 + 50, SCENE_H - 50), 10,10);
	sunPiece10.addImage(miniflame_img)
		sunPiece10.scale = .03
	sunPiece10.setCollider('circle', 0, 5, 5)
	
	
	littleMan = createSprite(width/2, height/2, 40, 40);
	littleMan.scale = .3
	littleMan.addAnimation('up', up_1,up_2,up_3)
	littleMan.addAnimation('down', down_1,still_front,down_2)
	littleMan.addAnimation('still',still_front)
		littleMan.addAnimation('right', right_walk0,right_walk1)
	littleMan.addAnimation('left', left_walk0,left_walk1)
littleMan.setCollider('circle', 0, 0, 50)
	
	sun = createSprite(width/2, height/2, 10, 10)
		sun.addAnimation('sun',miniflame_img)
		sun.scale = .01
}

function draw() {
	background(0,5,0);
	noStroke()
	
	if (game_begin == true){
	
	//the game will end after 240? we'll see having some testing
	count += 1
	
	//circles that go around the mini sun pieces. The o's generate the fading effect
	fill(235,255,211,o1)	
	ellipse(sunPiece1.position.x,sunPiece1.position.y,120,120)
	fill(235,255,211,o2)	
	ellipse(sunPiece2.position.x,sunPiece2.position.y,120,120)
	fill(235,255,211,o3)	
	ellipse(sunPiece3.position.x,sunPiece3.position.y,120,120)
	fill(235,255,211,o4)	
	ellipse(sunPiece4.position.x,sunPiece4.position.y,120,120)
	fill(235,255,211,o5)	
	ellipse(sunPiece5.position.x,sunPiece5.position.y,120,120)
	fill(235,255,211,o6)	
	ellipse(sunPiece6.position.x,sunPiece6.position.y,120,120)
	fill(235,255,211,o7)	
	ellipse(sunPiece7.position.x,sunPiece7.position.y,120,120)
	fill(235,255,211,o8)	
	ellipse(sunPiece8.position.x,sunPiece8.position.y,120,120)
	fill(235,255,211,o9)	
	ellipse(sunPiece9.position.x,sunPiece9.position.y,120,120)
	fill(235,255,211,o10)	
	ellipse(sunPiece10.position.x,sunPiece10.position.y,120,120)
	
	
	sun.changeAnimation('sun')
		noStroke()
fill(235,255,211,150)
//should I center it or have it lined up with the stick?
ellipse(littleMan.position.x + stick_posx,littleMan.position.y + stick_posy,light_sizex,light_sizey)
	
	
	//timer start w/ 500 milliseconds
	
	
		//subtracts current amount of light - currently not opperating as planed
	//console.log(count)
	//console.log(light_sizex)
	//console.log(light_sizey)
	//currently timed so that the sunpiece and ellipse run out of light at the same time (needs to line up w/ sun pieces collected)

		if ((count%50) == 0 && reduce == true && light_sizex > 0 && light_sizey > 0){
				light_sizex -= 10
				light_sizey -= 10
				sunsize -= .002
				reduce = false
			} if ((count%5) == 0){
				reduce = true
		}
		/* //I tried to make it so that as you collected more the time reduced faster but it was too buggy 
			 //and I didn't have enought time to do it since it was a last minute idea :(
			if ((count%50) == 0 && reduce == true && light_sizex > 0 && light_sizey > 0 && sun_left > 5){
				light_sizex -= 10
				light_sizey -= 10
				sunsize -= .002
				reduce = false
			} else if ((count%30) == 0 && reduce == true && light_sizex > 0 && light_sizey > 0 && sun_left > 2){
				light_sizex -= 10
				light_sizey -= 10
				sunsize -= .002
				reduce = false
				timer -= .7
				//It reduces faster as you collect more 
			}else if ((count%15) == 0 && reduce == true && light_sizex > 0 && light_sizey > 0){
				light_sizex -= 10
				light_sizey -= 10
				sunsize -= .002
				reduce = false
				timer -= 1
		}if ((count%5) == 0){
				reduce = true
		}
*/

	//set littleMans motion
//littleMan.velocity.x = (moveX-littleMan.position.x)/divider;
//littleMan.velocity.y = (moveY-littleMan.position.y)/divider;
littleMan.position.x = moveX
littleMan.position.y = moveY
	
// the sun thats making everything glow - may or may not keep
sun.velocity.x = littleMan.velocity.x 
sun.velocity.y = littleMan.velocity.y 

sun.position.x = littleMan.position.x + stick_posx;
sun.position.y = littleMan.position.y + stick_posy;
sun.scale = sunsize


	//sun pieces go away once you over lap them and time increases
	
	if (littleMan.overlap(sunPiece1) == true && pieceVis_1 == true){
		sunPiece1.removed = true
		pieceVis_1 = false
		sunsize += .02
		light_sizex += 100
		light_sizey += 100
		collected_all +=1
		timer += 500
		sun_left -= 1
	}
	if (pieceVis_1 == false){
		o1 -= 5
	}
		if (littleMan.overlap(sunPiece2) == true && pieceVis_2 == true){
		sunPiece2.removed = true
		pieceVis_2 = false
		sunsize += .02
		light_sizex += 100
		light_sizey += 100
		collected_all +=1
		timer += 500
		sun_left -= 1
	}	if (pieceVis_2 == false){
		o2 -= 5
	}
		if (littleMan.overlap(sunPiece3) == true && pieceVis_3 == true){
		sunPiece3.removed = true
		pieceVis_3 = false
		sunsize += .02
		light_sizex += 100
		light_sizey += 100
		collected_all +=1
		timer += 500
		sun_left -= 1
	}	if (pieceVis_3 == false){
		o3 -= 5
	}
		if (littleMan.overlap(sunPiece4) == true && pieceVis_4 == true){
		sunPiece4.removed = true
		pieceVis_4 = false
		sunsize += .02
		light_sizex += 100
		light_sizey += 100
		collected_all +=1
		timer += 500
		sun_left -= 1
	}	if (pieceVis_4 == false){
		o4 -= 5
	}
		if (littleMan.overlap(sunPiece5) == true && pieceVis_5 == true){
		sunPiece5.removed = true
		pieceVis_5 = false
		sunsize += .02
		light_sizex += 100
		light_sizey += 100
		collected_all +=1
		timer += 500
		sun_left -= 1
	}	if (pieceVis_5 == false){
		o5 -= 5
	}
		if (littleMan.overlap(sunPiece6) == true && pieceVis_6 == true){
		sunPiece6.removed = true
		pieceVis_6 = false
		sunsize += .02
		light_sizex += 100
		light_sizey += 100
		collected_all +=1
		timer += 500
		sun_left -= 1
	}	if (pieceVis_6 == false){
		o6 -= 5
	}
		if (littleMan.overlap(sunPiece7) == true && pieceVis_7 == true){
		sunPiece7.removed = true
		pieceVis_7 = false
		sunsize += .02
		light_sizex += 100
		light_sizey += 100
		collected_all +=1
		timer += 500
		sun_left -= 1
	}	if (pieceVis_7 == false){
		o7 -= 5
	}
		if (littleMan.overlap(sunPiece8) == true && pieceVis_8 == true){
		sunPiece8.removed = true
		pieceVis_8 = false
		sunsize += .02
		light_sizex += 100
		light_sizey += 100
		collected_all +=1
		timer += 500
		sun_left -= 1
	}	if (pieceVis_8 == false){
		o8 -= 5
	}
			if (littleMan.overlap(sunPiece9) == true && pieceVis_9 == true){
		sunPiece9.removed = true
		pieceVis_9 = false
		sunsize += .02
		light_sizex += 100
		light_sizey += 100
		collected_all +=1
		timer += 500
		sun_left -= 1
	}	if (pieceVis_9 == false){
		o9 -= 5
	}
		if (littleMan.overlap(sunPiece10) == true && pieceVis_10 == true){
		sunPiece10.removed = true
		pieceVis_10 = false
		sunsize += .02
		light_sizex += 100
		light_sizey += 100
		collected_all +=1
		timer += 500
		sun_left -= 1
	}	if (pieceVis_10 == false){
		o10 -= 5
	}
	if (timer != 0 && you_won == false && game_over == false){
	timer -= 1
	}else{
		timer = 0
	}
	textFont(font, 40);
	fill(255)
	text("Time: " + timer, littleMan.position.x -width/2 +40, littleMan.position.y-height/2 +70);
	text("Sun Pieces Left: " + sun_left, littleMan.position.x -width/2 +40, littleMan.position.y-height/2 +130);
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
	//cant move once game is over
	if (keyDown(LEFT_ARROW) && you_won == false && game_over == false) {
    moveX -= 6; 
		littleMan.changeAnimation('left')
		stick_posx = 23
		stick_posy = 2
		if (keyDown(' ') && (littleMan.overlap(puddle))=== false){
			moveX -= 6; 
		}
  }

  else if (keyDown(RIGHT_ARROW)&& you_won == false && game_over == false) {
    moveX  += 6;
		littleMan.changeAnimation('right')
		stick_posx = -20
		stick_posy = 0
		if (keyDown(' ')&& (littleMan.overlap(puddle))=== false){
			moveX += 6; 
		}
  }

  else if (keyDown(UP_ARROW)&& you_won == false && game_over == false) {
    moveY -= 6;
		littleMan.changeAnimation('up')
		stick_posx = 10
		stick_posy = 10
		if (keyDown(' ')&& (littleMan.overlap(puddle))=== false){
			moveY -= 6; 
		}
  }

  else if (keyDown(DOWN_ARROW)&& you_won == false && game_over == false) {
    moveY += 6;
		littleMan.changeAnimation('down')
		stick_posx = -12
		stick_posy = -30
		if (keyDown(' ')&& (littleMan.overlap(puddle))=== false){
			moveY += 6; 
		}
  }
	else {
		littleMan.changeAnimation('still')
		stick_posx = -15
		stick_posy = -30
	}
	
	
		//attempt to slow down upon entering water
		if (keyDown(LEFT_ARROW) && (littleMan.overlap(puddle))){
    moveX += 5;
  } else if (keyDown(RIGHT_ARROW) && (littleMan.overlap(puddle))){
    moveX  -=  5;
  } else if (keyDown(UP_ARROW) && (littleMan.overlap(puddle))){
    moveY += 5;
  }else if (keyDown(DOWN_ARROW) && (littleMan.overlap(puddle))){
    moveY -= 5;
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
		moveX += 6
	if (you_won == false && game_over == false){ //dont want to appear if the game is over 
	textFont(font, 150);
	fill(255)
	text("border!", littleMan.position.x-185, littleMan.position.y-120);
	}
			if (keyDown(' ')&& (littleMan.overlap(puddle))=== false){ //need to account for if space bar is pressed
			moveX += 6; 
		}
	}
  if(littleMan.position.y < -height/2){
    littleMan.position.y = -height/2;
		sun.position.y = -height/2;
		moveY += 6
	if (you_won == false && game_over == false){ //dont want to appear if the game is over 
	textFont(font, 150);
	fill(255)
	text("border!", littleMan.position.x-185, littleMan.position.y-120);
	}
			if (keyDown(' ')&& (littleMan.overlap(puddle))=== false){
			moveY += 6; 
		}
	}
  if(littleMan.position.x > SCENE_W){
    littleMan.position.x = SCENE_W;
		sun.position.x = SCENE_W;
		moveX -= 6
	if (you_won == false && game_over == false){ //dont want to appear if the game is over 
	textFont(font, 150);
	fill(255)
	text("border!", littleMan.position.x-185, littleMan.position.y-120);
	}
			if (keyDown(' ')&& (littleMan.overlap(puddle))=== false){
			moveX -= 6; 
		}
	}
  if(littleMan.position.y > SCENE_H){
    littleMan.position.y = SCENE_H;
		sun.position.y = SCENE_H;
		moveY -= 6
	if (you_won == false && game_over == false){ //dont want to appear if the game is over 
	textFont(font, 150);
	fill(255)
	text("border!", littleMan.position.x-185, littleMan.position.y-120);
	}
			if (keyDown(' ')&& (littleMan.overlap(puddle))=== false){
			moveY -= 6; 
		}
	}
	
//camera following the player	
	camera.position.x = littleMan.position.x;
	camera.position.y = littleMan.position.y;
	}	
	
if (opening == true){
		textAlign(CENTER);
  textFont(font, 80);
	fill(255)
	text("oh no!", littleMan.position.x , littleMan.position.y-200);
	text("the sun has broken into pieces!", littleMan.position.x , littleMan.position.y-100);
	textFont(font, 60);
	text('press space bar to continue', littleMan.position.x , littleMan.position.y+120);
	littleMan.changeAnimation('still')
	game_begin = false
	helper = 0
	reset = false
}
if (keyDown(' ') && opening == true && helper == 0){
		opening = false
		opening1 = true
	}
if (opening1 == true){
	textAlign(CENTER);
  textFont(font, 80);
	fill(255)
	text("only you can put", littleMan.position.x , littleMan.position.y-200);
	text("the sun back together", littleMan.position.x , littleMan.position.y-100);
	text('collect all the light', littleMan.position.x , littleMan.position.y+120);
	text('before your light fades away', littleMan.position.x , littleMan.position.y+220);
	littleMan.changeAnimation('still')
	if (helper <10){
		helper += 1
	}else{
		helper == 10
	}}
if (keyDown(' ') && opening1 == true && opening == false && helper == 10){
		opening1 = false
		opening2 = true
	}
if (opening2 == true){
	textAlign(CENTER);
	fill(255)
	 textFont(font, 100);
	text("rules:", littleMan.position.x , littleMan.position.y-250);
	 textFont(font, 40);
	text("move using arrow keys", littleMan.position.x , littleMan.position.y-200);
	text("collect light by overlapping center light", littleMan.position.x , littleMan.position.y-150);
	text('to go faster, hold down space bar', littleMan.position.x , littleMan.position.y-100);
	text('avoid trees - you might get stuck', littleMan.position.x , littleMan.position.y+100);
	text('water makes you slower', littleMan.position.x , littleMan.position.y+150);
	text('win by collecting all ten light pieces before time runs out', littleMan.position.x , littleMan.position.y+200);
		if (helper <20){
		helper += 1
	}else{
		helper == 20
	}}
if (keyDown(' ') && opening2 == true && opening1 == false && helper == 20){
		opening2 = false
		opening3 = true
}
if (opening3 == true){
		textAlign(CENTER);
  textFont(font, 80);
	fill(255)
	text("press space bar", littleMan.position.x , littleMan.position.y-200);
	text("when you are ready to begin", littleMan.position.x , littleMan.position.y-100);
	if (helper <30){
		helper += 1
	}else{
		helper == 30
	}}
if (keyDown(' ') && opening3 == true && opening2 == false && helper == 30){
		beg = false
		opening3 = false
		game_begin = true
}
	//won
if (collected_all >= 10){
	textAlign(CENTER);
  textFont(font, 120);
	fill(255)
	text('you put the sun back together!', littleMan.position.x , littleMan.position.y-100);
	//text('the world thanks you :)', littleMan.position.x , littleMan.position.y-200);
	textFont(font, 80);
	text('press space bar to play again', littleMan.position.x , littleMan.position.y+120);
	light_sizex += 5
	light_sizey += 5
	you_won = true;
	wait += 1
	reset = true
	}
//game over sign
//might include (count > 3000) || but for now is only running based one when the light runs out
else if (light_sizex <= 0 || light_sizex <= 0){
	game_over = true
	} //so that the 'you lost' doesn't go away
if (game_over == true){
	textAlign(CENTER);
  textFont(font, 120);
	fill(255)
	text("the sun back together", littleMan.position.x , littleMan.position.y-100);
	text("you couldn't put", littleMan.position.x , littleMan.position.y-200);
	textFont(font, 80);
	text('press space bar to try again', littleMan.position.x , littleMan.position.y+120);
	wait +=1
	reset = true
} 
//game reset
//I added in wait bc the player may be holding the space bar when they lose, and skip over all the text
if ((game_over == true || you_won == true) && keyDown(' ') && wait >= 50 && reset == true){
	wait = 0
	game_over = false
	you_won = false
	
	light_sizex = 100 
	light_sizey = 100
	pieceVis_1 = true, pieceVis_2 = true, pieceVis_3 = true, pieceVis_4 = true, pieceVis_5 = true, pieceVis_6 = true, pieceVis_7 = true, pieceVis_8 = true,pieceVis_9 = true,pieceVis_10 = true;
	o1 = 150, o2 = 150, o3 = 150, o4 = 150, o5 = 150, o6 = 150, o7 = 150, o8 = 150, o9 = 150, o10 = 150;
	
	//randomizing sun pieces location again
	if (sunPiece1.removed) {
		sunPiece1 = createSprite(random(-width/2 + 50, SCENE_W - 50), random(-height/2 + 50, SCENE_H - 50), 10,10);		
		sunPiece1.addImage(miniflame_img)
		sunPiece1.scale =.03
		sunPiece1.setCollider('circle', 0, 5, 5)
	}else{
	sunPiece1.position.x = random(-width-SCENE_W, SCENE_W+width)
	sunPiece1.position.y = random(-height-SCENE_W , SCENE_H+height)
	}
		
		
	if (sunPiece2.removed) {
		sunPiece2 = createSprite(random(-width/2 + 50, SCENE_W - 50), random(-height/2 + 50, SCENE_H - 50), 10,10);		
		sunPiece2.addImage(miniflame_img)
		sunPiece2.scale =.03
		sunPiece2.setCollider('circle', 0, 5, 5)
		
	}else{
	sunPiece2.position.x = random(-width-SCENE_W, SCENE_W+width)
	sunPiece2.position.y = random(-height-SCENE_W , SCENE_H+height)
	}
		
		
	if (sunPiece3.removed) {
		sunPiece3 = createSprite(random(-width/2 + 50, SCENE_W - 50), random(-height/2 + 50, SCENE_H - 50), 10,10);		
		sunPiece3.addImage(miniflame_img)
		sunPiece3.scale =.03
		sunPiece3.setCollider('circle', 0, 5, 5)
		
	}else{
	sunPiece3.position.x = random(-width-SCENE_W, SCENE_W+width)
	sunPiece3.position.y = random(-height-SCENE_W , SCENE_H+height)
	}
	
	if (sunPiece4.removed) {
		sunPiece4 = createSprite(random(-width/2 + 50, SCENE_W - 50), random(-height/2 + 50, SCENE_H - 50), 10,10);		
		sunPiece4.addImage(miniflame_img)
		sunPiece4.scale =.03
		sunPiece4.setCollider('circle', 0, 5, 5)
		
	}else{
	sunPiece4.position.x = random(-width-SCENE_W, SCENE_W+width)
	sunPiece4.position.y = random(-height-SCENE_W , SCENE_H+height)
	}
	
	if (sunPiece5.removed) {
		sunPiece5 = createSprite(random(-width/2 + 50, SCENE_W - 50), random(-height/2 + 50, SCENE_H - 50), 10,10);		
		sunPiece5.addImage(miniflame_img)
		sunPiece5.scale =.03
		sunPiece5.setCollider('circle', 0, 5, 5)
		
	}else{
	sunPiece5.position.x = random(-width-SCENE_W, SCENE_W+width)
	sunPiece5.position.y = random(-height-SCENE_W , SCENE_H+height)
	}
	
	if (sunPiece6.removed) {
		sunPiece6 = createSprite(random(-width/2 + 50, SCENE_W - 50), random(-height/2 + 50, SCENE_H - 50), 10,10);		
		sunPiece6.addImage(miniflame_img)
		sunPiece6.scale =.03
		sunPiece6.setCollider('circle', 0, 5, 5)
		
	}else{
	sunPiece6.position.x = random(-width-SCENE_W, SCENE_W+width)
	sunPiece6.position.y = random(-height-SCENE_W , SCENE_H+height)
	}
	
	if (sunPiece7.removed) {
		sunPiece7 = createSprite(random(-width/2 + 50, SCENE_W - 50), random(-height/2 + 50, SCENE_H - 50), 10,10);		
		sunPiece7.addImage(miniflame_img)
		sunPiece7.scale =.03
		sunPiece7.setCollider('circle', 0, 5, 5)
	}else{
	sunPiece7.position.x = random(-width-SCENE_W, SCENE_W+width)
	sunPiece7.position.y = random(-height-SCENE_W , SCENE_H+height)
	}
	if (sunPiece8.removed) {
		sunPiece8 = createSprite(random(-width/2 + 50, SCENE_W - 50), random(-height/2 + 50, SCENE_H - 50), 10,10);		
		sunPiece8.addImage(miniflame_img)
		sunPiece8.scale =.03
		sunPiece8.setCollider('circle', 0, 5, 5)
		
	}else{
	sunPiece8.position.x = random(-width-SCENE_W, SCENE_W+width)
	sunPiece8.position.y = random(-height-SCENE_W , SCENE_H+height)
	}
	if (sunPiece9.removed) {
		sunPiece9 = createSprite(random(-width/2 + 50, SCENE_W - 50), random(-height/2 + 50, SCENE_H - 50), 10,10);		
		sunPiece9.addImage(miniflame_img)
		sunPiece9.scale =.03
		sunPiece9.setCollider('circle', 0, 5, 5)
	}else{
	sunPiece9.position.x = random(-width-SCENE_W, SCENE_W+width)
	sunPiece9.position.y = random(-height-SCENE_W , SCENE_H+height)
	}
	if (sunPiece10.removed) {
		sunPiece10 = createSprite(random(-width/2 + 50, SCENE_W - 50), random(-height/2 + 50, SCENE_H - 50), 10,10);		
		sunPiece10.addImage(miniflame_img)
		sunPiece10.scale =.03
		sunPiece10.setCollider('circle', 0, 5, 5)
		
	}else{
	sunPiece10.position.x = random(-width-SCENE_W, SCENE_W+width)
	sunPiece10.position.y = random(-height-SCENE_W , SCENE_H+height)
	}
	
	timer = 500;
	sun_left = 10;
	count = 0;
	collected_all = 0;
	sunsize = .02;

//regenerate trees and water - for some reason becomes faster??
puddle.removeSprites()
	//water puddles
for(var i = 0; i<50; i++) {
	var water = createSprite(random(-width-SCENE_W, SCENE_W+width), random(-height-SCENE_W , SCENE_H+height), 150,150);
	water.addImage(water_img)
	water.scale = .5
	water.setCollider('rectangle', 0, 0,450,450)
	puddle.add(water);
}

sTrees.removeSprites()
tTrees.removeSprites()	
//added a few more trees this time~
for(var i = 0; i<450; i++) {
var shortTrees = createSprite(random(-width, SCENE_W+width), random(-height, SCENE_H+height), 40,70);
	shortTrees.addImage(shortTree_img)
	shortTrees.scale = .2
	shortTrees.setCollider('rectangle',  0, 0, 90,150); //makes trees collidable
	sTrees.add(shortTrees); 
	sTrees.immovable = true;

var tallTrees = createSprite(random(-width, SCENE_W+width), random(-height, SCENE_H+height), 40,110);
	tallTrees.addImage(bigTree_img)
	tallTrees.scale = .4
	tallTrees.setCollider('rectangle',  0, 0, 60,200); //makes trees collidable
	tTrees.immovable = true;
	tTrees.add(tallTrees); 
}
	
	opening = true
}
	
tTrees.debug = mouseIsPressed;
sTrees.debug = mouseIsPressed;
littleMan.debug = mouseIsPressed;


drawSprites();
}