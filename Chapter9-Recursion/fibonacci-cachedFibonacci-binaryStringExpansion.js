/**
FIBONACCI

Write a function rFib(n) that, given a number n,
recursively computes and returns the nth number in
the Fibonacci sequence. As earlier, consider the first
two (n = 0, n = 1) Fibonacci numbers to have values 0
and 1. Thus, rFib(2) = 0+1, or 1; rFib(3) = 1+1, or 2;
rFib(4) = 1+2, or 3; rFib(5) = 2+3, or 5. Also,
rFib(3.65) = rFib(3), or 2.
Finally, rFib(-2) = rFib(0), or 0.

   1, 2, 3, 4, 5, 6, 7,  8,  9,  10, 11, 12,  13 ....
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233 ....
*/
// FIBONACCI CODE HERE

var branch = 0;

function rFibo(num){
  branch++;
  if(num<=0){
    return 0
  }
  if(num===1){
    return 1
  }
  return rFibo(num-1) + rFibo(num-2);
}
var num = 1000;
var start = Date.now();
// console.log(rFibo(num))

console.log(Date.now() - start);
console.log('branch ' + branch);

var branch2 = 0;
start = Date.now();
function fib2(n, cache) {
  branch2++;
  cache = cache || {};
  if (n in cache){
    return cache[n];
  }
  if(n<=0){
    return 0;
  }
  if(n===1){
    return 1
  }
  cache[n] = fib2(n-1, cache) + fib2(n-2, cache)
  return cache[n]
}

console.log(fib2(6));
console.log('branch 2 ' + branch2);
console.log('second', Date.now() - start);
/**
BINARY STRING EXPANSION

You will be given a string containing characters '0',
'1', and '?'. For every '?', either '0' or '1' characters
are valid. Write a recursive function that returns an
array of all valid strings that have '?' characters
expanded into '0' or '1'. Ex.: binStrExpand('1?01?1')
should return ['100101', '100111', '110101', '110111'].
For this challenge, you can use string
functions such as slice(), etc., but be frugal with their
use, as they are expensive.

1?0 => ['110', '100']
*/
// BSE CODE HERE
function bse(str,arr){
  arr = arr || [];
  var first = str.split('?')[0]
  if (first.length ===str.length){
    arr.push(str);
    return arr;
  }
  var second = str.slice(first.length+1)
  console.log("Second= " + second)
  bse(first+0+second, arr);
  bse(first+1+second, arr);
  return arr;
}

console.log(bse('1???1'));
