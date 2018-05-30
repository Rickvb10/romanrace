var x;
var y;
var content = [
    " ",
    "Rick: Welkom bij Roman Race, ruiter",
    "Rick: Je staat nu in het Circus Maximus.",
    "Rick: Hier worden de meest dappere paarden races\ngehouden."
];

var text;
var index = 0;
var line = '';


var story = {

    create:function () {
        //create & position image
        x = game.world.centerX;
        y = game.world.centerY;

        var background_sprite = game.add.sprite(0,0,"background_with_Rick");
        var next = game.add.button(x + 400,y + 330, 'next', this.dialog);

        text = game.add.text(x - 120,y + 212, '', { font: "24px Arial", fill: "#000" });

        nextLine();

        //Scale image
        background_sprite.scale.setTo(1, 1);

    },
    dialog:function () {
        nextLine()
    }
};

function updateLine() {

    if (line.length < content[index].length)
    {
        line = content[index].substr(0, line.length + 1);
        // text.text = line;
        text.setText(line);
    }
}

function nextLine() {

    if(index > content.length){
        game.state.start('Start')
        console.log("next state!");
    }

    index++;

    if (index < content.length)
    {
        line = '';
        game.time.events.repeat(80, content[index].length + 1, updateLine, this);
    }

}
