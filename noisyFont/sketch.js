var points;
var font;
var amt;

function preload() {
  font = loadFont('assets/Calistoga-Regular.ttf');
}

//////////////////////////////////////////////////////////////////////
function setup() {
  createCanvas(2000, 768);
  background(0);

  points = font.textToPoints('K A R I', 50, 450, 350, {
    sampleFactor: .3,
    simplifyThreshold: 0
  });

  // Bonus 3
  // assigning random size to each point
  points.forEach(point => point.size = random(5, 10));

  // initialize amt
  amt = 20;
}

//////////////////////////////////////////////////////////////////////
function draw() {
  // Bonus 4
  fill(0, map(mouseY, 0, height, 0, 30));
  rect(0, 0, width, height);

  // Bonus 1
  amt = map(mouseX, 0, width, 0, 80);
  // Bonus 2
  fill(100, 200, 100);
  points.forEach(point => {
    var nX = noise(point.x + point.y + frameCount/100);
    var nXMap = map(nX, 0, 1, -amt, amt);

    var anyNumber = 777;
    var nY = noise(point.x + point.y + anyNumber + frameCount/100);
    var nYMap = map(nY, 0, 1, -amt, amt);

    ellipse(point.x + nXMap, point.y + nYMap, point.size);
  });

  // noLoop();
}
