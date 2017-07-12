var array = [5,29,-3,194,"car"];

function sizeRespone(array){
        if (array[0] > array.length){
            console.log("too big!");
        }
        else if (array[0] < array.length){
            console.log("too small");
        }
        else {
            console.log("just right!");
        }
}

sizeRespone(array);
