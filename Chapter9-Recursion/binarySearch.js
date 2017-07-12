/**
BINARYSEARCH

Write a recursive function that, given a sorted array
and a value, determines whether the value is found
within the array. For example,
rBinarySearch([1,3,5,6],4) = false;
rBinarySearch([4,5,6,8,12], 5) = true.

[4,5,6,8,12]

calc a midpoint
mid == 2
 next iteration bisects the array
 [4,5,6]
 mid == 1
   5 === 6 => true
*/

var counter = 0;

function binarySearch(array,value){
  if(!Array.isArray(array) || array.length === 0) {
    return false;
  }

  var mid = Math.floor(array.length / 2);
  if (++counter === 100) throw new Error('wat');

  if (array[mid] === value) {
    return true;
  } else if (array[mid] > value) {
    return binarySearch(array.slice(0, mid), value);
  } else {
    return binarySearch(array.slice(mid+1), value);
  }
}
var a = [4,5,6,8,12, 14, 89];
console.log(binarySearch(a, 99));

function binarySearch2(array, value, startpoint, endpoint) {
  if(startpoint === undefined){
    startpoint =0;
    endpoint = array.length;
  }

  if(!Array.isArray(array) || endpoint <= startpoint){
    return false;
  }

  if (++counter === 100) throw new Error('wat');
  // if we subtract here it could place the midpoint below our acceptable range
  // adding ensures that, when divided/2, that value is the midpoint between start and end
  var mid = Math.floor((startpoint + endpoint)/2);

  if (array[mid] === value){
    return true;
  }
  if (array[mid] < value){
    startpoint = mid + 1;
  } else {
    endpoint = mid;
  }

  return binarySearch2(array,value,startpoint, endpoint);
}
//[4,5,6,8,12, 14, 89];
console.log(binarySearch2(a, 4));
