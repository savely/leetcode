/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findMaxAverage = function(nums, k) {
    
    let sum = 0, maxAvg = -Infinity
    
    for(let i = 0; i < nums.length; i++) {
        
        sum += nums[i]

        if(i < k - 1) continue;

        if(i > k - 1) {
            sum -= nums[i - k];
        }
        
        maxAvg = Math.max(maxAvg, sum / k)

    }
    
    return maxAvg
};

nums = [1,12,-5,-6,50,3], k = 4;

console.log(findMaxAverage(nums, k))