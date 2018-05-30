var headerText;
var login = {

    create:function () {
        //create & position image
        var x = game.world.centerX;
        var y = game.world.centerY;

        var background = game.add.sprite(0,0,"background");
        var transparentBK = game.add.sprite(x - 350 ,y - 220,'transparentBK');
        var rick = game.add.sprite(x + 200,y - 70,'rickSmall');
        var loginButton = game.add.button(x - 300,y + 120, 'loginButton', this.nextState);

        headerText = game.add.text(x - 110,y - 180, 'Inloggen',{
            font:'50px Arial',
            fill: '#ff1a14'
        });
    },
    nextState:function () {
        // starting menu state
        game.state.start('Menu')
    }
};