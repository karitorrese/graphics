//the radius changes according to the volume
function Electric(){
    //name of extension
    this.name = "Electric";
    
    this.draw = function(){
        push();
        angleMode(RADIANS);
        
        var spectrum = fourier.analyze(); 
        
        noFill();
        
        translate(width/2, height/2);
        beginShape();
        
        for(var i = 0; i< spectrum.length; i++){
            //color of the shape
            var g = map(spectrum[i], 0, 255, 255, 0);
            stroke(spectrum[i], random(0,255), random(0,255));
            
            //formula that converts from angle and a radius to an x and y position
            var r = map(spectrum[i], 0, 1, 10, 100);
            var x = r * cos(i);
            var y = r * sin(i);
            
            vertex(x , y);
        }
        endShape();
        pop();
    }
}



