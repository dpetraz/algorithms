// INSERTION SORT
function insertionSort(arr){
    var temp, backwardsRunner;
    for (var idx = 1; idx < arr.length; idx++){
        backwardsRunner = idx;
        temp = arr[idx];
        while(temp < arr[backwardsRunner - 1]) {
            arr[backwardsRunner] = arr[backwardsRunner - 1];
            backwardsRunner--;
        }
        arr[backwardsRunner] = temp;
    }
    return arr;
}

var array = [6,3,1,2,5,9,0,-2];
// console.log(bubbleSort(array));
console.log(insertionSort(array));
