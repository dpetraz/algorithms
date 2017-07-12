var arr1 = [1,2,3,5,7];
var arr2 = [2,4,5,7,8,9,11];

function mergeSorted(arr1, arr2) {
    var newArr = [];

    var pointerA = 0;
    var pointerB = 0;

    while (pointerA < arr1.length && pointerB < arr2.length){
        if (arr1[pointerA] < arr2[pointerB]){
            newArr.push(arr1[pointerA]);
            pointerA++;
        }
        else {
            newArr.push(arr2[pointerB]);
            pointerB++;
        }
    }

    while (pointerA < arr1.length){
        newArr.push(arr1[pointerA]);
        pointerA++;
    }
    while (pointerB < arr2.length){
        newArr.push(arr2[pointerB]);
        pointerB++;
    }

    return newArr;
}
console.log(mergeSorted(arr1, arr2));
