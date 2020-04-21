
//Array(9).fill(null).map(_ => Array(9).fill(0))

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    if(nums.length === 0) return (- Infinity)

    let max = 0
    let gMax = - Infinity

    for (let i = 1; i < nums.length; i++) {
         max = Math.max(nums[i], max + nums[i])
         gMax = Math.max(gMax, max)
     }
   return  gMax
};

//console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    if(prices.length < 2) return 0

    let max = 0
    let buy = prices[0]
    
    for (let i = 1; i < prices.length; i++) {
        max = Math.max(prices[i] - buy, max)
        buy  = Math.min(prices[i], buy)
        
    }

    return max
};


console.log(maxProfit([7,1,5,3,6,4]))