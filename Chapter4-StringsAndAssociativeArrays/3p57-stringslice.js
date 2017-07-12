// stringSlice(number where the slice beings, number where the slice ends)
// stringslice takes in an index

function stringSlice(){
    if (arguments.length === 0){
        return myString;
    }

    var start = arguments[0];
    var end = -1;

    if (arguments.length > 1){
        end = arguments[1];
    }

    if (end === 0 || end >= myString.length){
        end = myString.length;
    }

    var newString = "";

    for (var idx = start; idx < end; idx++){
        newString += myString[idx]
    }

    return newString;
}

myString = 'hello this is my string'
console.log(stringSlice(4,25));
