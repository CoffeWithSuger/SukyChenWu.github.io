let X = 200;
let Y = 200;
let eyeshigtlightX;
let eyeshigtlightY;




function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  if (mouseIsPressed){
    background(0, 189, 75);
  }
  else{
    background(79, 227, 201);
  }
 
  fill(255,223,255);
  ellipse(X,Y,200,200);
  noStroke();
  
  stroke('#fae');
strokeWeight(2);

  eyeshigtlightX= map(mouseX,0,width,23,-3,1)
  eyeshigtlightY= map(mouseY,0,height,25,-5,1)
  
  
  //Kirby's feet
  fill(255, 180, 255)
  ellipse(X+ 85,Y+100,100,50);
  ellipse(X- 85, Y+100,100,50);
  
  
  //Kirby's hand
  fill(255,223,255)
  ellipse (X+120,Y+10,65,35);
  ellipse (X-120,Y+10,65,35);
  
  //kirby's eyeballs
  fill(0, 146, 255)
  ellipse(X-35, Y-25,40,60);
  ellipse(X+35,Y-25,40,60);
  
  
  //kirby's eyeshighlight
  fill(255,255,255)
  ellipse(X-45 +eyeshigtlightX,Y-35+eyeshigtlightY,10,10);
  ellipse(X+25+eyeshigtlightX ,Y-35+eyeshigtlightY,10,10);
  
  
  
  //kirby's mouth
  fill(255,42,0)
  ellipse(X,Y+50,20,30)
  
  //kirby's Blush
  fill(255, 105, 124)
  ellipse(X-60,Y+15,30,20)
  ellipse(X+60,Y+15,30,20)
  
  
}