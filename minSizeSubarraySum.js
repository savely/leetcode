/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    
    let sum = 0, min = 0, hi = 0, lo = 0

    while (hi <= nums.length) {
        if(sum >= s) {
            if(min === 0) {
                min = hi - lo 
             } else {
                min = Math.min(min, hi - lo)
             }
             sum -= nums[lo++]            
        } else {
           sum += nums[hi++] 
        }
    }
    return min
};

console.log(minSubArrayLen(7,[2,3,1,2,4,3]))