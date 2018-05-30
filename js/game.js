// creating game.phaser object
var game = new Phaser.Game(1024,768, Phaser.AUTO, 'game');

// adding various game states
game.state.add("Boot",boot);
game.state.add("Preload",preload );
game.state.add("Login",login);
game.state.add("Start", start);
game.state.add("Menu", menu);
game.state.add("Pre_login",pre_login);

// starting Boot state
game.state.start("Boot");