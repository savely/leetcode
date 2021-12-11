/*
#2099. Find Subsequence of Length K With the Largest Sum

You are given an integer array nums and an integer k. You want to find a subsequence of nums of length k that has the largest sum.

Return any such subsequence as an integer array of length k.

A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

 

Example 1:

Input: nums = [2,1,3,3], k = 2
Output: [3,3]
Explanation:
The subsequence has the largest sum of 3 + 3 = 6.
Example 2:

Input: nums = [-1,-2,3,4], k = 3
Output: [-1,3,4]
Explanation: 
The subsequence has the largest sum of -1 + 3 + 4 = 6.
Example 3:

Input: nums = [3,4,3,3], k = 2
Output: [3,4]
Explanation:
The subsequence has the largest sum of 3 + 4 = 7. 
Another possible subsequence is [4, 3].
 

Constraints:

1 <= nums.length <= 1000
-105 <= nums[i] <= 105
1 <= k <= nums.length

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

 const { MinPriorityQueue }  = require('@datastructures-js/priority-queue');

 var maxSubsequence = function(nums, k) {

    if(k === nums.length) return nums;

    if(k === 1) return Math.max(...nums);
    
    const queue = new MinPriorityQueue();

    for(let i = 0; i < nums.length; i++) {

        const num = nums[i];

        if(queue.size() < k) {
            queue.enqueue([num, i], num);
            continue;
        }

        const {element} = queue.front();

        const [n ,j] = element;

        if(num > n) {
            queue.dequeue();
            queue.enqueue([num, i], num);
        }
    }

    const arr = queue.toArray();

    arr.sort((el1, el2) => el1['element'][1] - el2['element'][1]);

    return arr.map((el) => el['element'][0]);
} 

let nums = [2,1,3,3], k = 3;
//nums = [3,4,3,3], k = 2;
nums = [-1,-2,3,4], k = 3;

console.table(maxSubsequence(nums, k));