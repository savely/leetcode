/*
#80. Remove Duplicates from Sorted Array II

Given a sorted array nums, remove the duplicates in-place such that duplicates appeared at most twice and return the new length.

Do not allocate extra space for another array; you must do this by modifying the input array in-place with O(1) extra memory.
*/

var removeDuplicates = function(nums) {
    
    let start = 0, end = 1
    
    while(end < nums.length) {git 
        
        if(nums[start] !== nums[end]) {
            start = end++
            continue
        }
        
        if(end - start > 1) {
            nums.splice(start+1, end-start-1)
            continue
        }
        
        end++
    }
    
    return nums.length
};