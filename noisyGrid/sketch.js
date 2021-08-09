var stepSize = 20;


function setup() {
  createCanvas(500, 500);
}
///////////////////////////////////////////////////////////////////////
function draw() {
  background(125);

  colorGrid();
  compassGrid();
}
///////////////////////////////////////////////////////////////////////
function colorGrid(){
  var gridWidth = floor(width / stepSize);
  var gridHeight = floor(height / stepSize);
  
  //create 25x25 grid of rectangles
  for (let y = 0; y < 25; y++) {
    for (let x = 0; x < 25; x++) {
      var mouse = map(mouseX, 0, 500, 0, 1);
      var n = noise(x / gridWidth, y / gridHeight, frameCount/100); //tile’s  x and y coordinate and frameCount so that the noise values change over time (scaled)
      var nXMap = map(n, 0, 1, -mouse, mouse); //map noise using the value of mouseX

      //variables that represent red and radiance blue colors
      var color1 = color(255,0,0);
      var color2 = color(0, 150, 255);

      noStroke();
      //lerp between red and blue, using noise function as the value that interpolates between red and green
      fill(lerpColor(color1,color2, n + nXMap/90));
      rect(x * stepSize, y * stepSize, stepSize, stepSize); // rectangles: width and height equal to stepSize
    }
  }
}
///////////////////////////////////////////////////////////////////////
function compassGrid(){
  // for every grid size draw a compass
  for (let x = stepSize/2; x <= width ; x += stepSize ) {
    for (let y = stepSize/2; y <= height ; y += stepSize ) {
      var mouse = map(mouseX, 0, 500, 0, 1); //map mouse input
      var n = noise(x/width, y/height, frameCount/100); //use the same noise values from the grid rectangles
      var nXMap = map(n, 0, 1, -mouse, mouse); //join mouse map and noise to get a new map from both values

      var angle = map(n+nXMap,0,1,0,720);  //increment angle rotation dependant from the mouse
      var length = map(n+nXMap,0,1,0,stepSize); //increment compass length rotation dependant from the mouse

      
      push();
      stroke(0);
      rectMode(CENTER);
      translate(x, y); //translate to make the compass center the grid
      rotate(angle/90); //rotate each compass
      line(0, 0, 0, length); //draw the compasses
      ellipse(0,0,length/2,length/2); //draw circles in the compass
      pop();
    }
  }
}
