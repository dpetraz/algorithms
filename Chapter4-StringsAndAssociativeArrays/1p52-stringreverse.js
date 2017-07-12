//  reverseString(str) that, given string, returns that string with characters reversed
// Given "creatures", return "erutaerc". no built in fucntions - no reverse()



     //  01234567 - index position and string length 9
string = "creature";
var newString = "";

function reverseString(string){
    for (var idx = string.length - 1; idx >= 0; idx--){
        newString += string[idx];
    }
    return newString;
}

console.log(reverseString(string));
