/*
#1248. Count Number of Nice Subarrays

Given an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it.

Return the number of nice sub-arrays.

 

Example 1:

Input: nums = [1,1,2,1,1], k = 3
Output: 2
Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].

Example 2:

Input: nums = [2,4,6], k = 1
Output: 0
Explanation: There are no odd numbers in the array.

Example 3:

Input: nums = [2,2,2,1,2,2,1,2,2,2], k = 2
Output: 16

 

Constraints:

    1 <= nums.length <= 50000
    1 <= nums[i] <= 10^5
    1 <= k <= nums.length

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {

    let i = 0, j = 0, count = 0, odds = 0, prevEvens = 0;

    while(j < nums.length) {

        odds += nums[j++] % 2;

        if(odds > k) {
            prevEvens = 0;
        }

        while(odds > k || nums[i] % 2 === 0) {
            odds -= nums[i] % 2;
            prevEvens += nums[i] % 2 === 0 ? 1 : 0;
            i++;
        }

        count += odds === k ? prevEvens + 1 : 0;
    }

    return count;
};
let nums = [1,1,2,1,1], k = 3;
nums = [2,2,2,1,2,2,1,2,2,2], k = 2;

console.log(numberOfSubarrays(nums, k));
