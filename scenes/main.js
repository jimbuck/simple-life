Crafty.scene('main', function(){
	console.log('Main...');
	var ground = Crafty.e('2D, Canvas, Color, Collision, Floor')
        .color('black')
        .attr({w:960,h:60,x:0,y:420});

    var player = Crafty.e('2D, Canvas, Color, Twoway, Gravity')
        .color('red')
        .attr({w:50, h:50, x:100, y:100})
        .twoway(5, 5)
        .gravity('Floor').gravityConst(.4);
});