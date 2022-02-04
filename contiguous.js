/*
#525. Contiguous Array

Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.

 

Example 1:

Input: nums = [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
Example 2:

Input: nums = [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
 

Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxLength = function(nums) {

  const map = {0 : -1};

  let max = 0, balance = 0;


  for(let i = 0; i < nums.length; i++) {

    balance += nums[i] ? 1 : -1;

    if(map[balance] === undefined) {
      map[balance] = i;
      continue;
    }

    max = Math.max(max, i - map[balance]);
  }

  return max;
};
