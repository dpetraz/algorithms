// GIVEN POSITIVE INTEGER LESS THAN 4000
// RETURN STRING CONTAINING THAT VALUE IN ROMAN NUMERALS

// var number = 3761;

function romanNumerals(num){

    var stringNum = ""
    stringNum = "" + num;
    console.log(stringNum + " is working");
    console.log("stringNum is " + number);
    console.log(num);
    var romanNum = "";
    var number = "";

    for (var idx = 0; idx < stringNum.length; idx++){
        if (stringNum[idx] >= 0 && stringNum[idx] <= 9 && stringNum[idx] != " "){
            stringNum += stringNum[idx];
        };
    };
    var extra = parseInt(stringNum, 10);

    return stringNum
}

romanNumerals(3761);

//
// var string2 = "2k472k8sdnsfd ash q 312 23g33";
//
// function getDigits(str){
//     var number = "";
//     for (var idx = 0; idx < str.length; idx++){
//         if (str[idx] >= 0 && str[idx] <= 9 && str[idx] != " "){
//             number += str[idx];
//         };
//     };
//     var number2 = parseInt(number, 10);
//     return number2;
// };


// console.log(getDigits(string));      //number length too large
// console.log(getDigits(string2));


// I - 1
// V - 5
// X - 10
// L - 50
// C - 100
// D - 500
// M = 1000
