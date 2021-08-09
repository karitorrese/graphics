function Circles(){
    //name of extension
    this.name = "Circles";
    
    var circles = 10;
    
    this.draw = function(){
        push();
        angleMode(RADIANS);
        fourier.analyze();
        
        //getting bass energy
        var b = fourier.getEnergy("bass");
        var mapBass = map(b, 0, 255, -100, 100);
        
        //color of circles
        fill(random(0,255),random(0,255),random(0,255));
        noStroke();
        
        //check if it's playing to draw circles
        if (sound.isPlaying()){
            for(var i=0; i < circles; i++){
                //draw vertical circles with bass energy
                ellipse(width/2 + mapBass + 5, random(height) , mapBass );
                ellipse(width/2 - mapBass, random(height) , mapBass );
                //draw horizontal circles with bass energy
                ellipse(random(width), height/2 + mapBass + 5 , mapBass );
                ellipse(random(width), height/2 - mapBass , mapBass );
            }
        } //If it's not only draw a circle
        else{
            fill(255);
            ellipse(width/2, height/2, 20,20);
        }
        pop();
    }
    
}