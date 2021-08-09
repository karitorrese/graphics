//draw the waveform to the screen
function WavePattern() {
	//name of extension
	this.name = "Wave Pattern";

	//draw the wave form to the screen
	this.draw = function() {
		push();
        angleMode(RADIANS);
		noFill();
		stroke(255, 0, 0);
		strokeWeight(2);

		beginShape();
		//calculate the waveform from fourier
		var wave = fourier.waveform();
        
        //iterates over array of amplitudes values along the time domain.
		for (var i = 0; i < wave.length; i++) {
			//for each element of the waveform map it to screen
			//coordinates and make a new vertex at the point.
			var x = map(i, 0, wave.length, 0, width);
			var y = map(wave[i], -1, 1, 0, height);

			vertex(x, y);
		}

		endShape();
		pop();
	};
}