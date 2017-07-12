var arr1 = [1,2,2,2,7];
var arr2 = [2,2,6,6,7];

function intersectSorted(arr1, arr2){
    var newArr = [];
    var pointer1 = 0;
    var pointer2 = 0;

    while (pointer1 < arr1.length && pointer2 < arr2.length){
        if (arr1[pointer1] == arr2[pointer2]) {
            newArr.push(arr1[pointer1]);
            pointer1++;
            pointer2++;
        }
        else if (arr2[pointer2] > arr1[pointer1]) {
            pointer1++;
        }
        else {
            pointer2++;
        }
    }
    return newArr;
}

console.log(intersectSorted(arr1,arr2));
