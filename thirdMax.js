/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    
    if(nums.length < 3) {
      return Math.max(...nums)  
    }

    let max = - Infinity, mid = max, min = max
    
    for (let i = 0; i < nums.length; i++) {
        const el = nums[i]

        if(el === max || el === mid || el === min) continue

        if(el > max) {
            min = mid
            mid = max
            max = el
        } else if(el > mid) {
            min = mid
            mid = el
        } else if (el > min) {
            min = el
        }
    }
    return min === -Infinity ? max : min
};


console.log(thirdMax([1,1,2]))