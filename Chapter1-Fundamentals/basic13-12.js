// SHIFT ARRAY VALUES
var arr = [1,5,7,2];
for (var idx = 0; idx < arr.length; idx++){
    arr[idx] = arr[idx+1];
}
arr[arr.length-1]=0;
console.log(arr);
