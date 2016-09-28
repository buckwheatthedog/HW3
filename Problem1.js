function setup() {
  background(255);
  createCanvas(500, 500);

  for (var i = 0; i < 500; i = i + 10) {
    var startX = 250;
    var startY = 0;
    var endX = i;
    var endY = 500;

    line(startX, startY, endX, endY);


  }
}
