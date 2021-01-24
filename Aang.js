class Aang {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});
        this.spritesheet = ASSET_MANAGER.getAsset("./spritesheets/AangSpritesheet.png");

        //states
        this.facing = 0; // 0 = right, 1 = left: this.facing = 
        this.movement = 0; // 0 = idle, 1 = running, 2 = jumping
        this.glider = 0; // 0 = glider disabled, 1 = glider enabled

        // animations
        this.animations = [];
        this.loadAnimations();

    };

    loadAnimations() { 
        for( var i = 0; i < 3; i++) { //this.movement
            this.animations.push([]);
            for (var j = 0; j < 2; j++) { //this.facing 
                this.animations[i].push([]);
                for (var k = 0; k < 2; k++) { //this.glider
                    this.animations[i][j].push([]);
                }
            }
        }

        // idle: this.movement = 0
        this.animations[0][0][0] = new Animator(this.spritesheet, 700, 0, 70, 100, 1, 1, 0, false, true); //idle right
        this.animations[0][1][0] = new Animator(this.spritesheet, 630, 0, 70, 100, 1, 1, 0, false, true); //idle left

        // running: this.movement = 1
        this.animations[1][0][0] = new Animator(this.spritesheet, 770, 0, 70, 100, 4, 0.1, 0, false, true); // running right
        this.animations[1][1][0] = new Animator(this.spritesheet, 350, 0, 70, 100, 4, 0.1, 0, true, true); // running left
        
        this.animations[1][0][1] = new Animator(this.spritesheet, 700, 100, 70, 100, 5, 0.1, 0, false, true); // glider whip right
        this.animations[1][1][1] = new Animator(this.spritesheet, 350, 100, 70, 100, 5, 0.1, 0, true, true); // glider whip left

        // jumping: this.movement = 2
        this.animations[2][0][0] = new Animator(this.spritesheet, 700, 200, 70, 100, 10, 0.1, 0, false, true); // normal jump right
        this.animations[2][1][0] = new Animator(this.spritesheet, 0, 200, 70, 100, 10, 0.1, 0, true, true); // normal jump left
        
        this.animations[2][0][1] = new Animator(this.spritesheet, 700, 300, 70, 100, 8, 0.1, 0, false, true); // jump glider spin right
        this.animations[2][1][1] = new Animator(this.spritesheet, 140, 300, 70, 100, 8, 0.1, 0, true, true); // jump glider spin left



    };

    update() {
        
        const SPEED = 3;

        if (!this.game.right && !this.game.left && !this.game.up && !this.game.down && !this.game.comma) {
            this.movement = 0; 
            this.glider = 0;
        }

        if (this.game.right && !this.game.comma && !this.game.up) {
            console.log("run right");
            this.facing = 0; // right
            this.movement = 1; // running
            this.glider = 0; // no glider
            this.x += SPEED;
        }

         if (this.game.right && this.game.comma && !this.game.up) {
            this.facing = 0; // right
            this.movement = 1; // running
            this.glider = 1; // glider whip
        }

        if (this.game.left && !this.game.comma && !this.game.up) {
            this.facing = 1; // left
            this.movement = 1; // running
            this.glider = 0; // no glider
            this.x -= SPEED;
        }

        if (this.game.left && this.game.comma && !this.game.up) {
            this.facing = 1; // left
            this.movement = 1; // running
            this.glider = 1; // glider whip
        }

        if (this.game.up && !this.game.comma) {
            if (this.game.right) { // right
                this.facing = 0;
                this.movement = 2;
                this.glider = 0;
                this.x += SPEED;

            } else if (this.game.left) { //left
                this.facing = 1;
                this.movement = 2;
                this.glider = 0;
                this.x -= SPEED;
            }
        }

        if (this.game.up && this.game.comma) {
            if (this.game.right) { // right
                this.facing = 0;
                this.movement = 2;
                this.glider = 1;
                this.x += SPEED;

            } else if (this.game.left) { //left
                this.facing = 1;
                this.movement = 2;
                this.glider = 1;
                this.x -= SPEED;
            }
        }
        
         if (this.x < 0) this.x = 0;
         if (this.y < 0) this.y = 0;
         if (this.x > params.canvaswidth - 70*params.scale) this.x = params.canvaswidth - 70*2;
         if (this.y > params.canvasheight) this.y = params.canvasheight;
    };

    draw(ctx) {
        this.animations[this.movement][this.facing][this.glider].drawFrame(this.game.clockTick, ctx, this.x, this.y, params.scale);
    };
};