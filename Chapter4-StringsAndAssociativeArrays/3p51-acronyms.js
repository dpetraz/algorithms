//give a string return the strings acroum (first letter only capitalized)
var string1 = "There's no free lunch - gotta pay your way ";
var string2 = "Libe from New York, it's Saturday Night!";

function acronymMaker(str){
    var acronym = "";
    for (idx = str.length - 1; idx > 0; idx--){
        if (str[idx-1] === " " && str[idx] !== "  "){
            acronym = str[idx].toUpperCase() + acronym;
        }
    }
    if(str[0] !== " "){
        acronym = str[idx].toUpperCase() + acronym;
    }
    return acronym;
}

console.log(acronymMaker(string2));






//
//     //test for capital letters
// for (var idx = 0; idx < str.length; i++){
//     if (str.charCode(idx) >= 65 && str.charCodeAt(idx) <= 90 && !status){
//         newstr += str.charAt(idx);
//         status = true
//
//     //test for lower case letters
//     if  (str.charCodeAt(idx) >= 97 && str.charcodeAt(idx) -32);
//     status = true;
//
//
//     //test for spaces
//     if (status & str.charAt(idx) == ' ')
//     status = false;
//
