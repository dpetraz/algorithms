// 1 - PRINT ALL INTEGERS 1 TO 255
for (var idx = 1; idx <256; idx++){
        console.log(idx);
    }

// 2 - PRINT EVEN INTEGERS 1 TO 255
for (var idx = 1; idx <256; idx += 2){
        console.log(idx);
    }


// 3 - PRINT INTEGERS 0 TO 255 AND PRINT SUM SO FAR
var sum = 0;
for (var idx = 0; idx < 256; idx++){
    console.log(idx);
    sum += idx;
    console.log(sum);
}

// 4 - ITERATE THROUGH GIVEN ARRAY AND PRINT EACH VALUE
var arr = [1,7,15,27,92];
for (var idx = 0; idx < arr.length; idx++){
    console.log(arr[idx]);
}


// 5 - GIVEN ARRAY FIND AND PRINT LARGEST ELEMENT
var arr = [11,33,51,44,39,101,88];
var max = arr[0];
for (var idx = 1; idx < arr.length; idx++){
    if (arr[idx] > max){
        max = arr[idx];
    }
}
console.log(max + " is the largest element in the array");


// 6 - PRINT AVERAGE OF ARRAY VALUES
var arr = [1,18,99,28,19];
var sum = 0;
for (var idx = 0; idx < arr.length; idx++){
    sum += arr[idx];
}
console.log(sum/arr.length);


// 7 - CREATE ARRAY WITH ODD INTEGERS FROM 1 TO 255
var arr = [];
for (var idx = 0; idx <= 255; idx++){
    arr.push(idx);
}
console.log(arr);


// 8 - SQUARE EACH VALUE IN AN ARRAY AND RETURN SAME ARRAY WITH CHANGED VALUES
var arr = [1,2,3,4,5];
for (var idx = 0; idx < arr.length; idx++){
    arr[idx] *= arr[idx];
}
console.log(arr);


// 9 - GIVEN ARRAY AND VALUE Y, COUNTAND PRINT NUMBER OF ARRAY VALUES GREATER THAN Y
var arr = [1,3,5,7,8,11];
var Y = 7;
var counter = 0;

for (var idx = 0; idx < arr.length; idx++){
    if (arr[idx] > Y){
    counter += arr[idx];
    console.log(arr[idx]);
    }
}


// 10 - RETURN THE GIVEN ARRAY AFTER SEETING NEGATIVE VALUES TO ZERO
var arr = [-9,-6,5,11,-2,0,4];

for (var idx = 0; idx < arr.length; idx++){
    if (arr[idx] < 0){
        arr[idx] = 0;
    }
}
console.log(arr);


// 11 - GIVEN ARRAY, PRINT MAX MIN AND AVERAGE VALUES
var arr = [1,2,4,6,22,5];
var min = arr[0];
var max = arr[0];
var sum = arr[0];
for (var idx = 0; idx < arr.length; idx++){
    if (arr[idx] < min){
        min = arr[idx];
    }
    if (arr[idx] > max){
        max = arr[idx];
    }
    sum += arr[idx];
}
var average = sum/arr.length;
console.log("minimum: " + min + ", maximum: " + max + ", average: " + average);


// 12 - SHIFT ARRAY VALUES
var arr = [1,5,7,2];
for (var idx = 0; idx < arr.length; idx++){
    arr[idx] = arr[idx+1];
}
arr[arr.length-1]=0;
console.log(arr);

// 13 - GIVEN AN ARRAY, REPLACE NEGATIVE VALUES WITH 'DOJO'
var arr = [1,-3,5,-7,0,1,-1,2];
for (var idx = 0; idx < arr.length; idx++){
    if (arr[idx] < 0){
        arr[idx] = "Dojo";
    }
}
console.log(arr)
