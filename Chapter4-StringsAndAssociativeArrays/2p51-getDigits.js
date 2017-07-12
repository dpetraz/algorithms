// getDigits

// given string, return a number obtained from the integers within the string

// var string = "2k472k8sdnsfd ash q 312 248 j24b24lkjh 89jb2h2p3g33";
var string2 = "2k472k8sdnsfd ash q 312 23g33";

function getDigits(str){
    var number = "";
    for (var idx = 0; idx < str.length; idx++){
        if (str[idx] >= 0 && str[idx] <= 9 && str[idx] != " "){
            number += str[idx];
        };
    };
    var number2 = parseInt(number, 10);
    return number2;
};


// console.log(getDigits(string));      //number length too large
console.log(getDigits(string2));
