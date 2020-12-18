let x= 200;
let y= 200;

let eyeMotion = 5;
let circleX = 0;
let circleDir = 1;


function setup() {
  createCanvas(400, 400);
}

function draw() {
     stroke(255,152,0);
  
  if (mouseIsPressed){
    background(213, 209, 176);
  }
  else{
    //drawing a grey background
    background(140, 153, 166);
  }
  
  //cat tail
strokeWeight(5);
point(x+30, y+90);
point(x+70,y+100);
point(x+120,y+90);

noFill();
strokeWeight(10);
beginShape();
vertex(x+30, y+90);
quadraticVertex(x+70,y+110,x+120,y+90);
endShape();
  
  
strokeWeight(2);
  stroke(213, 160, 0);
    //cat ear

 beginShape();
vertex(x+25, y-50);
vertex(x+35, y-30);
vertex(x+28, y-75);
endShape(CLOSE);
  
  beginShape();
vertex(x-25, y-50);
vertex(x-35, y-30);
vertex(x-28, y-75);
endShape(CLOSE);

  //cat body
  
  
  fill (255,152,0);
  strokeWeight(2);
  stroke(255,152,0);
  ellipse (x,y+50,90,150);
  fill (255, 255, 255);
  ellipse (x,y+70,80,95);
  
  //cat face
   fill (255,152,0);
  ellipse (x,y-55,70,70);
  
  //cat eyes
     stroke(239, 163, 3);
strokeWeight(2);
  fill(255,255,255);
  ellipse (x-20,y-70,20,20);
  ellipse (x+20,y-70,20,20);
  
   //cat's eye pupil
 stroke(9, 163, 251);
  strokeWeight(2);
  fill(9, 163, 251);
  eyeMotion = map(circleX, 0, 400, -3, 3, 1);
  ellipse(x-20 +eyeMotion,y-70,10,10);
  ellipse(x+20 +eyeMotion,y-70,10,10)
  
  //cat toy
   stroke(255,0,0);
strokeWeight(2);
  fill(255,0,0);
  ellipse(circleX, 120, 20,20);
  if (circleDir == 1 && circleX < width){
    circleX++;
  }
  else if(circleDir == 1 && circleX >= width){
    circleDir = -1;
  }
  else if (circleDir == -1 && circleX > 0){
    circleX--;
  }
  else if (circleDir == -1 && circleX <=0){
    circleDir = 1;
  }
  

  
  //cat Limbs
  
  stroke(253, 163, 3);
  strokeWeight(2);
  fill (253, 163, 3);
  ellipse(x-35,y+25,30,35);
  ellipse(x+35,y+25,30,35);
  ellipse(x+25,y+120,30,35);
  ellipse(x-25,y+120,30,35);
  
   stroke(0,0,0);
  strokeWeight(1);
  point(x-30, y+40);
  point(x-25,y+30);
 beginShape();
vertex(x-30, y+40);
quadraticVertex(x-30, y+40,x-25,y+30);
endShape(); 
  
  point (x-35, y+40);
  point (x-35,y+30);
  beginShape();
vertex(x-35, y+40);
quadraticVertex(x-35, y+40,x-35,y+30);
endShape();
  
  point (x-40, y+40);
  point (x-45,y+30);
    beginShape();
vertex(x-40, y+40);
quadraticVertex(x-40, y+40,x-45,y+30);
endShape();
  
  stroke(0,0,0);
  strokeWeight(1);
  point(x+30, y+40);
  point(x+25,y+30);
 beginShape();
vertex(x+30, y+40);
quadraticVertex(x+30, y+40,x+25,y+30);
endShape(); 
  
  point (x+35, y+40);
  point (x+35,y+30);
  beginShape();
vertex(x+35, y+40);
quadraticVertex(x+35, y+40,x+35,y+30);
endShape();
  
  point (x+40, y+40);
  point (x+45,y+30);
    beginShape();
vertex(x+40, y+40);
quadraticVertex(x+40, y+40,x+45,y+30);
endShape();
  
  point (x+35, y+130);
  point(x+36, y+120);
  beginShape();
vertex(x+35, y+130);
quadraticVertex(x+35, y+130,x+36, y+120);
endShape();
  
  point(x+30,y+135);
  point(x+30,y+125);
   beginShape();
vertex(x+30,y+135);
quadraticVertex(x+30,y+135,x+30,y+125);
endShape();
  
  point(x+20,y+130);
  point(x+20,y+120);
   beginShape();
vertex(x+20,y+130);
quadraticVertex(x+20,y+130,x+20,y+120);
endShape();
  
  point (x-35, y+130);
  point(x-36, y+120);
  beginShape();
vertex(x-35, y+130);
quadraticVertex(x-35, y+130,x-36, y+120);
endShape();
  
  point(x-30,y+135);
  point(x-30,y+125);
   beginShape();
vertex(x-30,y+135);
quadraticVertex(x-30,y+135,x-30,y+125);
endShape();
  
  point(x-20,y+130);
  point(x-20,y+120);
   beginShape();
vertex(x-20,y+130);
quadraticVertex(x-20,y+130,x-20,y+120);
endShape();
  
  //cat nose and mouth
  triangle(x-5, y-70, x, y-60, x+5, y-70);
  
 point(x,y-60);
point(x-10,y-55);
   beginShape();
vertex(x,y-60);
quadraticVertex(x,y-60,x-10,y-55);
endShape();
  
  
  point(x,y-60);
  point(x+10,y-55)
  beginShape();
vertex(x,y-60);
quadraticVertex(x,y-60,x+10,y-55);
endShape();
  

  
  
 
}