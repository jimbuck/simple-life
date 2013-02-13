Crafty.c('SmoothSlide', {
	init: function(){
		this._vx = 0; this._destX = null; this._sourceX = null;
		this._vy = 0; this._destY = null; this._sourceY = null;
		this._renderFrame = 0;
		
		this.bind("Slide", function(direction) {
				
				this._renderFrame++;
				
				var slideFrames = this._frameStep * 2;

        // Let's keep our pre-movement location
        this._sourceX = this.x;
        this._sourceY = this.y;

        if(this._destX==null) this._destX = this.x;
        if(this._destY==null) this._destY = this.y;
        
        // Figure out our destination
        this._destX += direction[0] * tileSize;
        this._destY += direction[1] * tileSize;

        // Get our x and y velocity
        this._vx = direction[0] * tileSize / slideFrames;
        this._vy = direction[1] * tileSize / slideFrames;
				
      }).bind("EnterFrame",function(e) {

        // Update our position by our per-frame velocity
        this.x += this._vx;
        this.y += this._vy;
        
        this.trigger('Moved', {x: this.x, y: this.y});
      });
	}
});