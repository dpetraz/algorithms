// GIVEN ARRAY AND VALUE Y, COUNTAND PRINT NUMBER OF ARRAY VALUES GREATER THAN Y
var arr = [1,3,5,7,8,11];
var Y = 7;
var counter = 0;

for (var idx = 0; idx < arr.length; idx++){
    if (arr[idx] > Y){
    counter += arr[idx];
    console.log(arr[idx]);
    }
}
