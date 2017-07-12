// GIVEN AN ARRAY, REPLACE NEGATIVE VALUES WITH 'DOJO'
var arr = [1,-3,5,-7,0,1,-1,2];
for (var idx = 0; idx < arr.length; idx++){
    if (arr[idx] < 0){
        arr[idx] = "Dojo";
    }
}
console.log(arr)
