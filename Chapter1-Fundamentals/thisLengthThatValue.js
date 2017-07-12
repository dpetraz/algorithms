var number1 = 3;
var number2 = 27;

function makeArray(num1, num2){
    var newarray = [];
    for (var index = 0; index < num1; index++){
        newarray.push(num2);
    }
    console.log(newarray);
}

makeArray(number1,number2);
