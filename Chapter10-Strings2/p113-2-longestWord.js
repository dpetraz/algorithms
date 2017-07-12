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


/** STRINGS2: LONGEST WORD
Given a string of words, create a function that returns the longest word.
**/

function longestWord(str){
    if (typeof(str) != 'string'){
        return '';
    }
    var arr = wordArray2(str);
    var storage = ''
    for (var idx = 0; idx < arr.length; idx++){
        if (arr[idx].length > storage.length){
            storage = arr[idx]
        }
    }
    return storage;
}

console.log(longestWord('Snap crackle pop!'));
