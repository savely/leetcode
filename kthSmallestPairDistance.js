/*
#719. Find K-th Smallest Pair Distance

The distance of a pair of integers a and b is defined as the absolute difference between a and b.

Given an integer array nums and an integer k, return the kth smallest distance among all the pairs nums[i] and nums[j] where 0 <= i < j < nums.length.

 

Example 1:

Input: nums = [1,3,1], k = 1
Output: 0
Explanation: Here are all the pairs:
(1,3) -> 2
(1,1) -> 0
(3,1) -> 2
Then the 1st smallest distance pair is (1,1), and its distance is 0.

Example 2:

Input: nums = [1,1,1], k = 2
Output: 0

Example 3:

Input: nums = [1,6,1], k = 3
Output: 5

 

Constraints:

    n == nums.length
    2 <= n <= 104
    0 <= nums[i] <= 106
    1 <= k <= n * (n - 1) / 2

*/

const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var smallestDistancePair = function(nums, k) {

    nums.sort((a, b) => a - b);

    const check = (delta) => {

        let start = 0, end = 0, count = 0;

        while(end < nums.length) {

            end = Math.max(end, start);
            
            while (end < nums.length -1) {
                if(nums[end + 1] - nums[start] > delta) break;
                end++;
            } 

            count += end - start;

            if(count >= k) return true;

            start++;
        }
        return false;
    };

    let lo = 0, hi = nums[nums.length - 1] - nums[0];

    while(hi >= lo) {

        const mid = (hi + lo) / 2 >> 0;

        if(check(mid)) {
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }

    return lo;
};
