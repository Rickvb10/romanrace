var game = new Phaser.Game(640, 480, Phaser.AUTO, 'game');

var PhaserGame = function() {
    this.bmd = null;
    // points arrays - one for x and one for y
    this.points = {
        x: [60, 0, 200, 200, 150 , 60],
        y: [180, 120, 120, 0, 50 , 180]
    };
};

PhaserGame.prototype = {

    preload: function() {
        game.load.crossOrigin = "Anonymous";
        game.load.image('bird', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/173252/angry-bird.png');
    },

    create: function() {

        this.stage.backgroundColor = '#eee';
        this.increment = 1 / game.width;
        this.i = 0;
        this.timer1Stopped = true;
        this.timer1 = null;

        // Somewhere to draw to
        this.bmd = this.add.bitmapData(this.game.width, this.game.height);
        this.bmd.addToWorld();
        // Draw the path
        for (var j = 0; j < 1; j += this.increment) {
            var posx = this.math.bezierInterpolation(this.points.x, j);
            var posy = this.math.bezierInterpolation(this.points.y, j);
            this.bmd.rect(posx, posy, 3, 3, 'rgba(245, 0, 0, 1)');
        }

        // create the bird sprite - we will make this sprite
        // follow the motion path by using the plot function
        this.birdSprite = game.add.sprite(0, 0, "bird");
        this.birdSprite.anchor.setTo(0.5, 0.5);

    },

    update: function() {
        // this just takes care of resetting
        // the timer so the movement repeats
        if (this.timer1Stopped) {
            this.timer1Stopped = false;
            this.timer1 = this.game.time.create(true);
            this.timer1.loop(.02, this.plot, this);
            this.timer1.start();
        }
    },

    plot: function() {

        var posx = this.math.bezierInterpolation(this.points.x, this.i);
        var posy = this.math.bezierInterpolation(this.points.y, this.i);
        this.birdSprite.x = posx;
        this.birdSprite.y = posy;
        this.i += this.increment;
        if (posy > 480) {
            this.timer1.stop();
            this.timer1.destroy();
            this.i = 0;
            this.timer1Stopped = true;
        }
    }

};

window.onload = function() {
    game.state.add('Game', PhaserGame, true);
};

