// getDigits

// given string, return a number obtained from the integers within the string

// var string = "2k472k8sdnsfd ash q 312 248 j24b24lkjh 89jb2h2p3g33";
var string2 = "2k472k8sdnsfd ash q 312 23g33";

function getDigits(str){
    var number = "";

    for (var idx = 0; idx < str.length; idx++){
        var charCode = str.charCodeAt(idx);
        if (charCode <= 57 && charCode >= 48){
            number += str[idx];
        };
    };
    var newNumber = Number(number);
    console.log(typeof newNumber);      //verifies that we're in fact returning an integer
    return newNumber;
};


// console.log(getDigits(string));      //number length too large
console.log(getDigits(string2));
