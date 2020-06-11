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

    const places = new Array(nums.length).fill(false)

    for(let i = 0; i < nums.length; i++) {
        const place = nums[i]
        if(place < 1 || place > nums.length) continue

        places[place-1] = true
    }

    for(let i = 0; i < places.length; i++) {
        if(!places[i]) return i+1
    }
   return places.length+1
};

console.log(firstMissingPositive([1,2,0]))