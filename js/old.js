window.onload = function() {
    //  Note that this html file is set to pull down Phaser 2.5.0 from the JS Delivr CDN.
    //  Although it will work fine with this tutorial, it's almost certainly not the most current version.
    //  Be sure to replace it with an updated version before you start experimenting with adding your own code.
    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

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

    var buttons = [knop1, knop2, knop3, knop4 ];
    var fx1;
    var fx2;
    var randomButtonarray = [];

    var back;
    var horse;
    var anim;
    var loopText;


    function preload () {

        game.load.audio('sfx1', 'assets/sounds/correct.mp3');
        game.load.audio('sfx2', 'assets/sounds/incorrect.mp3');

        game.load.image('background', 'assets/background.png');

        game.load.atlas('horse', 'assets/horse.png', 'assets/horse_json.json');

        // console.log('cardNameArray.length = ' + cardNameArray.length);

        for(var i = 0; i < cardNameArray.length - 1; i++){
            // console.log('i = ' + (i + 1));
            game.load.image('card_' + (i + 1), 'assets/cards/card' + (i + 1) + '.png');
        }

        for(var i = 0; i < valuesOfImages.length - 1 ; i++){
            game.load.image('knop_' + (i + 1), 'assets/buttons/knop' + (i + 1) + '.png');
        }
    }

    function create () {

        fx1 = game.add.audio('sfx1');
        fx1.allowMultiple = true;

        fx1.addMarker('correct', 0, 4.0);

        fx2 = game.add.audio('sfx2');
        fx2.allowMultiple = true;
        fx2.addMarker('incorrect', 0, 4.0);

        var background = game.add.sprite(game.world.centerX, game.world.centerY, 'background');
        background.anchor.setTo(0.5, 0.5);







        horse = game.add.sprite(game.world.centerX - 300, game.world.centerY - 150, 'horse');
        // horse.scale.set(1);
        // horse.smoothed = false;
        horse.animations.add('walk', Phaser.Animation.generateFrameNames('horse', 0, 2, '', 4), 10, true);
        horse.animations.play('walk');
        // anim = horse.animations.add('walk');

        // anim.onStart.add(animationStarted, this);
        // anim.onLoop.add(animationLooped, this);
        // anim.onComplete.add(animationStopped, this);

        // anim.play(10, true);







        generateButtons(4);
        generateCard();
    }

    function animationStarted(sprite, animation) {
        game.add.text(32, 32, 'Animation started', { fill: 'white' });
    }

    function animationLooped(sprite, animation) {

        if (animation.loopCount === 1)
        {
            loopText = game.add.text(32, 64, 'Animation looped', { fill: 'white' });
        }
        else
        {
            loopText.text = 'Animation looped x2';
            animation.loop = false;
        }

    }

    function animationStopped(sprite, animation) {

        game.add.text(32, 64+32, 'Animation stopped', { fill: 'white' });

    }


    function generateButtons(iterations) {
        var array = [];

        while(array.length < iterations){
            var number = generateRandomNumber(1, valuesOfImages.length - 1);
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
                if(pushnumber){
                    array.push(number);
                    pushnumber = false;
                }
            }else{
                array.push(number);
            }
        }

        for (var i = 0; i < array.length; i++){
            createButton(buttons[i], valuesOfImages[array[i]], game.world.centerX - 70 + (i * 130));
        }

        randomButtonarray = array;

    }

    function generateRandomNumber(min, max) {
        var number = Math.floor((Math.random() * max) + min);
        return number;
    }

    function generateCard() {

        var randomNumberOutArray = randomButtonarray[generateRandomNumber(0, randomButtonarray.length)];

        var cardname = cardNameArray[randomNumberOutArray];

        card = game.add.sprite(game.world.centerX, game.world.centerY - 225, cardname);
        card.anchor.setTo(0.5, 0.5);
    }

    function createButton(name, image, posX){
        name = game.add.sprite(posX, game.world.centerY + 200, image);
        name.anchor.setTo(0.5, 0.5);
        name.inputEnabled = true;
        name.events.onInputDown.add(listener, this);
    }

    function listener () {

        // console.log(arguments);
        for (var i = 0; i< valuesOfImages.length; i++){
            if(arguments[0].key == valuesOfImages[i]){
                if(i == cardNameArray.indexOf(card.key)){
                    // console.log('correct');
                    fx1.play('correct');
                    generateButtons(4);
                }
                else{
                    // console.log('wrong');
                    fx2.play('incorrect');
                    generateButtons(4);
                }
                generateCard();
            }
        }
    }

    function update() {

    }
};