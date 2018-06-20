// lekker globaal
var background;
var logoutButton;

var endscreen = {
    create: function(){
        var x = game.world.centerX;
        var y = game.world.centerY;
        background = game.add.sprite(0, 0, 'win');
     logoutButton = game.add.button(x + 300,y + 250, 'logoutButton', this.onClicked);
    },
    onClicked: function(){
        game.state.start("Pre_login");
    },
    update : function(){

    }
}