
function avg(arr) {

   if (!Array.isArray(arr)) {
     return false;
   }

  var sum=0;

  for (var idx=0; idx < arr.length; idx++) {
    sum+=arr[idx];
  }
  return (sum/arr.length);
}

console.log(avg([5,57,4,2,4,6]));

/**
Write a function that returns whether the
given array has a balance point between
indices, where one side's sum is equal to
the other's. Ex.: [1, 2, 3, 4, 10] → true
(between indices 3 & 4), but [1, 2, 4, 2, 1] => false
*/

function isBalanced(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }

  var sum=0;

  for (var i=0; i < arr.length; i++) {
    sum+=arr[i];
  }

  var halfsum = 0;

  for (var i=0; i < arr.length-1; i++) {
    halfsum+=arr[i];

    if (sum/2==halfsum) {
      return true;
    }
  }

  return false;

}



console.log(isBalanced([1,2,3,4,10]));

/**
Recreate the function built into JavaScript's array
object. Efficiently shuffle a given array's values. Do
you need to return anything from your function?
*/

//length of 4 idx: 0-3

function shuffle(arr) {
  var randomIdx=0;
  var swap;

  for (var i=0; i < arr.length; i++) {
      randomIdx=Math.floor(Math.random()*arr.length);
      swap=arr[randomIdx];
      arr[randomIdx]=arr[i];
      arr[i]=swap;
  }

  return arr;
}

console.log(shuffle([1,2,3,4,5,6,7]));
