// console.clear();

// FLATTEN NESTED arraySum[1, 2, [3, 4], []] ==> [1 ,2 ,3, 4]

var arr1 = [5, 6, [4, 2], 4, [], 6];

function flatten(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("This function requires an array to be passed")
    }

    var newarray = []
    for (var idx = 0; idx < arr.length; idx++){
        var element = arr[idx]
        if (Array.isArray(arr[idx])){
            for (var idx2 = 0; idx2 < arr[idx].length; idx2++){
                newarray.push(element[idx2]);
            }
        }
        else {
            newarray.push(element)
        }
    }
    return newarray;
}

// console.log(flatten(arr1));

//  WHAT IF WE HAVE A NESTED ARRAY WITHIN A NESTED ARRAY? [1, [3, 4, [5, 4]], 6, [], 9]


var arr2 = [1, [3, 4, [5, 8, 11]], 6, [], 9]

function flattenTwo(arr, resultArr) {
    if (!resultArr) {
        resultArr = []
    }

    if (!Array.isArray(arr)){
        return resultArr
    }

    var newarr = []
    for (var idx = 0; idx < arr.length; idx++){
        var element = arr[idx]
        if (Array.isArray(arr[idx])){
            flattenTwo(element, resultArr)
        }
        else {
            resultArr.push(element)
        }
    }
    console.log(resultArr)
    return resultArr
}


console.log(flattenTwo(arr2));

/** eval passed object
    if yes
      call recursive function
       - params:
           index?
           foundArray
*/




// BELOW IS JUST A TECHNIQUE FOR TRYING AND CATCHING ERRORS

// try {
//     flatten('string');
// }
// catch(e) {
//     console.log('catching error...');
//     console.log(e.message);
// }
// flatten('string');
