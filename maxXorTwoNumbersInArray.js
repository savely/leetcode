/*
#421. Maximum XOR of Two Numbers in an Array

Given an integer array nums, return the maximum result of nums[i] XOR nums[j], where 0 <= i <= j < n.

 

Example 1:

Input: nums = [3,10,5,25,2,8]
Output: 28
Explanation: The maximum result is 5 XOR 25 = 28.
Example 2:

Input: nums = [14,70,53,83,49,91,36,80,92,51,66,70]
Output: 127
 

Constraints:

1 <= nums.length <= 2 * 105
0 <= nums[i] <= 231 - 1

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaximumXOR = function(nums) {

    let ans = 0, mask = 0; prefixes = new Set();
    
    for(let i = 30; i >= 0; i--) {

        mask |= 1 << i; 

        prefixes.clear();

        for(const n of nums) prefixes.add(n & mask);

        cand = ans | (1 << i);

        for(const p of prefixes) {
            if(prefixes.has(cand ^ p)) {
                ans = cand;
                break;
            }
        }
    }

    return ans;
};
