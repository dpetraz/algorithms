// RETURN THE GIVEN ARRAY AFTER SEETING NEGATIVE VALUES TO ZERO
var arr = [-9,-6,5,11,-2,0,4];

for (var idx = 0; idx < arr.length; idx++){
    if (arr[idx] < 0){
        arr[idx] = 0;
    }
}
console.log(arr);
