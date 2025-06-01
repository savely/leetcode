/*
# Find the Maximum Length of a Good Subsequence I

You are given an integer array nums and a non-negative integer k. 
A sequence of integers seq is called good if there are at most k indices i 
in the range [0, seq.length - 2] such that seq[i] != seq[i + 1].

Return the maximum possible length of a good
subsequence
of nums.

 

Example 1:

Input: nums = [1,2,1,1,3], k = 2

Output: 4

Explanation:

The maximum length subsequence is [1,2,1,1,3].1,2,1,1

Example 2:

Input: nums = [1,2,3,4,5,1], k = 0

Output: 2

Explanation:

The maximum length subsequence is [1,2,3,4,5,1].

 

Constraints:

    1 <= nums.length <= 500
    1 <= nums[i] <= 109
    0 <= k <= min(nums.length, 25)

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumLength = function(nums, k) {

    const f = (indexes) => {

        if(indexes.length < 2) return 0;

        let gap = 0;

        for(let i = 1; i < indexes.length; i++) {

            gap += indexes[i] - indexes[i - 1] - 1;
        }

        return indexes.length + Math.min(k, gap);
    };

    const map = {};

    for(let i = 0; i < nums.length; i++) {

        const num = nums[i];
        map[num] = (map[num] || []);
        map[num].push(i);
    }

    let max = 0; 

    for(const key in map) {

        max = Math.max(max, f(map[key]));
    }

    return max;
    
};

let nums = [1,2,1,1,3], k = 2; //4
//nums = [1,2,3,4,5,1], k = 0; //2
//nums = [1,2,1,1,3,2,3,1,1,2,2,3,1], k = 2 //8;
nums = [1,2,1,1,3,2,3,1,1,2,2,3,1,2,3,3,3,1,5,2,1,5,2,3,1,1,1,2,5,3,5], k = 3; //16

console.log(maximumLength(nums, k));