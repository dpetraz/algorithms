var param1 = 3;
var param2 = 5;
var param3 = 17;
var param4 = 9;

var i = param2;

while (i < param3){
    if (i % param1 == 0 && i != param4){
        console.log(i);
    }
    i++;
}
