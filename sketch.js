/*const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;*/

var infant, infant_bg, infant_bg_2

function preload() {
   infant_bg_2 = loadImage("Infant bg.jpg")
}

function setup(){
    var canvas = createCanvas(1200,600);
    //engine = Engine.create();
    //world = engine.world;

    var infant_bg = createSprite(600, 300);
    infant_bg. addImage(infant_bg_2);
    infant_bg.scale = 2;

    var infant = createSprite(100, 520, 50, 50)

}

function draw(){
    background(0);
  //  Engine.update(engine);
   

     infant_bg.velocityX = 3

     if (infant_bg.x < 0){
        infant_bg.x = infant_bg.width/2;
      }
      drawSprites();
}



