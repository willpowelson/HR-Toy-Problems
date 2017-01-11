/*
* Given N cents count the number of ways to create change using 
* pennies, nickels, dimes, and quarters
*
* Examples:
*
* CoinCount(4) = 1 (4 pennies)
* CoinCount(5) = 2 (1 nickel or 5 pennies)
* CoinCount(12) = 13 (1 dime 3 pennies, 13 pennies, 1 nickel 8 pennies, 2 nickels 3 pennies)
*
* EXTRA CREDIT: Create a solution that runs in linear time
* recursive are generally some type of k^n where k is some integer
* generally the branching factor of the recursion tree
*/



//YOUR CODE HERE

/*
* Dynamic programming solution, we compute the ways to make
* N cents with the first K coins and memoize the result. 
* Our recursive calls therefore do not branch when reaching
* an already computed sub-result
*/

var CoinCount = function(num) {
  var coins = [1, 5, 10, 25]
  var hashTable = {}
  var generator = function(n, k, depth) {
    var hash = [n, k].toString();
    if(hashTable.hasOwnProperty(hash)) return hashTable[hash]
    if(k < 0 ||  n < 0) return 0;
    if(n === 0) return 1;
    hashTable[hash] = generator(n, k - 1, depth + 1) + generator(n - coins[k], k, depth + 1);
    return hashTable[hash];
  }

  //avoids call stack error by computing small cases first, not necessary for small inputs
  for(var i = 1; i <= num ; i++) {
    for(var j = 0; j < coins.length; j++) {
      generator(i, j, 0)
    }
  }

  return generator(num, coins.length - 1, 0);
}

// generative solution
//
// var CoinCount = function(num) {
//   var coins = [1, 5, 10, 25];
//   var generator = function(last, curr) {
//     if(curr > num) return 0;
//     if(curr === num) return 1;
//     if(last === 1) return 1;
//     return coins.reduce((acc = 0, coin) =>{
//       return acc += (last >= coin) ? generator(coin, curr + coin) : 0;
//     }); 
//   }
//   return generator(Infinity, 0);
// }


module.exports = CoinCount; 
