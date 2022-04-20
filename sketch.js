//see on browser:
// https://gbayne4.github.io/2021/Midterm_Creative_Coding/index.html

let frog, eyes, mouth, bug, bug2, bug3, bug4,bug5, bug6, backgroundChange, hypnotized;
let x;
let counter;
let left = 900;
let updown;
let dis = 255;
let r = 84, b = 174, g = 102;
let o = 0;
let on = false, frogColor = false;

let angle = 2.0;
let xspot = 250, otherxspot = 545;

let yspot = 100, otheryspot = 100;
let scalar = 1.0;
let speed = .03;
let col = {r: 0, g: 0, b: 0};

let w = 0;
let helper = true;
let helperb = false;


function setup() {
  createCanvas(800, 800);
  frog = new Frog();
  eyes = new Eyes();
  mouth = new Mouth();
  hypnotized = new Hypnotized();
  backgroundChange = new Background();
  mouth.tongueUp();
left1 = width, left2 = width, left3 = width -150,left4 = width -200,left5 = width -100;
bug = new Bug();
bug1 = new Bug();
bug2 = new Bug();
bug3 = new Bug();
bug4 = new Bug();
bug5 = new Bug();
updown = 150;
updown1 = -40;
updown2 = 250;
updown3 = 50;
updown4 = 330;
updown5 = 550;
beginBug = false;

  setTimeout(function () { mouth.tongueDown();}, 4350)
  setTimeout(function () { mouth.tongueUp();}, 4450)

  setTimeout(function () { eyes.closed();}, 2000)
  setTimeout(function () { eyes.open();}, 2150)
  setTimeout(function () { eyes.closed();}, 4000)
  setTimeout(function () { eyes.open();}, 4150)


  setTimeout(function () { eyes.closed();}, 6000)
  setTimeout(function () { eyes.open();}, 6100)
  setTimeout(function () { eyes.closed();}, 6200)
  setTimeout(function () { eyes.open();}, 6300)

  setTimeout(function () { mouth.tongueDown();}, 6350)
  setTimeout(function () { mouth.tongueUp();}, 6450)

  setTimeout(function () { mouth.tongueDown();}, 8450)
  setTimeout(function () { mouth.tongueUp(); dis=0;}, 8500)

  setTimeout(function () { mouth.tongueDown();}, 22050)
  setTimeout(function () { mouth.tongueUp(); dis=0;}, 22100)

  setTimeout(function () { mouth.tongueDown();}, 27050)
  setTimeout(function () { mouth.tongueUp(); dis=0;}, 27100)

  setTimeout(function () { mouth.tongueDown();}, 32050)
  setTimeout(function () { mouth.tongueUp(); dis=0;}, 32100)


  setTimeout(function () { mouth.tongueDown();}, 38050)
  setTimeout(function () { mouth.tongueUp(); dis=0;}, 38100)


  setTimeout(function () { mouth.tongueDown();}, 42050)
  setTimeout(function () { mouth.tongueUp(); dis=0;}, 42100)

  setTimeout(function () { mouth.tongueDown();}, 52050)
  setTimeout(function () { mouth.tongueUp(); dis=0;}, 52100)
  setTimeout(function () { eyes.closed();}, 63000)
  setTimeout(function () { eyes.open();}, 63100)
  setTimeout(function () { eyes.closed();}, 63200)
  setTimeout(function () { eyes.open();}, 63300)

    setTimeout(function () { mouth.tongueDown();}, 62050)
  setTimeout(function () { mouth.tongueUp(); dis=0;}, 62100)


  //bug eaten
}

function draw() {
  background(114,53,53);
  fill(100,13,13, dis)
  stroke(0,dis);
  rect(0, height/2, 800,400)

  if (on == true){
hypnotized.variables(100);
hypnotized.display();
hyp(); //speeds it up 

}

  frog.display(r,b,g);
  eyes.display();

  mouth.display();

  //bug shows up

  bug.display(left,updown,dis);

    left = left - 6;

    if (left%5){
      updown = updown - 5
    }
    else {
      updown = updown + 20
    }
if (on == true){
hypnotized.variables(100);
hypnotized.display();
hyp(); 

}
//bug leaves
if (left < 0){
  backgroundChange.crazy(o);
  o= o + .5;
  frog.display(r,b,g);
  eyes.display();
  mouth.display();
  on = true
}
if (on == true){
hypnotized.variables(100);
hypnotized.display();
hyp();

if (frogColor == true){
  frameRate(30);

  frog.display(random(255),100,random(200,230));

  fill(random(255),random(255),random(255),random(255))
  let j = random(50,100);
  ellipse(random(0,width), random(0,height), j,j)

  hypnotized.variables(100);
  hypnotized.display();
  mouth.display();
  hyp();

    bug1.display(left1,updown1,255);

    left1 = left1 - 6;

    if (left1%5){
      updown1 = updown1 - 5
    }
    else {
      updown1 = updown1 + 20
    }


        bug2.display(left2,updown2,255);

    left2 = left2 - 6;

    if (left%5){
      updown2 = updown2 - 5
    }
    else {
      updown2 = updown2 + 20
    }

    bug3.display(left3,updown3,255);

    left3 = left3 - 6;

    if (left3%5){
      updown3 = updown3 - 5
    }
    else {
      updown3 = updown3 + 20
    }

    bug4.display(left4,updown4,255);

    left4 = left4 - 6;

    if (left4%5){
      updown4 = updown4 - 5
    }
    else {
      updown4 = updown4 + 20
    }


    bug5.display(left5,updown5,255);

    left5 = left5 - 6;

    if (left5%5){
      updown5 = updown5 - 5
    }
    else {
      updown5 = updown5 + 20
    }

    if (left5 < - 400 ){
left1 = width;
 left2 = width;
 left3 = width -150;
 left4 = width -200;
 left5 = width -100;

 w+=1
}

if (w == 3) {
  clear();
    background(114,53,53);
  fill(100,13,13, dis)
  stroke(0,dis);
  rect(0, height/2, 800,400)

  frog.display(r,b,g);
  eyes.display();

  mouth.display();

}

  }}

}

//how can I make this stay on tbe page!!!!
function hyp(){
  frameRate(100);
if (angle < 50 && helper == true){
  col.r = random(100, 250);
  col.g = random(0, 250);
  col.b = random(100, 250);
  let x = cos(angle) * scalar + otherxspot;
  let y = sin(angle) * scalar + otheryspot;
  fill(col.r, col.g, col.b);
  noStroke();
  ellipse(x, y, 20, 20);
  angle += speed;
  scalar += speed;
  }
if (angle > 50){
  helperb = true;
}
  if (helperb == true){
  speed += .08;
  angle -= speed;
  scalar -= speed;
  frogColor = true;
  helper == false
}
  if (angle == 2.0){
    helper = true;
    helperb = false;
    angle =0
    scalar =0

  }

if (angle < 50 && helper == true){
  col.r = random(100, 250);
  col.g = random(0, 250);
  col.b = random(100, 250);
  let x = cos(angle) * scalar + xspot;
  let y = sin(angle) * scalar + yspot;
  fill(col.r, col.g, col.b);
  noStroke();
  ellipse(x, y, 20, 20);
  angle += speed;
  scalar += speed;
  }
if (angle > 50){
  helperb = true;
}
  if (helperb == true){
  speed += .08;
  angle -= speed;
  scalar -= speed;
  helper == false
}
  if (angle == 2.0){
    helper = true;
    helperb = false;
    angle = 0
    scalar  =0
    
    
  }

} //want to figure out a way not to hard code - my many attempt at classing this failed