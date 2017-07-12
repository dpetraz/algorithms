var array = [1,2,5,-2,0,58,-8];

function printLow(arr){
    var low = arr[0];
    var high = arr[0];
    for (var idx=1; idx<arr.length;idx++){
        if (low > arr[idx]){
            low = arr[idx];
        }
        else if (high < arr[idx]){
            high = arr[idx];
        }
    }
    console.log(low + " <-- low and high --> " + high);
}

printLow(array);
