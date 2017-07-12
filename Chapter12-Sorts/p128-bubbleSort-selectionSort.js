// BUBBLE SORT - COMPARE VALUES IN ARRAY NEXT TO ONE ANOTHER
function bubbleSort(arr){
    var temp, swap = true;
    while(swap){
        swap = false;
        for (var i = 0; i < arr.length - 1; i++){
            if (arr[i] > arr[i+1]){
                temp = arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = temp;
                swap = true;
            }
        }
    }
    return arr;
}

var array = [3,6,1,2,5];
// console.log(bubbleSort(array));


// SELECTION SORT - FIND LARGEST VALUE IN ARRAY AND PLACE IT AT THE END OF THE ARRAY
function selectionSort(arr){
    var swap = true;
    var size = array.length;
    var largeIdx = 0;

    for (var i = 0; i < size; i++){
        for (var j = 1; j < size - i; j++){
            if (arr[j] > arr[largeIdx]){
                largeIdx = j;
            }
        }
        swap = array[arr.length - i - 1];
        arr[arr.length - i - 1] = arr[largeIdx];
        arr[largeIdx] = swap;
        largeIdx = 0;
    }

    return arr;
}
console.log(selectionSort(array));
