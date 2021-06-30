/*
#1712. Ways to Split Array Into Three Subarrays

A split of an integer array is good if:

The array is split into three non-empty contiguous subarrays - named left, mid, right respectively from left to right.
The sum of the elements in left is less than or equal to the sum of the elements in mid, and the sum of the elements in mid 
is less than or equal to the sum of the elements in right.

Given nums, an array of non-negative integers, return the number of good ways to split nums. 
As the number may be too large, return it modulo 109 + 7.

Example 1:

Input: nums = [1,1,1]
Output: 1
Explanation: The only good way to split nums is [1] [1] [1].
Example 2:

Input: nums = [1,2,2,2,5,0]
Output: 3
Explanation: There are three good ways of splitting nums:
[1] [2] [2,2,5,0]
[1] [2,2] [2,5,0]
[1,2] [2,2] [5,0]
Example 3:

Input: nums = [3,2,1]
Output: 0
Explanation: There is no good way to split nums.
 

Constraints:

3 <= nums.length <= 105
0 <= nums[i] <= 104

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var waysToSplit = function(nums) {

    const modulo = 10 ** 9 + 7, n = nums.length - 1;

    const sums = new Array(nums.length+1).fill(0)

   for(let i = 1; i < sums.length; i++) {
       sums[i] = nums[i-1] + sums[i - 1];
   }  

   const rg = (start, end) => {
       return sums[end + 1] - sums[start];
   };

   const total = rg(0, n);   

    let goodSplits = 0 ,start = 1, end = start;

    for(let left = 0; left < nums.length - 2; left++) {

        const leftSum = rg(0, left);

        if(leftSum * 3 > total) break;

        start = Math.max(start, left + 1);

        while(start < n - 1 && rg(left+1, start) < leftSum) {
            start++;
        }

        while(end < n && rg(left + 1, end) <=  rg(end+1, n)) {
            end++;
        }
       goodSplits += end - start;
    }
    return goodSplits % modulo;
};

let nums = [1,2,2,2,5,0];
//nums = [3,2,1];

nums = [8892,2631,7212,1188,6580,1690,5950,
        7425,8787,4361,9849,4063,9496,9140,
        9986,1058,2734,6961,8855,2567,7683,
        4770,40,850,72,2285,9328,6794,8632,
        9163,3928,6962,6545,6920,926,8885,
        1570,4454,6876,7447,8264,3123,2980,
        7276,470,8736,3153,3924,3129,7136,
        1739,1354,661,1309,6231,9890,58,
        4623,3555,3100,3437];
      
//nums = [1,1,1];

console.log(waysToSplit(nums));