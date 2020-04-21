/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    
    if(nums.length < 2) return nums.length-1
    
    let max = -1, idx = -1
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] >= 2 * max) {
          max = nums[i] 
          idx = i  
        } else if ( nums[i] === max || 2 * nums[i] <= max) {
          continue
        } else {
          max = Math.max(max, nums[i])  
          idx = -1
        }
    }
    return idx
};


console.log(dominantIndex([0,0,32,4])) 
