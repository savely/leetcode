/*
#1438. Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit

Given an array of integers nums and an integer limit, return the size of the longest non-empty subarray such that the absolute difference between any two elements of this subarray is less than or equal to limit.

 

Example 1:

Input: nums = [8,2,4,7], limit = 4
Output: 2 
Explanation: All subarrays are: 
[8] with maximum absolute diff |8-8| = 0 <= 4.
[8,2] with maximum absolute diff |8-2| = 6 > 4. 
[8,2,4] with maximum absolute diff |8-2| = 6 > 4.
[8,2,4,7] with maximum absolute diff |8-2| = 6 > 4.
[2] with maximum absolute diff |2-2| = 0 <= 4.
[2,4] with maximum absolute diff |2-4| = 2 <= 4.
[2,4,7] with maximum absolute diff |2-7| = 5 > 4.
[4] with maximum absolute diff |4-4| = 0 <= 4.
[4,7] with maximum absolute diff |4-7| = 3 <= 4.
[7] with maximum absolute diff |7-7| = 0 <= 4. 
Therefore, the size of the longest subarray is 2.
Example 2:

Input: nums = [10,1,2,4,7,2], limit = 5
Output: 4 
Explanation: The subarray [2,4,7,2] is the longest since the maximum absolute diff is |2-7| = 5 <= 5.
Example 3:

Input: nums = [4,2,2,2,4,4,2,2], limit = 0
Output: 3
 

Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109
0 <= limit <= 109
*/

const { PriorityQueue }  = require('@datastructures-js/priority-queue');

/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
 var longestSubarray = function(nums, limit) {

    const minQueue =  new PriorityQueue({ compare : (i1, i2) => nums[i1] - nums[i2]});
    const maxQueue =  new PriorityQueue({ compare : (i1, i2) => nums[i2] - nums[i1]});

    let i = 0, j = 0, maxLen = 0;
    
    while(j < nums.length) {

        minQueue.enqueue(j);
        maxQueue.enqueue(j);

        while(nums[maxQueue.front()] - nums[minQueue.front()] > limit) {
            i++;
            while(maxQueue.front() < i) maxQueue.dequeue();
            while(minQueue.front() < i) minQueue.dequeue();        
        }

        maxLen = Math.max(maxLen, j - i + 1);
        j++;
    }

    return maxLen;
};

let nums = [8,2,4,7], limit = 4;
nums = [10,1,2,4,7,2], limit = 5;
nums = [4,2,2,2,4,4,2,2], limit = 0;
nums = [71,45,88,69,63,99,69,31,9,93,6,11,18,22,22,69,28,35,98,43,
        77,65,33,48,44,44,15,38,31,78,100,92,63,18,75,71,99,14,42,
        6,53,10,49,19,17,44,15,79,76,49,10,74,71,29,73,11], limit = 74;

console.log(longestSubarray(nums, limit));