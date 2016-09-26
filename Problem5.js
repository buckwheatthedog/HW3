function setup() {
  background(255);
  createCanvas(500, 500);

  for (var i = 10; i < 50; i = i + 10) {
    startX = 50;
    startY = 200;
    endX = i;
    endY = i;

    noFill();
    rectMode(CENTER);
    rect(startX, startY, endX, endY);

    for (var j = 10; j < 50; j = j + 10) {
      startX = 100;
      startY = 200;
      endX = j;
      endY = j;

      noFill();
      rectMode(CENTER);
      rect(startX, startY, endX, endY);

      for (var x = 10; x < 50; x = x + 10) {
        startX = 150;
        startY = 200;
        endX = x;
        endY = x;

        noFill();
        rectMode(CENTER);
        rect(startX, startY, endX, endY);

        for (var y = 10; y < 50; y = y + 10) {
          startX = 200;
          startY = 200;
          endX = y;
          endY = y;

          noFill();
          rectMode(CENTER);
          rect(startX, startY, endX, endY);


          for (var p = 10; p < 50; p = p + 10) {
            startX = 250;
            startY = 200;
            endX = y;
            endY = y;

            noFill();
            rectMode(CENTER);
            rect(startX, startY, endX, endY);



          }
        }
      }
    }
  }
