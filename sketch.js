function setup() {
  createCanvas(640, 480);

  
  background(174,138,184);
  stroke(255);
  noFill();
  ellipse(100,100,mouseX,mouseY);
  

  function draw(){
if (mouseX < 300) {
  ellipse(200, 200, 100, 100);
}

}




