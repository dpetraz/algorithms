var array = [5,3,0,6,2,1,7,4,8]

function deconstruct(arr){
    if (arr.length <= 1){
        return arr;
    }

    var splitLen = Math.floor(arr.length/2);

    var leftArr = arr.slice(0, splitLen);
    var rightArr = arr.slice(splitLen, arr.length);

    deconstruct(leftArr)
    deconstruct(rightArr)
}


function mergeSort(arr){
    console.log(arr);

}

deconstruct(array);
