
// import { value } from "./Preload";

//console.log(value);
var card;
var cardNameArray = ['',
    'card_1', 'card_2', 'card_3', 'card_4', 'card_5', 'card_6', 'card_7', 'card_8', 'card_9', 'card_10',
    'card_11', 'card_12'
];

var knop1, knop2, knop3, knop4;
var valuesOfImages = ['',
    'knop_1', 'knop_2', 'knop_3', 'knop_4', 'knop_5', 'knop_6', 'knop_7', 'knop_8', 'knop_9', 'knop_10',
    'knop_11', 'knop_12'
];

var buttons = [knop1, knop2, knop3, knop4];
var fx1;
var fx2;
var randomButtonarray = [];
var back;
var horse;
var anim;
var loopText;
var miniHorse;
var miniHorse2;
var finish;
var startline;


var start = {
    create: function () {
        var x = game.world.centerX;
        var y = game.world.centerY;

        fx1 = game.add.audio('sfx1');
        fx1.allowMultiple = true;

        fx1.addMarker('correct', 0, 4.0);

        fx2 = game.add.audio('sfx2');
        fx2.allowMultiple = true;
        fx2.addMarker('incorrect', 0, 4.0);

        var background = game.add.sprite(0, 0, 'background');
        var gameDashboard = game.add.sprite(x - 210,y + 170,'gameDashboard');
        var map = game.add.sprite(x - 490,y + 112,'map');



        horse = game.add.sprite(x - 300, y - 150, 'horse');

        horse.animations.add('walk', Phaser.Animation.generateFrameNames('horse', 0, 2, '', 4), 10, true);
        horse.animations.play('walk');

        this.generateButtons(4);
        this.generateCard();
        this.map()
    },

    generateButtons: function (iterations) {
        var array = [];

        while (array.length < iterations) {
            var number = this.generateRandomNumber(1, valuesOfImages.length - 1);
            if (typeof array !== 'undefined' && array.length > 0) {
                var pushnumber = false;
                for (var i = 0; i < array.length; i++) {
                    if (array[i] != number) {
                        pushnumber = true;
                    } else {
                        pushnumber = false;
                        i = array.length;
                    }
                }
                if (pushnumber) {
                    array.push(number);
                    pushnumber = false;
                }
            } else {
                array.push(number);
            }
        }
        for (var i = 0; i < array.length; i++) {
            this.createButton(buttons[i], valuesOfImages[array[i]], game.world.centerX - 70 + (i * 130));
        }
        randomButtonarray = array;
    },

    animationStarted:function (sprite, animation) {
        game.add.text(32, 32, 'Animation started', { fill: 'white' });
    },

    animationLooped:function (sprite, animation) {
        if (animation.loopCount === 1)
        {
            loopText = game.add.text(32, 64, 'Animation looped', { fill: 'white' });
        }
        else
        {
            loopText.text = 'Animation looped x2';
            animation.loop = false;
        }
    },

    animationStopped: function (sprite, animation) {
        game.add.text(32, 64+32, 'Animation stopped', { fill: 'white' });
    },
    generateRandomNumber:function (min,max) {
        var number = Math.floor((Math.random() * max) + min);
        return number;
    },

    generateCard:function () {
        var randomNumberOutArray = randomButtonarray[this.generateRandomNumber(0, randomButtonarray.length)];

        var cardname = cardNameArray[randomNumberOutArray];

        card = game.add.sprite(game.world.centerX, game.world.centerY - 225, cardname);
        card.anchor.setTo(0.5, 0.5);
    },

    createButton:function (name, image, posX) {
        name = game.add.sprite(posX, game.world.centerY + 290, image);
        name.anchor.setTo(0.5, 0.5);
        name.inputEnabled = true;
        name.events.onInputDown.add(this.listener, this);
    },

    listener:function () {
        for (var i = 0; i< valuesOfImages.length; i++){
            if(arguments[0].key == valuesOfImages[i]){
                if(i == cardNameArray.indexOf(card.key)){
                    // console.log('correct');
                    fx1.play('correct');
                    this.generateButtons(4);
                }
                else{
                    // console.log('wrong');
                    fx2.play('incorrect');
                    this.generateButtons(4);
                }
                this.generateCard();
            }
        }

    },
    map:function () {
        //creating map points
        this.points = {
            x: [220,270,220,50,50,50,70,100,220],
            y: [720,650,600,600,650,670,720,720,720]
        };

        this.increment = 0.5 /game.width;
        this.increment2 = 0.4 /game.width;
        this.i = 0;
        this.j = 0;
        this.timer1Stopped = true;
        this.timer1 = null;

        this.timer2Stopped = true;
        this.timer2 = null;

        //Somewhere to draw path
        this.bmd = this.add.bitmapData(this.game.width,this.game.height);
        this.bmd.addToWorld();
        //Drawing path
        for(var i = 0; i < 1; i+= this.increment){
            var px = this.math.bezierInterpolation(this.points.x, i);
            var py = this.math.bezierInterpolation(this.points.y, i);
            this.bmd.rect(px, py, 15, 15, '#006837');
        }
        //adding mini horse sprite
        startline = game.add.sprite(220,700,'start');
        finish = game.add.sprite(180,700,'finish');

        miniHorse = game.add.sprite(x,y, 'miniHorse');
        miniHorse.anchor.setTo(0.5,0.5);

        miniHorse2 = game.add.sprite(x,y, 'miniHorse2');
        miniHorse2.anchor.setTo(0.5,0.5);



    },
    update:function () {
        //Resetting timer so movements repeats itself
        if(this.timer1Stopped){
            this.timer1Stopped = false;
            this.timer1 = this.game.time.create(true);
            this.timer1.loop(.01, this.plot, this);
            this.timer1.start();
        }
        if(this.timer2Stopped){
            console.log('hoi')
            this.timer2Stopped = false;
            this.timer2 = this.game.time.create(true);
            this.timer2.loop(.01, this.plot2, this);
            this.timer2.start();
        }
    },
    plot:function () {
        //Vector is following the motion path
        var posx = this.math.bezierInterpolation(this.points.x, this.i);
        var posy = this.math.bezierInterpolation(this.points.y, this.i);
        miniHorse.x = posx;
        miniHorse.y = posy;

        this.i += this.increment;
        if (posx > 220 && posy >720  ) {
            this.timer1.stop();
            this.timer1.destroy();
            this.i = 0;
            this.timer1Stopped = true;
        }
    },
    plot2:function () {
        //Vector is following the motion path
        var posx = this.math.bezierInterpolation(this.points.x, this.j);
        var posy = this.math.bezierInterpolation(this.points.y, this.j);
        miniHorse2.x = posx;
        miniHorse2.y = posy;


        this.j += this.increment2;
        if (posx > 220 && posy >720  ) {
            this.timer2.stop();
            this.timer2.destroy();
            this.j = 0;
            this.timer2Stopped = true;
        }

    }
};