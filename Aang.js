class Aang {
    constructor(game) {
        Object.assign(this, {game});
        this.spritesheet = ASSET_MANAGER.getAsset("./spritesheets/GliderWhipSide.png");

        this.animations = [];
        this.animations.push(new Animator(this.spritesheet, 
            384, 0, // xStart, yStart
            64, 64, // width, height
            6, 0.1, 0, // frame count, frame duration, frame padding
            false, // reverse
            true)); // loop

        this.animations.push(new Animator(this.spritesheet,
            0, 0, 
            64, 64,
            6, 0.1, 0,
            true,
            true));
    };

    update() {

    };

    draw(ctx) {
        this.animations[0].drawFrame(this.game.clockTick, ctx, 560-64, 544-128, 2);
        
    };
};