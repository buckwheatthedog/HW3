function setup() {
  createCanvas(500, 500);

}

function draw() {
  for (i = 20; i < 100; i += 20) {
    rectMode(CENTER);
    noFill();
    for (var a = 100; a < width; a = a + 100) {
      rect(a, height / 2, i, i);

    }
  }
}
