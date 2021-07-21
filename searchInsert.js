/*
 # 540 
 Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 */

var searchInsert = function(nums, target) {
    
    if (nums.length === 0) return 0
    if(nums.length === 1) return (nums[0] >= target ? 0 : 1)
    
    let lo = 0, hi = nums.length - 1
    
    if(nums[lo] >= target) return lo
    if(nums[hi] < target ) return hi+1
   
    while(hi > lo) {
       const mid = Math.floor((hi+lo) / 2)
       
       if(nums[mid] === target) return mid
        
        if(nums[mid-1] < target && target < nums[mid]) return mid
        
        if(nums[mid-1] < target && nums[mid] < target) {
            lo = mid+1
        } else {
            hi = mid
        }
    }

     if(hi === lo) {
         return target <= nums[lo] ? lo : lo + 1
     }
};

console.log(searchInsert([1,2],3))