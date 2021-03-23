
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var bob1, bob2, bob3, bob4, bob5;
var stand;
var rope1, rope2, rope3, rope4, rope5



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1=new Bob(200, 500, 50, );
	bob2=new Bob(300, 500, 50, );
	bob3=new Bob(400, 500, 50, );
	bob4=new Bob(500, 500, 50, );
	bob5=new Bob(600, 500, 50, );
	stand=new Stand(400, 100, 500, 40)


	rope1=new Rope(bob1.body, stand.body, - 200, 10 );
	rope2=new Rope(bob2.body, stand.body, - 100, 10 );
	rope3=new Rope(bob3.body, stand.body, 	0, 10 );
	rope4=new Rope(bob4.body, stand.body,  100, 10 );
	rope5=new Rope(bob5.body, stand.body,  200, 10 );
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  
  drawSprites();
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 stand.display();
 rope1.display();
 rope2.display();
 rope3.display();	
 rope4.display();
 rope5.display();
}

function keyPressed(){

	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-500, y:-300})

	}

}


