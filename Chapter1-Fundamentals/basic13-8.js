// SQUARE EACH VALUE IN AN ARRAY AND RETURN SAME ARRAY WITH CHANGED VALUES
var arr = [1,2,3,4,5];
for (var idx = 0; idx < arr.length; idx++){
    arr[idx] *= arr[idx];
}
console.log(arr);
