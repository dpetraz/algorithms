
function myFunction(aarr){
    for (var index = 0; index < aarr.length; index++){
        if (aarr[index] > aarr[1]){
            console.log(aarr[index]);
            counter += 1;
        }
    }
    return counter;
}

var myarr = [1, 3, 5, 7, 9, 13];
var counter = 0;

myFunction(myarr)
console.log("there are " + counter + " array elements greater than arr[2]");
