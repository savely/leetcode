/*
#123
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete at most two transactions.

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
   
    const maxInterval = function(start, end) {
        if(end - start < 1) return [0, start, end]
        
        let buy = prices[start], max = 0
        let intStart = start, intEnd = end
        
        for (let i = start; i <= end; i++) {
            const price = prices[i]
            
            if(price - buy > max) {
                max = price - buy
                intStart = start
                intEnd = i
            }
            
            if(price < buy) {
                buy = price
                start = i
            }
        }
        
       return [max, intStart, intEnd] 
    }
    
    
    let intMax = maxInterval(0, prices.length -1)
    
    if(intMax[0] === 0) return 0
    
    return intMax[0] + Math.max(maxInterval(0, intMax[1]-1)[0], maxInterval(intMax[2]+1, prices.length -1)[0])
};


console.log(maxProfit([1,2]))

