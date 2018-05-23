var boot = {
    create:function () {
        // Starting the physics system
        game.physics.startSystem(Phaser.Physics.ARCADE);

        // starting preload state
        game.state.start('Preload')
    }

};

