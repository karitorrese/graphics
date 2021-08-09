class Spaceship {

  constructor(){
    this.velocity = new createVector(0, 0);
    this.location = new createVector(width/2, height/2);
    this.acceleration = new createVector(0, 0);
    this.maxVelocity = 5;
    this.bulletSys = new BulletSystem();
    this.size = 50;
    this.num_lights = 10;
    this.brightnesses = [];
    this.width2 = random(150,250);
    this.light_inc = floor(random(5,10))
  }

  run(){
    this.bulletSys.run();
    this.draw();
    this.move();
    this.edges();
    this.interaction();
  }

  draw(){
    //fill(125);
    // triangle(this.location.x - this.size/2, this.location.y + this.size/2,
    //     this.location.x + this.size/2, this.location.y + this.size/2,
    //     this.location.x, this.location.y - this.size/2);
    
    // Draw Spaceship
    fill(175,238,238);
    arc(this.location.x,this.location.y, 70, 100,PI,TWO_PI);
    fill(150);
    arc(this.location.x,this.location.y, 125, 50,PI,TWO_PI);
    fill(50);
    arc(this.location.x,this.location.y, 125, 25,0,PI);

   //Draw the lights of spaceship
   var incr = (125/(this.num_lights -1)); 

   for(var i = 0; i < this.num_lights; i++)
    {
        this.brightnesses.push((i * this.light_inc * 2)%255);
    }

   for(var i = 0; i < this.num_lights; i++)
   {

       var x = this.location.x - 125/2 + i * incr;
       fill(this.brightnesses[i]);
       ellipse(
           x,
           this.location.y ,
           5,
           5
       )
       this.brightnesses[i] += this.light_inc;
       if(this.brightnesses[i] > 255)
       {
           this.brightnesses[i] = 100;
       }
   }

  }

  move(){
      // YOUR CODE HERE (4 lines)
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxVelocity); //limit the velocity to maxVelocity
        this.location.add(this.velocity);
        this.acceleration.mult(0);
  }

  applyForce(f){
    this.acceleration.add(f);
  }

  interaction(){
      if (keyIsDown(LEFT_ARROW)){
        this.applyForce(createVector(-0.1, 0));
      }
      if (keyIsDown(RIGHT_ARROW)){
      // YOUR CODE HERE (1 line)
        this.applyForce(createVector(0.1, 0));
      }
      if (keyIsDown(UP_ARROW)){
      // YOUR CODE HERE (1 line)
        this.applyForce(createVector(0, -0.1));
      }
      if (keyIsDown(DOWN_ARROW)){
      // YOUR CODE HERE (1 line)
        this.applyForce(createVector(0, 0.1));
      }
  }

  fire(){
    this.bulletSys.fire(this.location.x, this.location.y);
  }

  edges(){
    if (this.location.x<0) this.location.x=width;
    else if (this.location.x>width) this.location.x = 0;
    else if (this.location.y<0) this.location.y = height;
    else if (this.location.y>height) this.location.y = 0;
  }

  setNearEarth(){
    //YOUR CODE HERE (6 lines approx)
    var gravity = createVector(0, 0.05);
    var friction = spaceship.velocity.copy();
    friction.mult(1/30); //force called friction that's 30 times smaller than the velocity of the spaceship
    //friction.normalize();
    friction.mult(-1);
    // console.log("Vel" + spaceship.velocity);
    // console.log(friction);

    spaceship.applyForce(friction);
    spaceship.applyForce(gravity);
  }
}
