var array = [29,-4,-1,40,-10,-2,94];

function countPositives(arr){
    var newarr = array;
    var counter = 0;
    for (var idx = 0; idx < arr.length; idx++){
         if (arr[idx] > 0){
            counter++;
        }
    }
    newarr.pop();
    newarr.push(counter);
    console.log(newarr);
}

countPositives(array);

// countPositives([1,-2,3]);
