Crafty.c('FPSCounter', {
	_selector: '',
	init: function(){
		this.bind('MessureFPS', function(e){
			$(this._selector).text(e.value);
		});
	},
	fpsCounter: function(selector){
		this._selector = selector;
	}

});