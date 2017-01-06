/*
Let’s consider K-based numbers, containing exactly N digits.
We define a number to be valid if its K-based notation doesn’t
begin with a zero nor contain two successive zeros. For example:

  1010230 is a valid 7-digit base 10 number
  1000198 is not a valid 7-digit base 10 number
  0201235 is not a 7-digit number base 10 number, it is a 6-digit base 10 number

  1011010 is a valid 7-digit base 2 number
  0011111 is not a valid 7-digit base 2 number
  1112111 is not a valid 7-digit base 2 number, it is a valid 7-digit base 3 number

Given two numbers K and N you are to calculate the amount of valid K based numbers containing N digits.

e.g. KNumbers(11,3) === 1200

*/


//YOUR CODE HERE

//Efficient solution
var KNumbers = function(K, N) {
  var count = 0;
  var counter = function(last, depth, prod) {
    if(depth === N) {
      count += prod;
      return;
    }
    if(last) {
      counter(0, depth+1, prod)
    }
    counter(1, depth+1, prod*(K-1))  
  };
  counter(0, 0, 1);
  return count
};

// less efficient solution that may be more familiar in style
// var KNumbers = function(K, N) {
//   var count = 0;
//   var counter = function(last, num) {
//     if(num === N) {
//       count++;
//       return;
//     }
//     var start = (last === 0) ? 1 : 0;
//     for(var i = start; i < K; i++) {
//       counter(i, num+1);
//     }
//   };
//   counter(0, 0);
//   return count
// };

module.exports = KNumbers;