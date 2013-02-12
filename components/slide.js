Crafty.c('Slide', {
	init: function(){
		this._moveing = false;
		this._vx = 0; this._destX = 0; this._sourceX = 0;
		this._vy = 0; this._destY = 0; this._sourceY = 0;
		this._frames = 0;
		
		this.bind("Slide", function(direction) {
				
				var slideFrames = this._frameStep;
				
        // Don't continue to slide if we're already moving
        if(this._moving) return false;
        this._moving = true;

        // Let's keep our pre-movement location
        // Hey, Maybe we'll need it later :)
        this._sourceX = this.x;
        this._sourceY = this.y;

        // Figure out our destination
        this._destX = this.x + direction[0] * tileSize;
        this._destY = this.y + direction[1] * tileSize;

        // Get our x and y velocity
        this._vx = direction[0] * tileSize / slideFrames;
        this._vy = direction[1] * tileSize / slideFrames;
				
        this._frames = this._frameStep;
      }).bind("EnterFrame",function(e) {
        if(!this._moving) return false;

        // If we're moving, update our position by our per-frame velocity
        this.x += this._vx;
        this.y += this._vy;
        this._frames--;

        if(this._frames == 0) {
          // If we've run out of frames,
          // move us to our destination to avoid rounding errors.
          this._moving = false;
          this.x = this._destX;
          this.y = this._destY;
        }
        this.trigger('Moved', {x: this.x, y: this.y});
      });
	}
});