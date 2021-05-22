
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findLengthOfLCIS = function(nums) {
    
    if(nums.length === 1) return 1
    
    let el = nums[0], curr = 1, max = 1
    
    for(let i = 1; i < nums.length; i++) {
        
        if(nums[i] > el) {
            curr++
        } else {
            max = Math.max(max, curr)
            curr = 1
        }
        
        el = nums[i] 
    }
    
    return Math.max(max, curr)
};

let arr = [1,3,5,4,7];
arr = [2,2,2,2,2];


console.log(findLengthOfLCIS(arr))