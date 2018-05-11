var array = [];

while(array.length < 4){
    var number = generateRandomNumber(1, 13 - 1);
    if (typeof array !== 'undefined' && array.length > 0) {
        var pushnumber = false;
        for (var i = 0; i < array.length; i++) {
            if (array[i] != number) {
                pushnumber = true;
            }
        }
        if(pushnumber){
            array.push(number);
            pushnumber = false;
        }
    }else{
        array.push(number);
    }
}
function generateRandomNumber(min, max) {
    var number = Math.floor((Math.random() * max) + min);
    return number;
}