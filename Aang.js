class Aang {
    constructor(game) {
        Object.assign(this, {game});
        this.spritesheet = ASSET_MANAGER.getAsset("Aang.png");

        this.animations = [];
        this.animations.push(new Animator(this.spritesheet, 
            8, 1200, // xStart, yStart
            26, 102, // width, height
            3, 3, 0, // frame count, frame duration, frame padding
            1, // reverse
            true)); // loop
    };

    draw(ctx) {
        this.animations[0].drawFrame(this.game.clockTick, ctx, 300, 300, 1);
    }
}