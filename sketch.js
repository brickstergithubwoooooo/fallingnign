
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var brick, square, circl, floor
function preload()
{
	
}

function setup() {
	createCanvas(400, 400);

	engine = Engine.create();
	world = engine.world;

	var brick_options = {
		restitution: 0.7,
		friction: 0.01,
		frictionAir:0.1
	  }
	  brick = Bodies.rectangle(350,50,10,10, brick_options);
	  World.add(world, brick);

	var square_options = {
		restitution: 0.01,
		friction: 1,
		frictionAir:0.3
	  }
	  square = Bodies.rectangle(110,50,10,10, square_options);
	  World.add(world, square);

	var circl_options = {
restitution: 0.5,
friction: 0.02,
frictionAir:0
	  }
	  circl = Bodies.circle(220,10,12, circl_options);
	  World.add(world, circl);

	var floor_options = {
		isStatic: true
	  }
	  floor = Bodies.rectangle(200,400,400,50, floor_options);
	  World.add(world, floor);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("seagreen");


  
  drawSprites();

  fill("royalblue")

  ellipseMode(RADIUS);

  ellipse(circl.position.x,circl.position.y,20);

  rectMode(CENTER);

fill("maroon")

  rect(square.position.x,square.position.y,30,30)
  rect(brick.position.x,brick.position.y, 60,30)

  fill("crimson")

  rect(floor.position.x,floor.position.y,400,30)

Engine.update(engine)

}



