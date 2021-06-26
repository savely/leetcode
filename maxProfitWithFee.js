/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
 var maxProfit = function(prices, fee) {
    
    if(prices.length < 2) return 0
    
    let profit = 0, min = prices[0], max = min, i = 1
    
    while(i < prices.length-1) {
        
        if(prices[i] - prices[i+1] < fee) {
            if(min > prices[i]) {
                min = prices[i]
                max = min
            } else {
                max = Math.max(max, prices[i])
            }       
            i++
            continue
        }
        
        const localProfit = prices[i] - min -fee
        
       if(localProfit > 0) {
           profit += localProfit
           min = prices[i]
       }
       max = min
       i++    
    }

    max = Math.max(max, prices[prices.length-1])
    
    profit += Math.max(max - min - fee, 0)
    
    return profit
};


let arr = [1,3,7,5,10,3]

//arr = [9,8,7,1,2]

console.log(maxProfit(arr, 3))