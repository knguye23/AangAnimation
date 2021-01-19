class Aang {
    constructor(game) {
        Object.assign(this, {game});
        this.spritesheet = ASSET_MANAGER.getAsset("GliderWhipSide.png");

        this.animations = [];
        this.animations.push(new Animator(this.spritesheet, 
            384, 0, // xStart, yStart
            64, 64, // width, height
            6, 0.5, 0, // frame count, frame duration, frame padding
            false, // reverse
            true)); // loop

        this.animations.push(new Animator())
    };

    update() {

    };

    draw(ctx) {
        this.animations[0].drawFrame(this.game.clockTick, ctx, 300, 300, 3);
    };
};