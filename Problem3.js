function setup() {
  createCanvas(500, 500);
  background(255);

  for (var i = 5; i < 500; i = i + 5) {
//    for (var j = 10; j < 500; j = i * 2) {

      startX = i;
      startY = 0;
      endX = i;
      endY = i^2;

      line(startX, startY, endX, endY);


    }
  }
