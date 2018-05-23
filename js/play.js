var play = {

    preload:function () {
        console.log("hoi");
        game.load.audio('sfx1', 'assets/sounds/correct.mp3');
        game.load.audio('sfx2', 'assets/sounds/incorrect.mp3');

        game.load.image('background', 'assets/background.png');

        game.load.atlas('horse', 'assets/horse.png', 'assets/horse_json.json')


    },
    create:function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        var background = game.add.sprite(200,200, 'background');


    }
};