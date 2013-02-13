Crafty.c('FPSCounter', {
	_selector: '',
	init: function(){
		this.bind('MessureFPS', function(e){
			$(this._selector).text(e.value);
		});
		this.bind('EnterFrame', function(e){
				if(!Crafty.worldTime)
					Crafty.worldTime = 0;
				
				if(e.frame%8==0){
				  Crafty.worldTime++;
				  $('#worldTime').text(Crafty.worldTime);
				}
		});
	},
	fpsCounter: function(selector){
		this._selector = selector;
	}

});