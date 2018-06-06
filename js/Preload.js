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
        game.load.image('background', 'assets/backgrounds/mainBK.png');
        game.load.image('background_with_Rick', 'assets/backgrounds/Background_with_Rick.png');
        game.load.image('transparentBK', 'assets/backgrounds/transparentBK.png');
        game.load.image('menuBK', 'assets/backgrounds/menuBK.png');
        game.load.image('transparentCircle', 'assets/backgrounds/transparentCircle.png');

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
        game.load.atlas('horse', 'assets/horse.png', 'assets/horse_json.json');

        //text
        game.load.image('welcomeText', 'assets/welcomeText.png');
        game.load.image('loginText', 'assets/loginText.png');

        //json

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
        game.state.start('Pre_login')
    }
};