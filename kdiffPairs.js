/*
#532. K-diff Pairs in an Array

Given an array of integers nums and an integer k, return the number of unique k-diff pairs in the array.

A k-diff pair is an integer pair (nums[i], nums[j]), where the following are true:

0 <= i < j < nums.length
|nums[i] - nums[j]| == k
Notice that |val| denotes the absolute value of val.

 

Example 1:

Input: nums = [3,1,4,1,5], k = 2
Output: 2
Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
Although we have two 1s in the input, we should only return the number of unique pairs.
Example 2:

Input: nums = [1,2,3,4,5], k = 1
Output: 4
Explanation: There are four 1-diff pairs in the array, (1, 2), (2, 3), (3, 4) and (4, 5).
Example 3:

Input: nums = [1,3,1,5,4], k = 0
Output: 1
Explanation: There is one 0-diff pair in the array, (1, 1).
 

Constraints:

1 <= nums.length <= 104
-107 <= nums[i] <= 107
0 <= k <= 107

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  
    if(nums.length < 2) return 0;

    nums.sort((a, b) => a - b);

    let pairs = 0;

    if(k === 0) {

        let i = 0;

        while(i < nums.length) {

            if(nums[i] === nums[i + 1]) pairs++;

            while(nums[i] === nums[i + 1]) i++;

            i++;
        }

        return pairs;
    }
    
    let start = 0, end = 1;

    while(end < nums.length) {

         if(nums[end] - nums[start] <= k) {

            pairs += end > start && nums[end] - nums[start] === k ? 1 : 0;
            while(nums[end] === nums[end + 1]) end++;
            end++;
            continue;
        }

        while(start < end && nums[start] === nums[start + 1]) start++;

        start += start === end ? 0 : 1;
    }

    return pairs;
};


let nums = [-3,-1,4,1,5], k = 2;
//nums = [1,2,3,4,5], k = 1;
//nums = [1,3,1,5,4], k = 0;
nums = [1,1,1,2,2], k = 0;//2

console.log(findPairs(nums,k));