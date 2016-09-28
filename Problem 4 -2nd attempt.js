function setup() {
  createCanvas(500, 500);
  background(255);


  for (var i = 0; i < 250; i = i + 10) {
    line((width / 2) - i, i, (width / 2) + i, i);

  }


  for (var i = 0; i <= 250; i = i + 10) {
    line((width / 2) - i, height - i, (width / 2) + i, height - i);

  }
}
