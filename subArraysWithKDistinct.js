/*
#992. Subarrays with K Different Integers

Given an integer array nums and an integer k, return the number of good subarrays of nums.

A good array is an array where the number of different integers in that array is exactly k.

    For example, [1,2,3,1,2] has 3 different integers: 1, 2, and 3.

A subarray is a contiguous part of an array.

 

Example 1:

Input: nums = [1,2,1,2,3], k = 2
Output: 7
Explanation: Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2]

Example 2:

Input: nums = [1,2,1,3,4], k = 3
Output: 3
Explanation: Subarrays formed with exactly 3 different integers: [1,2,1,3], [2,1,3], [1,3,4].

 

Constraints:

    1 <= nums.length <= 2 * 104
    1 <= nums[i], k <= nums.length


*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {
    
    const f = (n) => {

        const map = {};

        let left = 0, right = 0, distinct = 0, count = 0;

        while(right < nums.length) {

            const num = nums[right];

            distinct += map[num] ? 0 : 1;
            map[num] = (map[num] || 0) + 1;

            while(distinct > n) {
                map[ nums[left] ]--;
                distinct -= map[ nums[left] ] === 0 ? 1 : 0;
                left++;
            }

            count += distinct <= n ? right - left + 1 : 0;
            right++;
        }

        return count;
    }

    return f(k) - f(k - 1);
};

let nums = [1,2,1,2,3], k = 2;
nums = [1,2,1,3,4], k = 3;

console.log(subarraysWithKDistinct(nums, k));