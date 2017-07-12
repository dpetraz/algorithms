// console.clear();

function avg(arr) {

    if (!Array.isArray(arr)) {
        return false;
    }

    var sum = 0;

    for (var idx = 0; idx < arr.length; idx++) {
        sum += arr[idx];
    }
    return(sum/arr.length);
}

var arr1 = [5,57,4,2,4,6];
console.log(avg(arr1));


/** WRITE A FUNCTION THAT RETURNS WHETHER THE GIVEN ARRAY HAS A BALANCE
POINT BETWEEN INDICES, WHERE ONE SIDE'S SUM IS EQUAL TO THE OTHERS. EX
[1,2,3,4,10] is TRUE, but [1,2,4,2,1] is false */

function isBalanced(arr) {
    if (!Array.isArray(arr)) {      //ARRAY CHECK
        return false;
    }
    var sum = 0;

    for (var idx = 0; idx < arr.length; idx++){
        sum += arr[idx]
    }

    var halfsum = 0;

    for (var idx = 0; idx < arr.length-1; idx++){
        halfsum += arr[idx];
        if (halfsum == sum/2) {
            return true;
        }
    }
    return false;
}

var arr2 = [1, 2, 3, 4, 10];
var arr3 = [1, 2, 100];

console.log(isBalanced(arr2));



/** RECREATE THE FUNCTION BUILT INTO JAVASCRIPTS ARRAY OBJECT.
EFFICIENTLY SHUFFLE A GIVEN ARRAY'S VALUES
(ALTHOUGH ARRAY DOESN'T REQUIRE RETURN, LETS DO IT ANYWAYS)*/

function shuffle(arr){
    var randomidx = 0;
    var swap;

    for (var idx = 0; idx < arr.length; idx++) {
        randomidx = Math.floor(Math.random() * arr.length);
        swap = arr[randomidx];
        arr[randomidx] = arr[idx];
        arr[idx] = swap;
    }
    return arr;
}

console.log(shuffle(arr2));

/** BALANCE INDEX

Here, our balance point is ON an index, not in between indices. Return the
balance INDEX where sums are equal on either side (exclude its own value).
Return -1 if none exist.
Ex.: [-2,5,7,0,3] -> 2, but [9,9] -> -1. */
function balancedIndex(arr){
    if (!Array.isArray(arr)){
        return -1;
    }
    var arraySum = 0;
    var leftSum = 0;

    for (var idx = 0; idx < arr.length; idx++){
        arraySum += arr[idx]
    }
    for (var idx = 0; idx < arr.length - 1; idx++){
        console.log("leftsum is " + leftSum);
        console.log("arraysum is " + arraySum);
        arraySum -= arr[idx];
        console.log("arr[idx] subracted, arraysum is now " + arraySum);
        if (leftSum == arraySum){
            return idx;
        }
        leftSum += arr[idx]
    }
    return -1;
}

var arr4 = [-2, 5, 7, 0, 3]
var arr5 = [0, 2, 7, 10, 6, 1, 2]
var arr6 = [3, 5, 1, 9]
var arr6 = [0, 2, 1, 6, 8]

console.log(balancedIndex(arr4));
