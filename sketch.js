var garden,rabbit;
var gardenImg,rabbitImg;
var carrotimg;
var tomatoimg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  carrotimg = loadImage("carrot.png");
  tomatoimg = loadImage("tomato1.png");
}

function setup(){
createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

var rand =  Math.round(random(1,100))
console.log(rand)

}

function draw() {
  background(0);
  rabbit.x=World.mouseX
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  spawncarrot()
  spawntomato()

  drawSprites();
}

function spawncarrot(){
  if(frameCount%60==0){
 carrot=createSprite(175,0,50,50);
 carrot.addImage("c1",carrotimg);
 carrot.velocityY=10;
 carrot.scale=0.2
 carrot.y=Math.round(random(20,100))

  }
}

function spawntomato(){
  if(frameCount%60==0){
 tomato=createSprite(315,0,50,50);
 tomato.addImage("c1",tomatoimg);
 tomato.velocityY=15;
 tomato.scale=0.2
 tomato.y=Math.round(random(20,100))

  }
}