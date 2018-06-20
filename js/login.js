var headerText;
let klassen = [];
let leerlingen = [];
var groupnumber;
var data;
var text;
var klasButton;
var nameButton;
var drawnObject;
var textinBox;
var x;
var y;
var currentLeering;
var loginButton;

var login = {

    create:function () {
        //create & position image
         x = game.world.centerX;
         y = game.world.centerY;

        var background = game.add.sprite(0,0,"background");
        var transparentBK = game.add.sprite(x - 350 ,y - 220,'transparentBK');
        var rick = game.add.sprite(x + 200,y - 70,'rickSmall');
        
        klasButton = game.add.button(x-325, y -140, 'klasButton',this.onClicked);
        nameButton = game.add.button(x-325, y -50, 'nameButton',this.onName);

        nameButton.visible = false;
        headerText = game.add.text(x - 110,y - 200, 'Inloggen',{
            font:'36px Arial',
            fill: '#ff1a14'
        });

        data = game.cache.getJSON('leerlingen');
         for (const key in data) {
             if (data.hasOwnProperty(key)) {
                 const element = data[key];
                 klassen.push(element.groep_id);    
             }
         }
         klassen = find_duplicate_in_array(klassen)
           
    },
    onClicked: function(){
        klasButton.visible = false

        var width = 800 // example;
        var height = 600 // example;
        var bmd = game.add.bitmapData(width, height);
         
        bmd.ctx.beginPath();
        bmd.ctx.rect(0, 0, width, height);
        bmd.ctx.fillStyle = '#c0392b';
        bmd.ctx.fill();
        drawnObject = game.add.sprite(game.world.centerX, game.world.centerY, bmd);
        drawnObject.anchor.setTo(0.5, 0.5);

        var style = { font: "36px Arial", fill: "#000000", align: "center" };
        textinBox = game.add.text(x, y-270, "-Selecteer groep", style);
        textinBox.anchor.set(0.5);

        let groeptext = [];
        for (let k = 0; k < klassen.length; k++) {
           const element = klassen[k];
           
           let styleButton = { font: "28px Arial", fill: "#000000", align: "center"};
           var text = game.add.text(game.world.centerX -50,150 + (k * 50), "Groep " + element, styleButton);
           text.inputEnabled = true;
           text.data = {number: element};
           text.events.onInputDown.add(groupNumber,this);
           groeptext.push(text);
        }
        function groupNumber(item) {
            nameButton.visible = true;
            drawnObject.destroy();
            textinBox.destroy();
            klasButton.visible = true;
            console.log(item.data.number)
            leerlingen = [];
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    const element = data[key];
                    if(element.groep_id == item.data.number){
                        leerlingen.push(element.voornaam + " " + element.achternaam)
                    }        
                }
            }
            console.log(leerlingen)

            for (let index = 0; index < groeptext.length; index++) {
                groeptext[index].destroy();
            }
        }
    },
    onName: function(){
        // klasButton.visible = false
        
        var width = 800 // example;
        var height = 600 // example;
        var bmd = game.add.bitmapData(width, height);
         
        bmd.ctx.beginPath();
        bmd.ctx.rect(0, 0, width, height);
        bmd.ctx.fillStyle = '#c0392b';
        bmd.ctx.fill();
        nameButton.visible = false;
        klasButton.visible = false;
        drawnObject = game.add.sprite(game.world.centerX, game.world.centerY, bmd);
        drawnObject.anchor.setTo(0.5, 0.5);

        var style = { font: "36px Arial", fill: "#000000", align: "center" };

        console.log(leerlingen)

        var leerlingtext = [];
        for (let k = 0; k < leerlingen.length; k++) {
            const element = klassen[k];
            let styleButton = { font: "28px Arial", fill: "#000000", align: "center"};
            var text = game.add.text(game.world.centerX - 150,150 + (k * 50), leerlingen[k], styleButton);
            text.inputEnabled = true;
            text.data = {name: leerlingen[k]};
            text.events.onInputDown.add(leeringName,this);
            leerlingtext.push(text);
        }
        function leeringName(item){

            if(textinBox){
                textinBox.destroy();
            }

            textinBox = game.add.text(game.world.centerX- 175, y + 90, "-Naam: " + item.data.name, style);
    
            textinBox.anchor.set(0.5);

            loginButton = game.add.button(x - 325,y + 150, 'loginButton', login.nextState);
            
            console.log(item.data.name)
            currentLeering = item.data.name;

            drawnObject.destroy();

            for (let index = 0; index < leerlingtext.length; index++) {
                leerlingtext[index].destroy();
            }
        }

    },
    nextState:function () {
        // starting menu state
        setCookie("leerling", currentLeering,7)
        
        setCookie("nummer2")
        
        game.state.start('Menu')
    }
};
function find_duplicate_in_array(arra1) {
    var i,
    len=arra1.length,
    result = [],
    obj = {}; 
    for (i=0; i<len; i++)
    {
        obj[arra1[i]]=0;
    }
    for (i in obj) {
        result.push(i);
    }
    return result;
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}