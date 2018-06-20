var name;
var menu = {
    create:function () {
        name = getCookie('leerling')
        console.log('menu');
        var x = game.world.centerX;
        var y = game.world.centerY;

        var background = game.add.sprite(0,0,'menuBK');
        var transparentCircle = game.add.sprite(x - 370,y - 110, 'transparentCircle');
        var rick = game.add.sprite(x - 215, y - 350, 'rickLarge');
        var startButton = game.add.button(x - 250,y + 150,'startButton', this.nextState);
        var logoutButton = game.add.button(x + 220,y - 362, 'logoutButton', this.logout);

        console.log(name)

        let styleButton = { font: "28px Arial", fill: "#000000", align: "center"};
        var text = game.add.text(20, 50, "Hallo " + name, styleButton);
    },
    nextState:function () {
        // Start Rick game sprite
        // game.state.start('Start')
        //story has start
        game.state.start('Start')
    },
    logout:function () {
        game.state.start('Login')
    }
};