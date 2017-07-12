var arr1 = [1,2,2,2,7,7,7,7,7,7,8];
var arr2 = [2,2,6,6,9,11];
// [1,2,6,7,8]

function unionSortedDedupe(arr1, arr2){
    var newArr = [];
    var pointer1 = 0;
    var pointer2 = 0;
    var dupe;

    while (pointer1 < arr1.length && pointer2 < arr2.length){
        if (arr1[pointer1] == newArr[newArr.length - 1]){
            pointer1++;
        }
        else if (arr2[pointer2] == newArr[newArr.length - 1]){
            pointer2++;
        }
        else if (arr1[pointer1] < arr2[pointer2]){
            newArr.push(arr1[pointer1++]);
        }
        else if (arr1[pointer1] === arr2[pointer2]){
            newArr.push(arr1[pointer1])
            dupe = arr1[pointer1++];
            while (dupe === arr2[pointer2]){
                pointer2++;
            }
            while (dupe === arr1[pointer1]){
                pointer1++;
            }
        }
        else {
            newArr.push(arr2[pointer2++]);
        }
    }

    while (pointer1 < arr1.length){
        if (arr1[pointer1] == newArr[newArr.length - 1]){
            pointer1++;
        }
        else {
            newArr.push(arr1[pointer1]);
        }
    }

    while (pointer2 < arr2.length){
        if (arr2[pointer2] == newArr[newArr.length - 1]){
            pointer2++;
        }
        else {
            newArr.push(arr2[pointer2]);
        }
    }
    return newArr;
}
console.log(unionSortedDedupe(arr1,arr2));
//
//
// function unionSorted(arr1, arr2){
//     var newArr = [];
//     var pointer1 = 0;
//     var pointer2 = 0;
//
//     while (pointer1 < arr1.length && pointer2 < arr2.length){
//         if (arr1[pointer1] < arr2[pointer2]){
//             newArr.push(arr1[pointer1++]);
//         }
//         else if (arr1[pointer1] === arr2[pointer2]){
//             newArr.push(arr1[pointer1++]);
//             pointer2++;
//         }
//         else {
//             newArr.push(arr2[pointer2++]);
//         }
//     }
//     while (pointer1 < arr1.length){
//         newArr.push(arr1[pointer1++]);
//     }
//     while (pointer2 < arr2.length){
//         newArr.push(arr2[pointer2++]);
//     }
//     return newArr;
// }
// console.log(unionSorted(arr1,arr2));
