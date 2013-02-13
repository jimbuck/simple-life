//var colors = ['red','blue','yellow','orange','purple','cyan', 'magenta', 'black'];



Crafty.scene('main', function(){
	Crafty.background('#608341');
	Crafty.e('FPSCounter').fpsCounter('#fpsCounter');
	
	Crafty.e('Wall').wall({x:0,y:0},{x:gameWidth, y:tileSize});
	Crafty.e('Wall').wall({x:gameWidth-tileSize,y:0},{x:gameWidth, y:gameHeight});
	Crafty.e('Wall').wall({x:0,y:gameHeight-tileSize},{x:gameWidth, y:gameHeight});
	Crafty.e('Wall').wall({x:0,y:0},{x:tileSize, y:gameHeight});
	
	var lowerColor = 3;
	var upperColor = 5;
	var allColors = [];
	
	for(var r=lowerColor;r<=upperColor;r++){
		for(var g=lowerColor;g<=upperColor;g++){
			for(var b=lowerColor;b<=upperColor;b++){
				allColors.push('#'+r+g+b);
			}
		}
	}	
	
	//console.log(allColors.length + ' Organisms...');
	
	for(var c in allColors){
		var o = Crafty.e('Organism').organism(allColors[c]);
	}
});