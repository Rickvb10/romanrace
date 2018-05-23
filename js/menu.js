var menu = {
    create:function () {
        console.log('menu');
        var x = game.world.centerX;
        var y = game.world.centerY;

        var background_sprite = game.add.sprite(0,0,'menuBK');
        var background_circle = game.add.sprite(x - 400,y - 128, 'menuRound');
        var robot = game.add.sprite(x - 215, y - 350, 'menuRobot');
        var startButton = game.add.button(x - 250,y + 150,'startButton', this.begin);

        background_sprite.scale.setTo(0.24, 0.24);
        background_circle.scale.setTo(0.24, 0.24);
        robot.scale.setTo(0.24, 0.24);
        startButton.scale.setTo(0.44, 0.44);
    },
    begin:function () {
        // Start Rick game sprite
        game.state.start('Start')
    }
};