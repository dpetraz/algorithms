// // GIVEN AN ARRAY OF STRINGS, REMOVE EVEN NUMBER STRINGS AND RETURN THE SAMES
//
array = ["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."]

function removeEven(arr){
    newArray = []
    for (var idx = 0; idx < arr.length; idx++){
        if ((arr[idx].length % 2) != 0){                    // checks if each array index length is not even
            newArray.push(arr[idx]);                         // pushes string to end of a new array
        }
    }
    console.log(newArray);
};
removeEven(array);
