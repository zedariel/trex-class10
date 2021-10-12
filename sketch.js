
var trex ,trex_running;
var edges
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(100,150,10,20)
 trex.addAnimation("chromedino",trex_running)
 trex.scale = 0.5
edges = createEdgeSprites()

}


function draw(){
  background("green")
  if (keyDown("space")){
    trex.velocityY = -12

  }
  trex.velocityY = trex.velocityY + 0.8
  trex.collide(edges)
  drawSprites()

}
