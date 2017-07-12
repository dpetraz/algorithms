function printAndReturn(){
    var arr = [5,3];
    var idx;
    for (idx = 0; idx < arr.length-1; idx++) {
        console.log(arr[idx]);
    }
    return arr[idx];
}
return printAndReturn();
