var array = [8,2,6,7,9,10,22,8];

function greaterThanIndex2(arr){
    var newarr = [];
    for (var index=0; index < arr.length; index++){
        if (arr[index] > arr[1]){
            newarr.push(arr[index]);
        }
    }
    console.log(newarr);
}

greaterThanIndex2(array);
