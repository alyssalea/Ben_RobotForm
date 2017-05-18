function setup() {
  createCanvas(1000,1000)
  frameRate(5)
}
function Pressed() {
  fill(255)
  ellipse(mouseX,mouseY,width/40,height/40)}
function draw() {
  fill (255)
  var metal = color(190,205,209);
  strokeWeight(1)
  fill(metal)
  rect(483,height/6,width/30,height/4)
  fill(233,245,244,50)
  ellipse(width/2,height/6,width/1.5,height/3);
  fill(metal)
  ellipse(width/2,height/6,width/15,height/30);
  rect(width/4,height/2.5,width/2,height/8)
  fill(255)
  strokeWeight(0)
  ellipse (width/4,height/2,width/8,height/8)
  ellipse (750,height/2,width/8,height/8)
  strokeWeight (0)
  line(width/2,height/6,width/2,height/0)
  fill(random(0,255),random(0,255),random(0,255))
  ellipse(mouseX,mouseY,width/40,height/40)
  
}
