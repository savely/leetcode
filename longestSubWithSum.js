/*
#2389. Longest Subsequence With Limited Sum

You are given an integer array nums of length n, and an integer array queries of length m.

Return an array answer of length m where answer[i] is the maximum size of a subsequence that you can take from nums such that the sum of its elements is less than or equal to queries[i].

A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

 

Example 1:

Input: nums = [4,5,2,1], queries = [3,10,21]
Output: [2,3,4]
Explanation: We answer the queries as follows:
- The subsequence [2,1] has a sum less than or equal to 3. It can be proven that 2 is the maximum size of such a subsequence, so answer[0] = 2.
- The subsequence [4,5,1] has a sum less than or equal to 10. It can be proven that 3 is the maximum size of such a subsequence, so answer[1] = 3.
- The subsequence [4,5,2,1] has a sum less than or equal to 21. It can be proven that 4 is the maximum size of such a subsequence, so answer[2] = 4.

Example 2:

Input: nums = [2,3,4,5], queries = [1]
Output: [0]
Explanation: The empty subsequence is the only subsequence that has a sum less than or equal to 1, so answer[0] = 0.

 

Constraints:

    n == nums.length
    m == queries.length
    1 <= n, m <= 1000
    1 <= nums[i], queries[i] <= 106

*/

/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    
    nums.sort((a, b) => a - b);

    for(let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1];
    }

    const f = (top) => {

        let lo = 0, hi = nums.length - 1;

        while(hi >= lo) {

            const mid = Math.floor((hi + lo) / 2);

            if(nums[mid] === top || (nums[mid] < top && nums[mid + 1] > top)) return mid + 1;

            if(nums[mid] > top) {
                hi = mid - 1;
            } else {
                lo = mid + 1;
            }
        }
        
        return lo;
    };

    const ans = [];

    for(const top of queries) {

        if(top >= nums[nums.length - 1]) {
             ans.push(nums.length);
             continue;
        }

        if(top < nums[0]) {
            ans.push(0);
            continue;
        }

        ans.push(f(top));
    }

    return ans;
};
