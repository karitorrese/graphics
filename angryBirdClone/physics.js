////////////////////////////////////////////////////////////////
function setupGround(){
  ground = Bodies.rectangle(500, 600, 1000, 40, {
    isStatic: true, angle: 0
  });
  World.add(engine.world, [ground]);
}

////////////////////////////////////////////////////////////////
function drawGround(){
  push();
  fill(128);
  drawVertices(ground.vertices);
  pop();
}
////////////////////////////////////////////////////////////////
function setupPropeller(){
  // your code here
  propeller = Bodies.rectangle(150, 480, 200, 15, { //create static body
    isStatic: true, angle: angle
  });
  World.add(engine.world, [propeller]);
}
////////////////////////////////////////////////////////////////
//updates and draws the propeller
function drawPropeller(){
  push();
  // your code here
  Body.setAngle(propeller, angle);
  Body.setAngularVelocity(propeller, angleSpeed);
  angle += angleSpeed; // make propeller move at a rate of angleSpeed between frames
  fill(255);
  drawVertices(propeller.vertices); //draw proppeller
  pop();
}
////////////////////////////////////////////////////////////////
function setupBird(){
  var bird = Bodies.circle(mouseX, mouseY, 20, {friction: 0,
      restitution: 0.95 }); //create bird
  Matter.Body.setMass(bird, bird.mass*10);
  World.add(engine.world, [bird]);
  birds.push(bird);
}
////////////////////////////////////////////////////////////////
function drawBirds(){
  push();
  //your code here
  for(var i=0; i<birds.length; i++){ //loop over the birds array and draw them
    drawVertices(birds[i].vertices);
    if(isOffScreen(birds[i])){ // isOffScreen() function to check if the bird has left the screen
      birds.splice(i, 1); //if it has, remove it
      i--;
    }
    console.log(birds.length);
  }
  pop();
}
////////////////////////////////////////////////////////////////
//creates a tower of boxes
function setupTower(){
  //you code here
  for(var i=0; i<=18; i++){ //create 18 cubes
    var increment_y = 0;
    colors.push(random(0,255));
    //6 cubes for each 3 columns 
    if(i<=6){
      var box = Bodies.rectangle(700, 560 - increment_y, 80, 80);
    }
    if(i>6 && i<=12){
      box = Bodies.rectangle(781, 560 - increment_y, 80, 80);
    }
    if(i>12){
      box = Bodies.rectangle(862, 560 - increment_y, 80, 80);
    }
    World.add(engine.world, [box]); //adding them to the engine world
    boxes.push(box); //adding them to box array
    increment_y += 85;
  }
}
////////////////////////////////////////////////////////////////
//draws tower of boxes
function drawTower(){
  push();
  //your code here
  for(var i=0; i<boxes.length; i++){ 
    fill(0,colors[i],0);
    drawVertices(boxes[i].vertices);
    if(isOffScreen(boxes[i])){ // isOffScreen() function to check if the bird has left the screen
      boxes.splice(i, 1); //if it has, remove it
      i--;
    }
  }
  pop();
}
////////////////////////////////////////////////////////////////
function setupSlingshot(){
//your code here
slingshotBird = Bodies.circle(230, 180, 20, {friction: 0,
  restitution: 0.95 }); //body circle
Matter.Body.setMass(slingshotBird, slingshotBird.mass*10);
slingshotConstraint = Constraint.create({ //create constraint for slingshot
  pointA: {x: 200, y: 180 },
  bodyB: slingshotBird,
  stiffness: 0.01,
  damping:  0.0001
});
World.add(engine.world, [slingshotBird, slingshotConstraint]); //adding them to the engine world
}
////////////////////////////////////////////////////////////////
//draws slingshot bird and its constraint
function drawSlingshot(){
  push();
  // your code here
  fill(255,165,0);
  drawVertices(slingshotBird.vertices);
  fill(255);
  drawConstraint(slingshotConstraint);
  pop();
}
/////////////////////////////////////////////////////////////////
function setupMouseInteraction(){
  var mouse = Mouse.create(canvas.elt);
  var mouseParams = {
    mouse: mouse,
    constraint: { stiffness: 0.05 }
  }
  mouseConstraint = MouseConstraint.create(engine, mouseParams);
  mouseConstraint.mouse.pixelRatio = pixelDensity();
  World.add(engine.world, mouseConstraint);
}

