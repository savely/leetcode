/*
#518
You are given coins of different denominations and a total amount of money. Write a function to compute the number of combinations that make up that amount. You may assume that you have infinite number of each kind of coin.
*/

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {

    const dp = new Array(amount + 1).fill(0)
    dp[0] = 1

    for(let i = 0; i <=  coins.length; i++) {
        let coin = coins[i]
        for(let j = coin; j <= amount; j++) {
          dp[j] += dp[j - coin] 
        }
    }
  return dp[amount] 
};

console.log(change(5, [1,2,5]))