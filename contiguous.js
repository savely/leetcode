/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {

    const sums = {}
    let sum = 0
    let max = 0
 
    for(let i = 0; i < nums.length; i++) {
        
     sum += nums[i] === 1 ? 1 : -1
        
     if(sum === 0) {
       max = i + 1
     } else if (sums[sum] === undefined){
       sums[sum] = i+1                                                                                                                 } else {
       max = Math.max(max, i - sums[sum] + 1)
     }                                                                                                                                                  
    }
    return max
 };

 console.log(findMaxLength([0,0,1]))