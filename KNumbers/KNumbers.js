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

/*
* More efficient solution
*
* This solution makes use of a technique called symmetry breaking,
* we first note that we don't care about actually generating the
* solutions, only counting them. Then notice that in every recursive
* if we chose anything but 0 as our last digit we make identical branches
* in the recursion tree, 1-50 it doesn't matter.  Instead of generating 
* those we combine them into one node on the tree and weight it according
* to the number combined.
*
* Big O: approx 1.6^N for all K (you can think of it as 2^N if you want though)
*/

var KNumbers = function(K, N) {
  var counter = function(last, depth, weight) {
    if(depth === N) {
      return weight;
    }
    var count = 0;
    if(last) {
      count += counter(0, depth+1, weight)
    }
    return count + counter(1, depth+1, weight*(K-1))  
  };
  return counter(0, 0, 1);
};

// less efficient solution that generates all valid KNumbers
// Big O: K^N
// var KNumbers = function(K, N) {
//   var counter = function(last, num) {
//     if(num === N) {
//       return 1
//     }
//     var count = 0;
//     var start = (last === 0) ? 1 : 0;
//     for(var i = start; i < K; i++) {
//       count +=counter(i, num+1);
//     }
//     return count;
//   };
//   return counter(0,0)
// };


module.exports = KNumbers;