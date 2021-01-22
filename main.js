var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();
ASSET_MANAGER.queueDownload("./spritesheets/GliderWhipSide.png");
ASSET_MANAGER.queueDownload("./spritesheets/background.png");

ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	gameEngine.init(ctx);
	gameEngine.addEntity(new Background(gameEngine, 0, 0));
	gameEngine.addEntity(new Aang(gameEngine));
	gameEngine.start();
});
