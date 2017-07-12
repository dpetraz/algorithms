//GIVEN ARRAY FIND AND PRINT LARGEST ELEMENT
var arr = [11,33,51,44,39,101,88];
var max = arr[0];
for (var idx = 1; idx < arr.length; idx++){
    if (arr[idx] > max){
        max = arr[idx];
    }
}
console.log(max + " is the largest element in the array");
