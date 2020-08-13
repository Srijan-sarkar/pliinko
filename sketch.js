const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var plinkos = [];
var particles = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,800,480,50)

  createCanvas(480,800);

  for(var k = 0;k <=width; k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

  for(var j = 0;j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,75,10));
  }

  for(var j = 10;j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,175,10));
  }

  for(var j = 0;j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,275,10));
  }

  for(var j = 10;j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,375,10));
  }
  plinko1 = new Plinko(50,75,10);
}

function draw() {
  Engine.update(engine);
  background(0);
  ground.display();

  if (frameCount%90 === 0){
    particles.push(new Particle(random(160,300),10,10));
  }

  for(var j = 0;j<particles.length;j++){
    particles[j].display();
  }

  for(var j = 0;j<plinkos.length;j++){
   plinkos[j].display();
  }

  for(var j = 0;j<divisions.length;j++){
    divisions[j].display();
  }
 plinko1.display();
  
  drawSprites();
}