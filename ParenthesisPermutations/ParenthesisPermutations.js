/*
Given a number N generate all the valid permutations of N
pairs of parenthesis (), brackets [], and curly braces {}.
A permuation is defined as valid if it is 'balanced' in
the following sense: 

([]) : Balanced
(()  : Unbalanced
([)] : Unbalanced
))(( : Unbalanced
(){} : Balanced

EG: ParenthesisPermutations(2) === 

*/

//YOUR CODE HERE

var ParenthesisPermutations = function(num) {
  var arr = [];
  var generator = function(curr, depth) {
    if(depth === num) {
      arr.push(curr.join(''));
      return;
    }
    for (var i = 0; i < curr.length; i++) {
      var tmp = curr[i];
      curr[i] = '(' + curr[i] + ')';
      generator(curr, depth+1)
      curr[i] = tmp;
    }
    curr.push('()');
    generator(curr, depth+1);
    curr.pop()
  }
  generator([], 0);
  return arr;
};    

//ignore this
module.exports = ParenthesisPermutations
