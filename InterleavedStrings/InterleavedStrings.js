/*
* Given two words return an array of all interleavings
*
* An interleaving of two strings is a string containing all
* characters from both strings but maintains the order of 
* characters from a given string relative to other letters from
* that same string:
*
* So if we interleaved 'AB' and 'CD' then 'BCDA' would not be valid
* because B came after A in the original string but before in the
* second string. 
*
* e.g. interleavedStrings('AB', 'CD') = [ 'ABCD', 'ACBD', 'ACDB', 'CABD', 'CADB', 'CDAB' ]
*      interleavedStrings('it', 'do') = [ 'itdo', 'idto', 'idot', 'dito', 'diot', 'doit' ]
*/


//YOUR CODE HERE
var interleavedStrings = function(first, second) {
  var arr = []
  var generator = function(firstIndex, secondIndex, curr) {
    if (firstIndex >= first.length) {
      arr.push(curr + second.substring(secondIndex, second.length));
    }
    else if (secondIndex >= second.length) {
      arr.push(curr + first.substring(firstIndex, first.length));
    } else {
      generator(firstIndex + 1, secondIndex, curr + first[firstIndex]);
      generator(firstIndex, secondIndex + 1, curr + second[secondIndex]);
    }
  }
  generator(0, 0, '')
  return arr;
}

//ignore this
module.exports = interleavedStrings;