/*
#1425. Constrained Subsequence Sum

Given an integer array nums and an integer k, return the maximum sum of a non-empty subsequence of that array such that for every two consecutive integers in the subsequence, nums[i] and nums[j], where i < j, the condition j - i <= k is satisfied.

A subsequence of an array is obtained by deleting some number of elements (can be zero) from the array, leaving the remaining elements in their original order.

 

Example 1:

Input: nums = [10,2,-10,5,20], k = 2
Output: 37
Explanation: The subsequence is [10, 2, 5, 20].

Example 2:

Input: nums = [-1,-2,-3], k = 1
Output: -1
Explanation: The subsequence must be non-empty, so we choose the largest number.

Example 3:

Input: nums = [10,-2,-10,-5,20], k = 2
Output: 23
Explanation: The subsequence is [10, -2, -5, 20].

 

Constraints:

    1 <= k <= nums.length <= 105
    -104 <= nums[i] <= 104

*/
const { Deque } = require('@datastructures-js/deque');

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var constrainedSubsetSum = function(nums, k) {
    
    const queue = new PriorityQueue({compare : ([i, sum1], [j, sum2]) => sum2 - sum1});

    queue.enqueue([0, nums[0]]);

    let max = nums[0];

    for(let i = 1; i < nums.length; i++) {

        while(queue.size() && queue.front()[0] < i - k) queue.dequeue();

        const localMax = queue.size() ? queue.front()[1] : 0, dp = Math.max(nums[i], nums[i] + localMax);

        max = Math.max(max, dp);

        queue.enqueue([i, dp]);
    }

    return max;
};

let nums = [10,2,-10,5,20], k = 2;
nums = [-1,-2,-3], k = 1;
nums = [10,-2,-10,-5,20], k = 2;

console.log(constrainedSubsetSum(nums, k));