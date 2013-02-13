Crafty.c("Organism", {
	init: function(){
		var xLoc = Crafty.math.randomInt(4, (gameWidth/tileSize)-5) * tileSize;
		var yLoc = Crafty.math.randomInt(4, (gameHeight/tileSize)-5) * tileSize;
		
		this.requires('2D, '+renderMethod+', Color, XDNA')
		.attr({w:tileSize, h:tileSize, x: xLoc, y: yLoc})
		.requires('Collision')
		.color('#fff')
		.xdna()
		.onHit('XDNA', function(obj){
			//console.log(obj);
			// Crafty.e('Organism').spawn(this, e
		})
		.onHit('Wall', function(obj){
			this.cancelSlide();
		});
	},
	organism: function(color){
		this.color(color);
		return this;
	},
	spawn: function(mom, dad){
		this.xdna(mom, dad);
		return this;
	}
});