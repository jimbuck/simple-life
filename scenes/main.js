//var colors = ['red','blue','yellow','orange','purple','cyan', 'magenta', 'black'];



Crafty.scene('main', function(){
	Crafty.background('#608341');
	Crafty.e('FPSCounter').fpsCounter('#fpsCounter');
	
	var lowerColor = 3;
	var upperColor = 6;
	var allColors = [];
	
	for(var r=lowerColor;r<=upperColor;r++){
		for(var g=lowerColor;g<=upperColor;g++){
			for(var b=lowerColor;b<=upperColor;b++){
				allColors.push('#'+r+g+b);
			}
		}
	}	
	
	console.log(allColors.length + ' Organisms...');
	
	for(var c in allColors){
		var o = Crafty.e('Organism').organism(allColors[c]);
	}
});