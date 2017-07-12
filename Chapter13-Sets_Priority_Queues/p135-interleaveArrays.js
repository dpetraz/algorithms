var arr1 = [6,4,7,8];
var arr2 = [2,3,9];

function interleaveArray(firstArr, secondArr) {
    var maxLength;
    var minLength;
    var longerArr;
    if (firstArr.length > secondArr.length){
        maxLength = firstArr.length;
        minLength = secondArr.length;
        longerArr = firstArr;
    }
    else {
        maxLength = secondArr.length;
        minLength = firstArr.length;
        longerArr = secondArr;
    }

    var newArr = [];
    
    for (var idx = 0; idx < maxLength; idx++){
        if (idx > minLength - 1){
            newArr.push(longerArr[idx]);
        }
        else {
            newArr.push(firstArr[idx]);
            newArr.push(secondArr[idx]);
        }
    }
    return newArr;
}
console.log(interleaveArray(arr1,arr2));
