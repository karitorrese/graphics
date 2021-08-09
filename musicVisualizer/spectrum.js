function Spectrum(){
    //name of extension
	this.name = "Spectrum";

	this.draw = function(){
		push();
        angleMode(RADIANS);
		var spectrum = fourier.analyze();
		noStroke();
		
        //iterates over every amplitudes values along the frequency domain (variable spectrum)
		for(var i = 0; i < spectrum.length; i++){

			//fade the color of the bin from green to red
			var g = map(spectrum[i], 0, 255, 255, 0);
			fill(spectrum[i], g, 0);

			//draw each bin as a rectangle from the left of the screen across
			var y = map(i, 0, spectrum.length, 0, height);
			var w = map(spectrum[i], 0, 255, 0, width);
			rect(0, y, w, height/spectrum.length);
		}  		
		pop();
	};
}