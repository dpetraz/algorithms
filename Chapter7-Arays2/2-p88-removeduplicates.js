// for [1, 2, 1, 3, 4, 2] return [1, 2, 3, 4]

arr1 = [1, 2, 1, 3, 4, 2]
arr2 = [1, 2, 1, 3, 3, 2, 4, 2, 5, 1, 4, 6]

function removeDup(arr){
    if (!Array.isArray(arr)){
        throw new Error("Please provide an array")
    }

    var newarr = []

    for (var idx = 0; idx < arr.length; idx++){
        var element = arr[idx]
        var isFound = false;
        for (var idx2 = 0; idx2 < newarr.length; idx2++){
            if (newarr[idx2] === element) {
                isFound = true;
                break;
            }
        }
        if (!isFound){
            newarr.push(element)
        }
    }
    return newarr;
}

console.log(removeDup(arr2));
