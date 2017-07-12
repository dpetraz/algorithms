var array = [29,4,-1,40,0,-2,94];

function double(arr){
    var newarr = [];
    for (var idx = 0; idx < arr.length; idx++){
        newarr.push(arr[idx]*2);
    }
console.log(newarr);

}

double(array);

double([1,2,3]);
