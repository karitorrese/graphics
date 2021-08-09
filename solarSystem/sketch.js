var speed; //this is the base for speed
var sunSpeed;
var earthSpeed;
var moonSpeed;

function setup() {
    createCanvas(900, 700);
}

function draw() {
    background(0);
    speed = frameCount;

    translate(width/2, height/2);
    // SUN
    push();
    sunSpeed = speed/3;
    rotate(radians(sunSpeed)); //sun spin around its axis at speed/3
    celestialObj(color(255,150,0), 200);
    pop();
    
    push();
    // EARTH
    earthSpeed = speed; //set base speed for earth
    rotate(radians(earthSpeed)); //rotate earth around sun at velocity speed
    translate(300, 0); //Orbit 300 pixels
    rotate(radians(earthSpeed)); //earth spin around its axis at velocity speed
    celestialObj(color(0,0,255), 80);

    pop();
    push();
    //pre set so the moon can orbit around the earth
    rotate(radians(earthSpeed));
    translate(300, 0); 
    // MOON
    moonSpeed = -speed*2;
    rotate(radians(moonSpeed)); //rotate to the opposite way of earth
    translate(100, 0); // orbit to earth at 100 pixels
    celestialObj(color(255,255,255), 30);

    //EXTRA BODY ASTEROID
    moonSpeed = -speed*2;
    rotate(radians(moonSpeed));
    translate(30, 0); //
    celestialObj(color(128,128,128), 20);
    
    pop();

    //FURTHER DEVELOPMENT
    push();
    //make an extra body with the same speed rotation as earth
    earthSpeed = speed;
    rotate(radians(earthSpeed));
    translate(-300, -50);
    rotate(radians(earthSpeed));
    celestialObj(color(220,20,60), 80);
    pop();

    push();
    //pre set so the moon can orbit around the body
    rotate(radians(earthSpeed));
    translate(-300, -50);
    //MOON
    moonSpeed = -speed*2;
    rotate(radians(moonSpeed));
    translate(80, 0);
    celestialObj(color(255,255,255), 30);

    //Create a second moon that rotates around the body
    moonSpeed = -speed*2;
    translate(-80, 0); // add 20px to the earth's size
    rotate(radians(moonSpeed/2));
    translate(80, 0); // add 20px to the earth's size
    celestialObj(color(255,255,255), 20);
    pop();
    

}

function celestialObj(c, size){
    strokeWeight(5);
    fill(c);
    stroke(0);
    ellipse(0, 0, size, size);
    line(0, 0, size/2, 0);
}
