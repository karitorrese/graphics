function RotatingBlocks(){
    //name of extension
    this.name = "Rotating Blocks";
    
    //initialize variable rotation 
    var rot = 0;
    
    this.draw = function(){
        
        fill(255);
        noStroke();
        
        fourier.analyze();
        
        var b = fourier.getEnergy("bass");
        var t = fourier.getEnergy("treble");
        
        //drawing ellipses with bass and treble frequencies
        ellipse(width/2 - 255, height/2, b);
        ellipse(width/2 + 255, height/2, t);

        //calling rotating blocks function with range of bass
        this.rotatingBlocks(b);
    }
    
    this.rotatingBlocks = function(energy){
        //when bass frequency is less than 200, rotation += 0.01
        if(energy < 200){
            rot += 0.01;
        }
        
        var r = map(energy, 0, 255, 20, 100);
        push();
        angleMode(RADIANS);
        //aligning to the center
        rectMode(CENTER);
        //displace object
        translate(width/2, height/2);
        rotate(rot);
        fill(255,0,0);
	
        var incr = width/(10 - 1);
	
        //iterate to create 10 rectangles
        for(var i = 0; i < 10; i++){
            rect(i * incr - width/2, 0, r, r);
        }
        pop();
    }
    
}
