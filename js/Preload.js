// function getData(){
//     return fetch('leerling.php')
//      .then(response => response.json())
//      .then(data => successHandler(data))
//    .catch(error => errorHandler(error))
//     }
//
//     function successHandler(data){
//            return data
//           }
//     function errorHandler(error){
//            console.log(error);
//           }
//    getData();
//
// let data = getData()
// data.then((value) =>{
//     console.log(value)
// })

//export { value };
 
var preload = {
    preload:function () {
        // Loading all assets
        //sounds
        game.load.audio('sfx1', 'assets/sounds/correct.mp3');
        game.load.audio('sfx2', 'assets/sounds/incorrect.mp3');

        //backgrounds
        game.load.image('background', 'assets/backgrounds/background.png');
        game.load.image('background_with_Rick', 'assets/backgrounds/Background_with_Rick.png');
        game.load.image('transparentBK', 'assets/backgrounds/transparentBK.png');
        game.load.image('menuBK', 'assets/backgrounds/menuBK.png');
        game.load.image('transparentCircle', 'assets/backgrounds/transparentCircle.png');
        game.load.image('white', 'assets/objects/background(1).png');

        //buttons
        game.load.image('nextButton', 'assets/buttons/nextButton.png');
        game.load.image('loginButton', 'assets/buttons/loginButton.png');
        game.load.image('startButton', 'assets/buttons/startButton.png');
        game.load.image('logoutButton', 'assets/buttons/logoutButton.png');
        game.load.image('next', 'assets/buttons/verder.png');
        game.load.image('klasButton', 'assets/buttons/klasButton.png');
        game.load.image('nameButton', 'assets/buttons/klasButton.png');

        //characters
        game.load.image('rickSmall', 'assets/character/rickSmall.png');
        game.load.image('rickLarge', 'assets/character/rickLarge.png');
        game.load.image('horse', 'assets/character/horseNcart.png');
        game.load.image('win','assets/backgrounds/win.png');

        game.load.image('miniHorse2', 'assets/character/horse2.png');
        game.load.image('miniHorse', 'assets/character/horse1.png');

        //objects
        game.load.image('gameDashboard', 'assets/objects/gameDashboard.png');
        game.load.image('map','assets/objects/map.png');
        game.load.image('finish','assets/objects/finish.png');
        game.load.image('start','assets/objects/start.png');
        game.load.image('minimapCourse', 'assets/backgrounds/minimapCourse.png');
        game.load.image('road', 'assets/objects/road.png');


        //text
        game.load.image('welcomeText', 'assets/welcomeText.png');
        game.load.image('loginText', 'assets/loginText.png');

        //json
        game.load.atlas('dust1','assets/json/dust1.png', 'assets/json/dust1.json');
        game.load.atlas('wheel','assets/json/wheel.png', 'assets/json/wheel.json');
        game.load.atlas('backleg','assets/json/backleg.png', 'assets/json/backleg.json');
        game.load.atlas('frontleg','assets/json/frontleg.png', 'assets/json/frontleg.json');
        game.load.atlas('tail','assets/json/tail.png', 'assets/json/tail.json');
        game.load.atlas('dust2','assets/json/dust2.png', 'assets/json/dust2.json');


        game.load.json('leerlingen', 'results.json');

        for(var i = 0; i < cardNameArray.length - 1; i++){
            game.load.image('card_' + (i + 1), 'assets/cards/card' + (i + 1) + '.png');
        }
        for(var j = 0; j < valuesOfImages.length - 1 ; j++){
            game.load.image('knop_' + (j + 1), 'assets/buttons/knop' + (j + 1) + '.png');
        }
    },
    create:function () {
        //starting login state
        //game.state.start('Pre_login')
        game.state.start('Pre_login')
    }
};