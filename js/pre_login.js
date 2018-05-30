var pre_login = {
    create:function () {
        var x = game.world.centerX;
        var y = game.world.centerY;

        var background_sprite = game.add.sprite(0,0,'background');
        var transparentBK = game.add.sprite(x - 350 ,y - 220,'transparentBK');
        var nextButton = game.add.button(x - 150,y + 80, 'nextButton',this.nextState);
        var rick = game.add.sprite(x + 200,y - 70,'rickSmall');
        var welcomeText = game.add.sprite(x - 270,y - 200, 'welcomeText')
    },
    nextState:function () {
        //Starting login state
        game.state.start("Login")
    }
};