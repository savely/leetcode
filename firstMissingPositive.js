/*
# 41

Given an unsorted integer array, find the smallest missing positive integer.

Example 1:

Input: [1,2,0]
Output: 3
Example 2:

Input: [3,4,-1,1]
Output: 2
Example 3:

Input: [7,8,9,11,12]
Output: 1
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {

    if(nums.length === 0) return 1

    for (let i = 0; i < nums.length; i++) {
        place = nums[i]
        if(place === i+1) continue

        while(place > 0 && place < nums.length) {
            const t = nums[place-1]
            if(t === place) break
            nums[place-1] = place
            nums[i] = t
            place  = t
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== i+1) return i+1
    }
   return nums.length+1
};

//console.log(firstMissingPositive([1,2,0]))
//console.log(firstMissingPositive([3,4,-1,1]))
console.log(firstMissingPositive([7,8,9,11,12]))
console.log(firstMissingPositive([1,1,1,1,1]))