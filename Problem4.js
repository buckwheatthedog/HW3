function setup() {
  createCanvas(500, 500);
  background(255);

  for (i = 250; i <= 500; i = i - 10) {
    for (j = 10; j <= 500; j = j + 10);
    //for (k = )

    startX = i;
    startY = j;
    endX = -i;
    endY = 250;

    line(startX, startY, endY, endX);

  }
  for (i = 0; i <= 500; i = i + 10) {
    for (j = 10; j <= 500; j = j + 10);
    //for (k = )

    startX = i;
    startY = j;
    endX = -i;
    endY = 250;

    line(startX, startY, endY, endX);

  }
}
