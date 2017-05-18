function setup() {
  createCanvas(1000,1000)
}

function draw() {
  fill (255)
  var metal = color(190,205,209);
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
  line(height)
}