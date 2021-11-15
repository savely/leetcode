/*
#368. Largest Divisible Subset

Given a set of distinct positive integers nums, return the largest subset answer such that every pair (answer[i], answer[j]) of elements in this subset satisfies:

    answer[i] % answer[j] == 0, or
    answer[j] % answer[i] == 0

If there are multiple solutions, return any of them.

 

Example 1:

Input: nums = [1,2,3]
Output: [1,2]
Explanation: [1,3] is also accepted.

Example 2:

Input: nums = [1,2,4,8]
Output: [1,2,4,8]

 

Constraints:

    1 <= nums.length <= 1000
    1 <= nums[i] <= 2 * 109
    All the integers in nums are unique.

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var largestDivisibleSubset = function (nums) {
    if (nums.length < 2) {
      return nums;
    }
    nums.sort((o1, o2) => o1 - o2);
    let arr = Array(nums.length);
    arr[arr.length - 1] = [nums[nums.length - 1]];
    let max = [];
    for (let i = arr.length - 2; i >= 0; i--) {
      let c = [nums[i]];
      for (let j = i + 1; j < arr.length; j++) {
        if (nums[j] % nums[i] == 0 && 1 + arr[j].length > c.length) {
          c = [nums[i]].concat(arr[j]);
        }
      }
      arr[i] = c;
      if (max.length < c.length) {
        max = c;
      }
    }
    return max;
};