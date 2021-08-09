function DynamicLines(){
    //name of extension
	this.name = "Dynamic Lines";
    
    //number divisions of the circle
    var pieces = 35;
    
    this.draw = function(){
        push();
        angleMode(RADIANS);
        fourier.analyze();
        
        //defining type of frequencies variables 
        var bass = fourier.getEnergy("bass");
        var mid = fourier.getEnergy("mid");
        var treble = fourier.getEnergy("treble");

        //map each frequency 
        var mapBass = map(bass, 0, 255, -100, 100);
        var mapMid = map(mid, 0, 255, -150, 150);
        var mapTreble = map(treble, 0, 255, -200, 200);
        
        stroke(random(0,255),random(0,255),random(0,255));
        ellipse(width/2, height/2, 55 + bass);
        
        // Circle's radius
        var radius = 100;
        
        translate(width/2, height/2);

        // For each piece draw lines
        for( i = 0; i < pieces; i++ ) {
            
            //rotating the origin
            rotate( TWO_PI / pieces );
              
            // Draw the bass lines
            stroke(0, 0, 255);
            line( mapBass + 10 , radius/2, 0, bass );
            
            // Draw the mid lines
            stroke(255, 0, 0);
            line( mapMid, radius/2, 0, mid );    
                        
            // Draw the treble lines
            stroke(0, 255, 0);
            line( mapTreble, radius/2, 0, treble );
        }
        pop();
    }
    
    
}