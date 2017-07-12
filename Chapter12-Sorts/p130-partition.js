var array = [5,3,0,6,2,1,7,4]
// var array = [2,1,3,0]
function partition(arr, start, end){
  var pivot = start;
  var val = arr[start];
  for (var i = start+1; i < end; i++){
    if (arr[i] < val){
      pivot++;
      var temp = arr[i];
      arr[i] = arr[pivot];
      arr[pivot] = temp;
    }
  }
  arr[start] = arr[pivot];
  arr[pivot] = val;
  return pivot;
}

// console.log(partition(array));

function quickSort(arr, start=0, end=arr.length){
    var pivot = partition(arr, start, end);
    //will return initial pivot
    if (end - start > 2){
        quickSort(arr, start, pivot);
        quickSort(arr, pivot+1, end);
    }
}
quickSort(array);
console.log(array);
