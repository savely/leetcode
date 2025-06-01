/*
#3224. Minimum Array Changes to Make Differences Equal


You are given an integer array nums of size n where n is even, and an integer k.

You can perform some changes on the array, where in one change you can replace any element in the array with any integer in the range from 0 to k.

You need to perform some changes (possibly none) such that the final array satisfies the following condition:

    There exists an integer X such that abs(a[i] - a[n - i - 1]) = X for all (0 <= i < n).

Return the minimum number of changes required to satisfy the above condition.

 

Example 1:

Input: nums = [1,0,1,2,4,3], k = 4

Output: 2

Explanation:
We can perform the following changes:

    Replace nums[1] by 2. The resulting array is nums = [1,2,1,2,4,3].
    Replace nums[3] by 3. The resulting array is nums = [1,2,1,3,4,3].

The integer X will be 2.

Example 2:

Input: nums = [0,1,2,3,3,6,5,4], k = 6

Output: 2

Explanation:
We can perform the following operations:

    Replace nums[3] by 0. The resulting array is nums = [0,1,2,0,3,6,5,4].
    Replace nums[4] by 4. The resulting array is nums = [0,1,2,0,4,6,5,4].

The integer X will be 4.

 

Constraints:

    2 <= n == nums.length <= 105
    n is even.
    0 <= nums[i] <= k <= 105


*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minChanges = function(nums, k) {

    const diffs = {};
    
    let i = 0, j = nums.length - 1, maxCount = 0, targetDiff = -1;

    while(j > i) {
        const diff = Math.abs(nums[j--] - nums[i++]);
        diffs[diff] = (diffs[diff] || 0) + 1;
        if(diffs[diff] > maxCount 
            || (diffs[diff] === maxCount && diff < targetDiff)) {
            maxCount = diffs[diff];
            targetDiff = diff;
        }
    }

    let changes = (nums.length / 2) - maxCount;

    i = 0; j = j = nums.length - 1;

    while(j > i) {
        changes += nums[i++] < targetDiff && nums[j--] < targetDiff ? 1 : 0;
    }
    
    return changes;
};

let nums = [0,1,2,3,3,6,5,4], k = 6;
nums = [1,0,1,2,4,3], k = 4;
nums = [0,0,1,3,3,2,5,4], k = 6;
nums = [1,0,1,2,4,3,0,0,0,0,0,4], k = 4; //4

console.log(minChanges(nums, k));