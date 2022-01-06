/*
#410. Split Array Largest Sum

Given an array nums which consists of non-negative integers and an integer m, you can split the array into m non-empty continuous subarrays.

Write an algorithm to minimize the largest sum among these m subarrays.

 

Example 1:

Input: nums = [7,2,5,10,8], m = 2
Output: 18
Explanation:
There are four ways to split nums into two subarrays.
The best way is to split it into [7,2,5] and [10,8],
where the largest sum among the two subarrays is only 18.
Example 2:

Input: nums = [1,2,3,4,5], m = 2
Output: 9
Example 3:

Input: nums = [1,4,4], m = 3
Output: 4
 

Constraints:

1 <= nums.length <= 1000
0 <= nums[i] <= 106
1 <= m <= min(50, nums.length)

*/

/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
 var splitArray = function(nums, m) {

    let min = 0, max = 0;
    
    for(const n of nums) {
        min = Math.max(min, n);
        max += n;
    }

    if(m === nums.length) return min;

    if(m === 1) return max;

    const countSplits = (maxSum) => {

        let splits = 1, sum = 0;

        for(const n of nums) {

            if(sum + n > maxSum) {
                sum = n;
                splits++;
                continue;
            }

            sum += n;
        }

        return splits;
    };

    let lo = min, hi = max, sum = 0;
    
    while(hi >= lo) {

        const mid = (hi + lo) >> 1, splits = countSplits(mid);

        if(splits <= m) {
            sum = mid;
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
 
    }

    return sum;
};
