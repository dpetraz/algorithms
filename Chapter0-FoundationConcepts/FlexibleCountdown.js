var lowNum = 12;
var highNum = 1400;
var mult = 5;

for (var i = highNum; i >= lowNum; i--){
    if (i % mult == 0){
        console.log(i);
    }
}
