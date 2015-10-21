var Core;
(function (Core) {
    var tileSize = 16;
    var xTiles = 64;
    var yTiles = 48;
    var gameWidth = xTiles * tileSize;
    var gameHeight = yTiles * tileSize;
    var SimpleLife = (function () {
        function SimpleLife() {
        }
        SimpleLife.createGame = function () {
            // create our phaser game
            // 800 - width
            // 600 - height
            // Phaser.AUTO - determine the renderer automatically (canvas, webgl)
            // 'content' - the name of the container to add our game to
            // { preload:this.preload, create:this.create} - functions to call for our states
            var game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', {
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
        };
        return SimpleLife;
    })();
    // when the page has finished loading, create our game
    window.onload = function () {
        game = SimpleLife.createGame();
    };
})(Core || (Core = {}));
var Shapes;
(function (Shapes) {
    var Rectangle = (function () {
        function Rectangle(width, height, bg, border) {
            this.width = 0;
            this.height = 1;
            var bmd = window.game.add.bitmapData(width, height);
            bmd.ctx.beginPath();
            bmd.ctx.rect(0, 0, width, height);
            bmd.ctx.fillStyle = '#ffffff';
            bmd.ctx.fill();
            return bmd;
        }
        return Rectangle;
    })();
    Shapes.Rectangle = Rectangle;
})(Shapes || (Shapes = {}));

//# sourceMappingURL=simple-life.js.map
