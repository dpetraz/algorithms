var arr1 = [1,2,2,2,7,7,7,7,7,7,8];
var arr2 = [2,2,6,6,7];

function unionSorted(arr1, arr2){
    var newArr = [];
    var pointer1 = 0;
    var pointer2 = 0;

    while (pointer1 < arr1.length && pointer2 < arr2.length){
        if (arr1[pointer1] < arr2[pointer2]){
            newArr.push(arr1[pointer1++]);
        }
        else if (arr1[pointer1] === arr2[pointer2]){
            newArr.push(arr1[pointer1++]);
            pointer2++;
        }
        else {
            newArr.push(arr2[pointer2++]);
        }
    }
    while (pointer1 < arr1.length){
        newArr.push(arr1[pointer1++]);
    }
    while (pointer2 < arr2.length){
        newArr.push(arr2[pointer2++]);
    }
    return newArr;
}
console.log(unionSorted(arr1,arr2));
