function displayElements(array){
  if (!Array.isArray(array) || !array.length){
    return;
  }
  console.log(array[0]);

  // recursive call
  displayElements(array.slice(1));

}
var array = [1, 2, 3, 4, 5];
displayElements(array);

// [1,2,3,4,5]

var count = 0;

function displayElements2(array, idx) {
  if (idx === undefined){
    idx = array.length;
  }
  if (!Array.isArray(array) || idx === 0) {
    return;
  }

  if (count++ === 100) throw new Error('what');

  // recursive call
  displayElements2(array, --idx);
  console.log(array[idx]);
}

// displayElements2(array);

/**
SIGMA

Write a recursive function that, given a number,
returns the sum of integers from one up to that
number. For example, rSigma(5) = 1+2+3+4+5 = 15;
rSigma(2.5) = 1+2 = 3; rSigma(-1) = 0.
*/
function rSigma(num) {
  if (num <= 0){
    return 0;
  }

  if (count++ === 100) throw new Error('what');
  return rSigma(num -1) + num;
}

console.log(rSigma(5));
