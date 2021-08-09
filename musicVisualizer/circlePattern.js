function CirclePattern(){
    //name of extension
    this.name = "Circle Pattern";
    
    //initialize array of amplitudes
    var amplitudes = [];
    
    this.draw = function(){
        push();
        //set angles to degrees
        angleMode(DEGREES);
        var amp = amplitude.getLevel();
        //add each amplitude to arrray of amplitudes
        amplitudes.push(amp);
        
        //color of shape
        stroke(255, 0 ,255);
        noFill();
        
        translate(width/2, height/2);
        beginShape();
        
        //iterate to represent a complete circle (360 degrees)
        for (var i = 0; i < 360 ; i++){ 
            var r = map(amplitudes[i], 0, 1, 50, 800);
            //calculate x y positions in circle every n degrees
            var x = r * cos(i);
            var y = r * sin(i);
            
            vertex(x, y);
        }
        endShape();
        
        //We only want 360 element on the array
        if (amplitudes.length > 360) {
            //Erase element 1 index 0
            amplitudes.splice(0, 1);
        }
        pop();
    }
   
}