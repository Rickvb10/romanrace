var headerText;
var login = {

    create:function () {
        //create & position image
        var x = game.world.centerX;
        var y = game.world.centerY;

        var background_sprite = game.add.sprite(0,0,"background");
        var transparent_bk = game.add.sprite(x - 415 , y - 250, 'inlog_bk');
        var roman_robot = game.add.sprite( x + 180, y - 110, 'romanRobot');
        var loginButton = game.add.button(x - 300,y + 120, 'loginButton', this.login);

        headerText = game.add.text(x - 110,y - 180, 'Inloggen',{
            font:'50px Arial',
            fill: '#ff1a14'
        });

        //Scale image
        background_sprite.scale.setTo(0.25, 0.25);
        transparent_bk.scale.setTo(0.25, 0.25);
        roman_robot.scale.setTo(0.25, 0.25);
        loginButton.scale.setTo(0.25,0.25)
    },
    login:function () {
        // starting menu state
        game.state.start('Menu')
    }
};