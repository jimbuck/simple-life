
Crafty.c('XDNA', {
	_maxLength: 64,
	_actions : [
		{
			name: 'MOVE_UP',
			cmd: function () {
				this.y--;
			}
		},
		{
			name: 'MOVE_RIGHT',
			cmd: function () {
				this.x++;
			}
		},
		{
			name: 'MOVE_DOWN',
			cmd: function () {
				this.y++;
			}
		},
		{
			name: 'MOVE_LEFT',
			cmd: function () {
				this.x--;
			}
		},
	],
	
	init : function () {
		this._dna = '';
		
		this.bind('', function(){
			
		}).bind('EnterFrame', function () {
			
			
			if (this._moveX || this._moveY) {
				this.x += this._moveX * tileSize;
				this.y += this._moveY * tileSize;
				this.trigger('Moved', {
					x : this.x,
					y : this.y
				});
				this._moveX = 0;
				this._moveY = 0;
			}
		});
	}
});