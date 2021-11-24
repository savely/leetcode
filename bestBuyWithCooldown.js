/*
#Best Time to Buy and Sell Stock with Cooldown
You are given an array prices where prices[i] is the price of a given stock on the ith day.

Find the maximum profit you can achieve. You may complete as many transactions as you like 
(i.e., buy one and sell one share of the stock multiple times) 
with the following restrictions:

    After you sell your stock, you cannot buy stock on the next day 
    (i.e., cooldown one day).

Note: You may not engage in multiple transactions simultaneously 
(i.e., you must sell the stock before you buy again).

 

Example 1:

Input: prices = [1,2,3,0,2]
Output: 3
Explanation: transactions = [buy, sell, cooldown, buy, sell]

Example 2:

Input: prices = [1]
Output: 0

 

Constraints:

    1 <= prices.length <= 5000
    0 <= prices[i] <= 1000


*/


/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {

    if(prices.length < 2) return 0;

    const dp = new Array(prices.length).fill(-1);
    dp[0] = 0;

    const f = (i, buy) => {

        if(i > prices.length - 1) return 0;

        if(dp[i] > 0) return dp[i];

        currProfit = prices[i] - buy;

        dp[i] = f(i + 1, Math.min(buy, prices[i]));

        if(currProfit > 0) {
            dp[i] = Math.max(dp[i], currProfit + f(i + 1, Infinity));
        }

        console.table(dp);

        return dp[i];
    }
    
    f(1, prices[0]);

    return dp[dp.length - 1];
};

let prices = [1,2,3,0,2];

console.log(maxProfit(prices));