// OBJECTIVE: create function fiven string, return strings contents without spaces

// STEPS:
// create a for loop that goes over each element in the string
// while looping assign non blank elements to a new string
// return the new string

var myString = "pl    ayTh    atFu   nk      YMu s ic";

function removeBlanks(str){
    string2 = '';
    for (var idx = 0; idx < str.length; idx++){
        if (str[idx] !== " "){
        string2 += str[idx];
        };
    };
    return string2;
};

console.log(removeBlanks(myString));
