var array = [29,4,-1,40,0,-2,94];

function print(arr){
    var first_odd;
    for (idx = 0; idx < arr.length; idx++){
        if (arr[idx] % 2 != 0){
            first_odd = arr[idx];
        }
    }
    console.log("first odd # is " + first_odd + " and the 2nd to last value in the array is " + arr[array.length-2]);
}

print(array);
