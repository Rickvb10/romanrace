
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

var start = {
    create: function () {
        fx1 = game.add.audio('sfx1');
        fx1.allowMultiple = true;

        fx1.addMarker('correct', 0, 4.0);

        fx2 = game.add.audio('sfx2');
        fx2.allowMultiple = true;
        fx2.addMarker('incorrect', 0, 4.0);

        var background = game.add.sprite(0, 0, 'background');
        background.scale.setTo(0.25, 0.25);

        horse = game.add.sprite(game.world.centerX - 300, game.world.centerY - 150, 'horse');

        horse.animations.add('walk', Phaser.Animation.generateFrameNames('horse', 0, 2, '', 4), 10, true);
        horse.animations.play('walk');

        this.generateButtons(4);
        this.generateCard();
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
        name = game.add.sprite(posX, game.world.centerY + 200, image);
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

    }
};