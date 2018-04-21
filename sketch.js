var i = 0, j = 0;
var input = [];
function setup() {
  frameRate(100);
  createCanvas(400, 400);
  background(255);
  for (var i = 0; i < 400; i++) {
    var y = int(random(400));
    input.push(y);
    fill("red");
    ellipse(i, y, 10, 10);
  }
}
function draw() {
  for (j = 0; j < 400 - i; j++) {
    if (input[j] > input[j + 1]) {
      var temp = input[j];
      input[j] = input[j + 1];
      input[j + 1] = temp;
      fill("red");
      ellipse(j, input[j], 10, 10);
      fill("magenta");
      ellipse(j + 1, input[j + 1], 10, 10);
    }
  }
  console.log(i, input[i]);
  console.log(input);
  if (i < 400 - 1) {
    i++;
  }
  else {
    noLoop();
  }
}