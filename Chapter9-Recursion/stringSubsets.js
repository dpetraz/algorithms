/**
STRING SUBSETS

Create strSubsets(str). Given a string, return an array
with all possible in-order character subsets. Given
'abc', return ['', 'a', 'b', 'c', 'bc', 'ac', 'ab', 'abc'].
*/

// STRING SUBSETS CODE HERE

function strSubsets(str, substr, arr) {
  arr = arr || [];
  substr = substr || '';
  if (str === ''){
    arr.push(substr);
    return arr;
  }
  var temp = str[0];

  str = str.slice(1);
  strSubsets(str, substr, arr);

  strSubsets(str, substr + temp, arr);
  return arr;
}

console.log(strSubsets('abcd'));
