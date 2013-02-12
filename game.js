var renderMethod = 'Canvas';
var tileSize = 16;
var gameWidth = 64*tileSize;
var gameHeight = 32*tileSize;

$(function()
{
	$('ARTICLE').width(gameWidth+4);

	Crafty.init(gameWidth, gameHeight);
	if(renderMethod==='Canvas')
		Crafty.canvas.init();

  Crafty.settings.modify('autoPause', false);
	Crafty.scene("loading");
	
	$('#startStopButton').click(function(){
		Crafty.pause();
		$(this).val(Crafty.isPaused() ? 'Start' : 'Stop' );
	});
	
	$('#resetButton').click(function(){
			Crafty.pause(false);
			$('#startStopButton').val('Stop');
			Crafty.scene("main");
	});
});