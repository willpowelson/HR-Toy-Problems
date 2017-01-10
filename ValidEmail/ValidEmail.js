/*
DO KNUMBERS FIRST

A new email service, gitgud.com, has started an email service
All the email addresses will be of the following form:

____________@gitgud.com

The underlined section will be a string containing capital or
lower case letters or a period i.e. '.'

However there can never be two consecutive periods, the period
cannot directly preceed the @ symbol, and the string cannot start
with a period. e.g:

urgud.@gitgud.com : INVALID
.imgud@gitgud.com : INVALID

we..gud@gitgud.com

The preceeding string must be at least 3 characters long

Produce an algorithm that will count the possible email addresses of length N
*/


//YOUR CODE HERE

/*
* Similar to the efficient KNumbers solution, we make use
* of symmetry breaking to achieve a significantly more efficient solution
*
*/

var ValidEmail2 = function(strSize) {
  var generator = function(prev, depth, weight) {
    if (depth === strSize) {
      return weight;
    } 
    var count = 0;
    if (prev !== '.' && depth !== 0 && depth !== strSize - 1) {
      count += generator('.', depth + 1, weight)
    }
    return count + generator(null, depth + 1, weight * 52);
  }
  if (strSize > 2) return generator(null, 0, 1);
  return null;
};


//ignore this
module.exports = ValidEmail;
