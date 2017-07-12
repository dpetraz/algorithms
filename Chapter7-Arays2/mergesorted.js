/** MERGE SORTED ARRAYS
[1,2,2,4] and [2,6,6,7]
is [1,2,2,2,6,6,7,7]
 */// for [1, 2, 1, 3, 4, 2] return [1, 2, 3, 4]

 arr1 = [3, 2, 2, 4, 1, 8, 10, 1]
 arr2 = [1, 44, 5, 2, 33, 6, 7, 11, 10, 9, 3]

function mergeSorted(arr1, arr2){
    if ((!Array.isArray(arr1)) || ((!Array.isArray(arr2)))){
        throw new Error("Please provide two valid arrays")
    }

    var newarr = arr1.concat(arr2)

    for (var idx = 0; idx < newarr.length; idx++){
        for (var idx2 = idx + 1; idx2 < newarr.length; idx2++){
            if (newarr[idx] > newarr[idx2]){
                var temp = newarr[idx2]
                newarr[idx2] = newarr[idx];
                newarr[idx] = temp
            }
        }
    }
    return newarr;
}

console.log(mergeSorted(arr1, arr2));
