var boot = {
    create:function () {
        // load result json van php query
        // game.load.json('leerlingen', 'results.json');
        // const leerlingen = game.cache.getJSON('leerlingen');
        // console.log(leerlingen);

        // Starting the physics system
        game.physics.startSystem(Phaser.Physics.ARCADE);

        // starting preload state
        game.state.start('Preload')
    }

};

