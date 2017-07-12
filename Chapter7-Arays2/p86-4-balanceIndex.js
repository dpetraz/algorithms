/**
BALANCE INDEX

Here, a balance point is on an index, not between
indices. Return the balance index where sums are
equal on either side (exclude its own value). Return -1 if none exist.
Ex.: [-2, 5, 7, 0, 3] → 2, but [9, 9] => -1.
*/
function balancedindex(arr){
  if (!Array.isArray(arr)){
    return -1;
  }
  var rightsum = 0;
  var leftsum = 0;
  for(var i = 0; i < arr.length; i++){
     leftsum+=arr[i];
  }
  console.log(leftsum)
  for(var i = 0; i <arr.length-1; i++){
   leftsum -= arr[i];
   console.log('left' + leftsum);

   if(rightsum == leftsum){
      return i;
    }
    rightsum+=arr[i];
  }
  return -1;
}
console.log(balancedindex([-2, 5, 7, 0, 3]))


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
