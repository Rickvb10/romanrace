

// function getData(){
//     return fetch('leerling.php')
//      .then(response => response.json())
//      .then(data => successHandler(data))
//    .catch(error => errorHandler(error))
//     }


//     function successHandler(data){
//             x = data
//            return data     
//           }
//     function errorHandler(error){
//            console.log(error);
//           }
//    getData();



// let data = getData()
//  data.then(function(value){
    
//  console.log(value)
// })




var preload = {
    preload:function () {
        // Loading all assets
        game.load.audio('sfx1', 'assets/sounds/correct.mp3');
        game.load.audio('sfx2', 'assets/sounds/incorrect.mp3');
        game.load.image('background', 'assets/Main_background1.png');
        game.load.image('menuBK', 'assets/menuBK.png');
        game.load.image('menuRound','assets/menu_round.png');
        game.load.image('menuRobot', 'assets/menu_robot.png');
        game.load.image('startButton', 'assets/buttons/start_button.png');
        game.load.atlas('horse', 'assets/horse.png', 'assets/horse_json.json');

        game.load.image('loginButton', 'assets/buttons/inlog_button.png');

        game.load.image('romanRobot', 'assets/romanRobot_300x400-13.png');
        game.load.image('inlog_bk', 'assets/transparent_white_bk-13.png');
        game.load.image('logout_button', 'assets/buttons/logout_button.png');
        game.load.json('leerlingen', 'results.json');
        const leerlingen = game.cache.getJSON('leerlingen');
        console.log(leerlingen)

        for(var i = 0; i < cardNameArray.length - 1; i++){
            game.load.image('card_' + (i + 1), 'assets/cards/card' + (i + 1) + '.png');
        }

        for(var j = 0; j < valuesOfImages.length - 1 ; j++){
            game.load.image('knop_' + (j + 1), 'assets/buttons/knop' + (j + 1) + '.png');
        }


    },
    create:function () {
        //starting login state

        game.state.start('pre_login')
    }
};