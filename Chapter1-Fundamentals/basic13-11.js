// GIVEN ARRAY, PRINT MAX MIN AND AVERAGE VALUES
var arr = [1,2,4,6,22,5];
var min = arr[0];
var max = arr[0];
var sum = arr[0];
for (var idx = 0; idx < arr.length; idx++){
    if (arr[idx] < min){
        min = arr[idx];
    }
    if (arr[idx] > max){
        max = arr[idx];
    }
    sum += arr[idx];
}
var average = sum/arr.length;
console.log("minimum: " + min + ", maximum: " + max + ", average: " + average);
