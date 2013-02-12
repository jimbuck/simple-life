Crafty.c("Organism", {
	init: function(){
		this.requires('2D, '+renderMethod+', Color, XDNA')
		.attr({w:tileSize, h:tileSize, x:tileSize*32, y:tileSize*16})
		.color('#abc')
		.xdna();
	},
	organism: function(color){
		this.color(color);
	}
});