var array1 = ["i'm first string", "am i the second","i'm the third sting!"];
                //16                15              20

// OPTION 1:
// USING SPLICE FUNCTION

function removeShort(arr, length){

    for (var idx = 0; idx < arr.length; idx++){
        if (arr[idx].length < length){
            arr.splice(idx,2)
            idx --;
        }
    }
    return arr;
}

console.log(removeShort(array1,16));



// OPTION 2:
// CHANGING AND RETURNING THE ORIGINAL ARRAY

// function removeShort(arr, length){
//
//     for (var idx = 0; idx < arr.length; idx++){
//         if (arr[idx].length < length){
//             removeAt(arr,idx);      // CUSTOM FUNCTION FROM PREVIOUS ALGO EXERCISE
//             idx--;                // this fixes the index count if an array value removed
//         }
//     }
//     return arr;
// }
//
// console.log(removeShort(array1,16));



// OPTION 3
// CREATING A NEW ARRAY

// function removeShort(arr, length){
//     var newArray = [];
//     for (var idx = 0; idx < arr.length; idx++){
//         if (arr[idx].length >= length){
//             newArray.push(arr[idx]);
//         }
//     }
//     return newArray;
// }
//
// console.log(removeShort(array1, 16));
