    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');

    var PhaserGame = function () {

        this.bmd = null;

        this.star = null;

        this.mode = 0;

        this.points = {
            'x': [ 400, 600, 700, 600, 400, 200, 100, 200, 400 ],
            'y': [ 380, 380, 300, 220, 220, 220, 300, 380, 380 ]
        };

        this.pi = 0;
        this.path = [];

    };

    PhaserGame.prototype = {

        init: function () {

            this.game.renderer.renderSession.roundPixels = true;
            this.stage.backgroundColor = '#204090';

        },

        preload: function () {

            //  We need this because the assets are on Amazon S3
            //  Remove the next 2 lines if running locally

            this.load.image('star', 'assets/star.png');
            this.load.json('version', 'groep.json');
            //this.load.bitmapFont('shmupfont', 'assets/shmupfont.png', 'assets/shmupfont.xml');

            //  Note: Graphics are not for use in any commercial project

        },

        create: function () {

            this.bmd = this.add.bitmapData(this.game.width, this.game.height);
            this.bmd.addToWorld();

            var parserJson = this.cache.getJSON('version');

            //console.log(parserJson);

            for(let groep of parserJson.groep){
               // console.log(groep);
                 for(let [key,value] of Object.entries(groep)){
                    console.log(value);
                 }
            }

           // var text = game.add.text(100, 100, "" + parserJson.groep, { fill: '#ffffff' });
        //    text.setShadow(2, 2, 'rgba(0,0,0,0.5)', 0);
        

            this.star = this.add.sprite(0, 0, 'star');
            this.star.anchor.set(0.5);

            var py = this.points.y;

            for (var i = 0; i < py.length; i++)
            {
              // py[i] = this.rnd.between(10, 10);

            }

            //this.hint = this.add.bitmapText(8, 444, 'shmupfont', "Linear", 24);


            this.plot();

        },


        plot: function () {

            this.bmd.clear();

            this.path = [];

            var x = 1 / game.width;

            for (var i = 0; i <= 1; i += x)
            {
                // if (this.mode === 0)
                // {
                //     var px = this.math.linearInterpolation(this.points.x, i);
                //     var py = this.math.linearInterpolation(this.points.y, i);
                // }
                // else if (this.mode === 1)
                // {
                //     var px = this.math.bezierInterpolation(this.points.x, i);
                //     var py = this.math.bezierInterpolation(this.points.y, i);
                // }
                var px = this.math.catmullRomInterpolation(this.points.x, i);
                var py = this.math.catmullRomInterpolation(this.points.y, i);

                this.path.push( { x: px, y: py });


                this.bmd.rect(px, py, 1, 1, 'rgba(255, 255, 255, 1)');
            }

            for (var p = 0; p < this.points.x.length; p++)
            {
                this.bmd.rect(this.points.x[p]-3, this.points.y[p]-3, 6, 6, 'rgba(255, 0, 0, 1)');
            }
            // Dit zijn de blok points

        },

        update: function () {

            this.star.x = this.path[this.pi].x;
            this.star.y = this.path[this.pi].y;

            this.pi++
            
            if (this.pi >= this.path.length)
            {
                this.pi = 0;
            }

        }

    };

    game.state.add('Game', PhaserGame, true);
