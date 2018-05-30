var menu = {
    create:function () {
        console.log('menu');
        var x = game.world.centerX;
        var y = game.world.centerY;

        var background = game.add.sprite(0,0,'menuBK');
        var transparentCircle = game.add.sprite(x - 370,y - 110, 'transparentCircle');
        var rick = game.add.sprite(x - 215, y - 350, 'rickLarge');
        var startButton = game.add.button(x - 250,y + 150,'startButton', this.nextState);
        var logoutButton = game.add.button(x + 220,y - 362, 'logoutButton', this.logout);
    },
    nextState:function () {
        // Start Rick game sprite
        // game.state.start('Start')
        //story has start
        game.state.start('Story')
    },
    logout:function () {
        game.state.start('Login')
    }
};