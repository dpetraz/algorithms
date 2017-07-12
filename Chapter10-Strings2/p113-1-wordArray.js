/** STRINGS2: WORD ARRAY
Create a function that, given a string of words (with spaces, tabs, and linefeeds), returns an array of words.
Given: 'Life is not a drill!'
Return: ['Life', 'is', 'not', 'a', 'drill!'] **/

function wordArray(str){
    var arr = [];
    if (typeof(str) != 'string'){
        return [];
    }
    var word = '';
    var delimieters = {
        '\t' : true,
    }
    for (var idx=0; idx < str.length; idx++){
        if (str[idx] == ' ' || str[idx] == '\t' || str[idx] == '\n'){
            if (word) {
                arr.push(word);
                word = '';
            }
        }
        else {
            word += str[idx];
        }
    }
    if (word) {
        arr.push(word);
    }
    return arr;
}

var my_string = "Life is not a    drill!"
// console.log(wordArray(my_string));

function wordArray2(str){
    var arr = [];
    if (typeof(str) != 'string'){
        return [];
    }
    var word = '';
    var delimiters = {
        '\t' : true,
        '\n' : true,
        ' ' : true,
    }
    for (var idx=0; idx < str.length; idx++){
        if (str[idx] in delimiters){
            if (word) {
                arr.push(word);
                word = '';
            }
        }
        else {
            word += str[idx];
        }
    }
    if (word) {
        arr.push(word);
    }
    return arr;
}

// console.log(wordArray2(my_string));
