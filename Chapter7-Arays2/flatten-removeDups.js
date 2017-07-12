/**
  Flatten nested arrays
  [1, 2, [3,4], []] => [1,2,3,4]
*/

function flatten(arr){
  if(!Array.isArray(arr)){
    throw new Error("Please enter an array")
  }
  var newarr=[];
  for(var idx=0;idx<arr.length;idx++){
    var element = arr[idx]
    if(Array.isArray(element)){
      for(var idx2=0;idx2<element.length;idx2++){
        newarr.push(element[idx2]);
      }
    }

    else{
      newarr.push(element);
    }
  }
  console.log(newarr)
  return newarr;
}

// flatten([1,[2,3, [1,2,3]],4,[]]);
// try {
//    flatten('string');
// } catch(e) {
//   console.log('catching error');
//   console.log(e.message);
// }


function flattenTwo(arr, resultArr) {
  if (!resultArr) resultArr = [];
  if(!Array.isArray(arr)) {
    return resultArr;
  }

  for (var index = 0; index < arr.length; index++) {
    var element = arr[index];
    if(Array.isArray(element)){
      flattenTwo(element, resultArr);
    }
    else{
      resultArr.push(element);
    }
  }
  console.log(resultArr)
  return resultArr;
}
/**
  eval passed object
    if yes
      call rescursive function
        - params:
            index?
            foundArray

*/


flattenTwo([1,[2,3, [1,2,3]],4,[]]);

/**
REMOVE DUPLICATES

Remove duplicate values from an array. Do not alter
the original array; return a new one, keeping results
'stable' (retain original order). Given [1, 2, 1, 3, 4, 2],
return a new array [1, 2, 3, 4].

Second-level challenge: Work 'in-place' in given
array. Alter order if needed (stability is not required).
Ex.: [1, 2, 1, 3, 4, 2] you could change to [1, 2, 4, 3].

Third-level challenge: Make it in-place and stable.

Fourth-level challenge: Can you make this faster by
eliminating any second inner loop?
*/

function removeDup(arr){
  var newarr = [];
  if(!Array.isArray(arr)){
    throw new Error("Please enter an array")
  }
//   newarr.push(arr[0]);
  for(var idx=0; idx<arr.length; idx++){
    var element = arr[idx];
    var isFound = false;
    for(var index=0; index<newarr.length;index++) {
      if(newarr[index]===element){
        isFound=true;
        break;
      }
    }
    if(!isFound){
      newarr.push(element)
    }
  }
  console.log(newarr)
  return newarr

}
removeDup([1,2,1,3,4,2])
removeDup([]);
