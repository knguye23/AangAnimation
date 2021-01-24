class Background {
    constructor(gameEngine, x, y) {
        Object.assign(this, {gameEngine, x, y});
        this.spritesheet = ASSET_MANAGER.getAsset("./spritesheets/background.png");
        this.animation = new Animator(this.spritesheet, 0, 0, 560, 272, 8, 0.2, 0, false, true);
    };

    draw(ctx) {
        this.animation.drawFrame(this.gameEngine.clockTick, ctx, this.x, this.y, params.scale);
    }

    update() {

    }
}