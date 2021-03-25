const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var divisionHeight = 300;
var division, division2, division3,division4, division5, division6, division7;

var particles = [];
var divisions = [];
var plinkos = [];

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,780,480,20);
 
 division = new Division(100,610, 10, 300);
 division2 = new Division(180,610,10,300);
  division3 = new Division(260,610,10,300);
  division4 = new Division(320,610, 10, 300);
  division5 = new Division(400,610,10,300);
  division6 = new Division(470,610,10,300);
  division7 = new Division(10, 610, 10, 300);
}

function draw() {
  background(0,0,0);  
  drawSprites();
  ground.display();

  for( var j=40; j <=width ; j=j+50){
    particles.push(new Particle(j,75));
  }

  for(var j = 15; j< width-10; j=j+50){
    particles.push(new Particle(j,175));
  }

  

  division.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
}