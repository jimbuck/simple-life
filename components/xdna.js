
Crafty.c('XDNA', {
	init : function () {
		this._frameStep = 8;
		this._maxLength = 256;
		this._currentIndex = 0;
		this._oldX = null;
		this._oldY = null;
		this._actions = [
			{
				name: 'NOTHING',
				cmd: function(id){
					var entity = Crafty(id);
					entity.trigger('Slide', [0,0]);
				}
			},
			{
				name: 'MOVE_UP',
				cmd: function (id) {
					var entity = Crafty(id);
					entity.trigger('Slide', [0,-1]);
				}
			},
			{
				name: 'MOVE_RIGHT',
				cmd: function (id) {
					var entity = Crafty(id);
					entity.trigger('Slide', [1,0]);
				}
			},
			{
				name: 'MOVE_DOWN',
				cmd: function (id) {
					var entity = Crafty(id);
					entity.trigger('Slide', [0,1]);
				}
			},
			{
				name: 'MOVE_LEFT',
				cmd: function (id) {
					var entity = Crafty(id);
					entity.trigger('Slide', [-1,0]);
				}
			}
		];
		
		this.requires('Collision, SmoothSlide');
		
		this.bind('EnterFrame', function (e) {
			if(e.frame % this._frameStep===0){
				var dir = parseInt(this._dna.charAt(this._currentIndex));
			  var action = this._actions[dir];
			  
			  action.cmd(this[0]);
			  
			  this._currentIndex = (++this._currentIndex) % this._dna.length;
			}
			
		}).onHit('XDNA', function(){
			// Clone the object and combing thier stats.
		});
	},
	xdna: function(mom, dad){
		
		function GetProtein(actions){
        return Math.floor(Math.random()*actions.length);
    }
    var dna = '';

    if(!mom || !dad){
      var length = Math.random()*this._maxLength;
      for(var i=0;i<length;i++){
        var protein = GetProtein(this._actions);
        dna += ''+protein;
      }
    } else {
      var length = (Math.random() < 0.5 ? mom.length : dad.length) + ( Math.random()*7 - 3 );

      for(var i=0;i<length;i++){
				if(i < mom.length){
          if(i < dad.length){
            dna += (Math.random() < 0.5 ? dad.charAt(i) : mom.charAt(i));
          } else {
            dna += mom.charAt(i);
          }
        } else {
          if(i < dad.length){
            dna += dad.charAt(i);
          } else {
            dna += GetProtein();
          }
        }
      }
    }
    this._dna = dna;
    
    return this;
	}
});