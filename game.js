var renderMethod = 'DOM';
var tileSize = 16;
var xTiles = 64;
var yTiles = 48;
var gameWidth = xTiles*tileSize;
var gameHeight = yTiles*tileSize;

$(function()
{
	$('ARTICLE').width(gameWidth);

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