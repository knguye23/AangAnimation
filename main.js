var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();
ASSET_MANAGER.queueDownload("Aang.png");

ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	var aang = new Aang(gameEngine);
	gameEngine.init(ctx);
	gameEngine.addEntity(aang);
	gameEngine.start();
});
