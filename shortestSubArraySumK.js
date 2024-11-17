/*
#862. Shortest Subarray with Sum at Least K

Given an integer array nums and an integer k, return the length of the shortest non-empty subarray of nums with a sum of at least k. If there is no such subarray, return -1.

A subarray is a contiguous part of an array.

 

Example 1:

Input: nums = [1], k = 1
Output: 1

Example 2:

Input: nums = [1,2], k = 4
Output: -1

Example 3:

Input: nums = [2,-1,2], k = 3
Output: 3

 

Constraints:

    1 <= nums.length <= 105
    -105 <= nums[i] <= 105
    1 <= k <= 109

*/

const { PriorityQueue } = require('@datastructures-js/priority-queue');

var shortestSubarray = function(nums, k) {

    const queue = new PriorityQueue({ compare : ([sum1, idx1], [sum2, idx2]) => sum1 - sum2 || idx2 - idx1});

    let minLength = Infinity, sum = 0;

    for(let i = 0; i < nums.length; i++) {

        sum += nums[i];

        if(sum >= k) minLength = Math.min(minLength, i + 1);

        while(queue.size() && sum - queue.front()[0] >= k) {

            const [_, idx] = queue.dequeue();
            minLength = Math.min(minLength, i - idx);
        }

        queue.enqueue([sum, i]);
    }

    return isFinite(minLength) ? minLength : -1;
};