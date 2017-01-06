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

var KNumbers = function(K, N) {
  
};

module.exports = KNumbers;