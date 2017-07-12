var array = [1,5,-8,-40,3,-14,38];

function upSize(arr){
    for (var idx=0; idx< arr.length; idx++){
        if (arr[idx]>0){
            arr[idx] = "big";
        }
    }
    console.log(arr);
}

upSize(array);
