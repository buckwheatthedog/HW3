function setup() {
  background(255);
  createCanvas(500, 500);

  for (var i = 10; i < 500; i = i + 10) {
  startX = 250;
  startY = 250; 
  endX = i;
  endY = i;

noFill();
ellipse (startX,startY, endX,endY);


  }
}
