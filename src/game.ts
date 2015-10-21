module Core {
	const tileSize: number = 16;
	const xTiles: number = 64;
	const yTiles: number = 48;
	const gameWidth: number = xTiles * tileSize;
	const gameHeight: number = yTiles * tileSize;

	class SimpleLife {
		static createGame() {	
			// create our phaser game
			// 800 - width
			// 600 - height
			// Phaser.AUTO - determine the renderer automatically (canvas, webgl)
			// 'content' - the name of the container to add our game to
			// { preload:this.preload, create:this.create} - functions to call for our states
			let game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', {
				preload: function preload() {
					// add our logo image to the assets class under the
					// key 'logo'. We're also setting the background color
					// so it's the same as the background color in the image
					game.load.image('logo', "assets/ds_logo.png");
					game.stage.backgroundColor = 0xB20059;
				},
				create: function create() {
					// add the 'logo' sprite to the game, position it in the
					// center of the screen, and set the anchor to the center of
					// the image so it's centered properly. There's a lot of
					// centering in that last sentence
					var logo = game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
					logo.anchor.setTo(0.5, 0.5);
				}
			});
			
			return game;
		}
	}
	
	
	// when the page has finished loading, create our game
	window.onload = () => {
		game = SimpleLife.createGame();
	}
}