
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var treeIMG;
var boyIMG;

function preload(){
treeIMG = loadImage("Plucking mangoes/tree.png");
boyIMG = loadImage("Plucking mangoes/boy.png");
bag = loadImage("Plucking mangoes/27649528-beautiful-green-landscape-cartoon-background.jpg")
}

function setup() {
	createCanvas(1100, 700);


	engine = Engine.create();
	world = engine.world;

	//Creating tree sprite
	tree = createSprite(790,439,60,90);
	  tree.addImage(treeIMG)
	   tree.scale = 0.4


	   //Create a Ground
	   ground = Bodies.rectangle(860, 210, 110, 10 , {isStatic:true,restitution:0.1} );
	   World.add(world, ground);
  
	    //Create a Ground2
		ground2 = Bodies.rectangle(120, 490, width, 10 , {isStatic:true,restitution:0.1} );
		World.add(world, ground2);

		//Create a Ground3
		ground3 = Bodies.rectangle(width/2, 640, width, 10 , {isStatic:true,restitution:0.1} );
		World.add(world, ground3);

		//Create a Ground4
		ground4 = Bodies.rectangle(1050, 940, 10, 1111110 , {isStatic:true,restitution:0.1} );
		World.add(world, ground4);
   
   

	//Creating a boy
	boy = createSprite(270,550,60,60);
	  boy.addImage(boyIMG)
	   boy.scale = 0.2
	 

    Engine.run(engine);

	//Creating variables:-
	mango1 = new Mango1(679,200,10,10);
	mango2 = new Mango2(660, 470,10,10);
	mango3 = new Mango3(590,300,10,10);
	mango4 = new Mango4(580,290,10,10);
	mango5 = new Mango1(809,170,10,10);
   mango6 = new Mango2(990, 465,10,10);
	mango7 = new Mango3(999,480,10,10);
	mango8 = new Mango4(740,486,10,10);
	mango9 = new Mango1(910,180,10,10);
	mango10 = new Mango2(890,480,10,10);
	mango11 = new Mango2(990,240,10,10);
	stone = new Stone(50,440,30,30);
	rope = new Rope(stone.body,{x:170 , y:420});
}


function draw() {
  rectMode(CENTER);
  background(bag);

  //mango1.display();
  mango2.display();
  mango3.display();
  //mango4.display();
  mango5.display();
  //mango6.display();
  //mango7.display();
  //mango8.display();
  mango9.display();
  //mango10.display();
  mango11.display();
  stone.display();
  rope.display();


detectollision(stone,mango1)
detectollision(stone,mango2)
detectollision(stone,mango3)
detectollision(stone,mango4)
detectollision(stone,mango5)
detectollision(stone,mango6)
detectollision(stone,mango7)
detectollision(stone,mango8)
detectollision(stone,mango9)
detectollision(stone,mango10)
detectollision(stone,mango11)

drawSprites();
}	



function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX , y:mouseY})
}

function mouseReleased(){
    rope.fly();
}

function detectollision(stone , mango){
	mangoBodyPosition = mango.body.position
	stoneBodyPosition = stone.body.position
	  
	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

	if(distance<-mango.r+stone.r){
		Matter.Body.setStatic(mango.body,false);
	}
}

function keyPressed(){
if(keyCode === 32){
	Matter.Body.setPosition(stone.body, {x: 170, y: 420});
	rope.attach(stone.body);

	function mouseDragged(){
		Matter.Body.setPosition(stone.body,{x:mouseX , y:mouseY})
	}
	
	function mouseReleased(){
		rope.fly();
	}
}
}