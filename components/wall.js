Crafty.c('Wall', {
	init: function(){
		this.requires('2D,'+renderMethod+', Color')
			.color('#000');
	},
	wall: function(topLeft, bottomRight){
		var attrValues = {
			x: topLeft.x,
			y: topLeft.y, 
			w: bottomRight.x - topLeft.x,
			h: bottomRight.y - topLeft.y
		};
		
		this.attr(attrValues).requires('Collision');
		return this;
	}
});