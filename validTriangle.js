/*
611
Given an array consists of non-negative integers, your task is to count the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle. 
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    nums = nums.sort((a,b) => a-b)
    let res = 0
    
    const sides = function(a, b, c) {
        if(a + b <= c) return false
        if(a + c <= b) return false
        if(b + c <= a) return false
        
        return true
    }
    
    for(let a = 0; a < nums.length-2; a++) {
        for(let b = a+1; b < nums.length-1; b++) {
           for(let c = b+1; c < nums.length; c++) {
                if(!sides(nums[a],nums[b],nums[c])) break
                res++
            }
        }
    }
    return res
};

console.log(triangleNumber([2,2,3,4]))