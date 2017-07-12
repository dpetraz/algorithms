/**
MERGE SORTED ARRAYS

Merge two already-sorted arrays into a new sorted
array containing the multiset of all elements. Example:
given [1,2,2,7] and [2,6,6,7], return [1,2,2,2,6,6,7,7].
*/

var arr1 = [2, 4, 6, 8, 11];
var arr2 = [1, 5, 8, 14, 99, 104, 111];

function mergeSorted(arr1, arr2){
  if ((!Array.isArray(arr1)) && ((!Array.isArray(arr2)))){
    throw new Error("Please provide two valid arrays");
  }

  var newarr = [];
  var idx1 = 0;
  var idx2 = 0;
  while (idx1 < arr1.length && idx2 < arr2.length){
    if (arr1[idx1] < arr2[idx2]){
      newarr.push(arr1[idx1++]);
    }
    else {
      newarr.push(arr2[idx2++]);
    }
  }
  while (idx1 < arr1.length){
    newarr.push(arr1[idx1++]);
  }
  while (idx2 < arr2.length){
    newarr.push(arr2[idx2++]);
  }
  return newarr;
}

console.log(mergeSorted(arr1, arr2));

var z = 0;
var o = ++z;

console.log(o);
console.log(z);


/**
INTERSECT SORTED ARRAYS

Combine two already-sorted arrays into an array
containing the sorted intersection of the two.
Example: given [1,2,2,7] and [2,6,6,7], return [2,7].
*/

var arr3 = [1, 2, 2, 7];
var arr4 = [2, 2,6, 6, 7];

function intersectSorted(arr1, arr2){
  if ((!Array.isArray(arr1)) && ((!Array.isArray(arr2)))){
    throw new Error("Please provide two valid arrays");
  }
  var idx1 = 0;
  var idx2 = 0;
  var newarr = [];

  while (idx1 < arr1.length && idx2 < arr2.length){
    if (arr1[idx1] === arr2[idx2]){
      newarr.push(arr1[idx1++]);
      idx2++;
    }
    else if (arr1[idx1] < arr2[idx2]){
      idx1++;
    }
    else {
      idx2++;
    }
  }
    return newarr;
}
console.log(intersectSorted(arr3,arr4));
