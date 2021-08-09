function NoiseLine(){
    this.name = "noiseline";
    
    
    this.draw = function(){
        push();
        //var fft = fourier.analyze();
        fill(255);
        noStroke();
        
        fourier.analyze();
        
        var b = fourier.getEnergy("bass");
        var t = fourier.getEnergy("treble");
        
        fill(255);
        ellipse(width/2, height/2, t); 
    }
    pop();
    
    
    
}

