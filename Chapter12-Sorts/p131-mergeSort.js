var array = [5,3,0,6,2,1,7,4,8]

function deconstruct(arr, separateArr){
    var separateArr = separateArr || [];
    if (arr.length == 1){
        separateArr.push(arr);
        return mergeSort(separateArr);
    }
    // if (separateArr.length == arr.length){
    //     return mergeSort(separateArr);
    // }
    var splitLen = arr.length/2;

    var leftArr = arr.slice(0, splitLen);
    var rightArr = arr.slice(splitLen, arr.length);
    // console.log(leftArr);
    // console.log(rightArr);

    deconstruct(leftArr, separateArr)
    deconstruct(rightArr, separateArr)
    // console.log(leftArr);
    // console.log(rightArr);
}


function mergeSort(arr){
    console.log(arr);

}

deconstruct(array);
