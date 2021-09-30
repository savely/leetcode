/*
#1655. Distribute Repeating Integers

You are given an array of n integers, nums, where there are at most 50 unique values in the array. 
You are also given an array of m customer order quantities, quantity, where quantity[i] is the amount of integers the ith customer ordered. 
Determine if it is possible to distribute nums such that:

The ith customer gets exactly quantity[i] integers,
The integers the ith customer gets are all equal, and
Every customer is satisfied.
Return true if it is possible to distribute nums according to the above conditions.

 

Example 1:

Input: nums = [1,2,3,4], quantity = [2]
Output: false
Explanation: The 0th customer cannot be given two different integers.
Example 2:

Input: nums = [1,2,3,3], quantity = [2]
Output: true
Explanation: The 0th customer is given [3,3]. The integers [1,2] are not used.
Example 3:

Input: nums = [1,1,2,2], quantity = [2,2]
Output: true
Explanation: The 0th customer is given [1,1], and the 1st customer is given [2,2].
Example 4:

Input: nums = [1,1,2,3], quantity = [2,2]
Output: false
Explanation: Although the 0th customer could be given [1,1], the 1st customer cannot be satisfied.
Example 5:

Input: nums = [1,1,1,1,1], quantity = [2,3]
Output: true
Explanation: The 0th customer is given [1,1], and the 1st customer is given [1,1,1].
 

Constraints:

n == nums.length
1 <= n <= 105
1 <= nums[i] <= 1000
m == quantity.length
1 <= m <= 10
1 <= quantity[i] <= 105
There are at most 50 unique values in nums.
*/


/**
 * @param {number[]} nums
 * @param {number[]} quantity
 * @return {boolean}
 */
 var canDistribute = function(nums, quantity) {

    const counts = Object.values(nums.reduce((acc, n) => {
        acc[n] = (acc[n] || 0) + 1;
        return acc;
    }, {}));

    counts.sort((a, b) => b - a)
    quantity.sort((a, b) => b - a);

    if(quantity[0] > counts[0]) return false;

    const f = (idx, counts) => {

        if(idx >= quantity.length) return false;

        const qt = quantity[idx];

        for(let i = 0; i < counts.length; i++) {

            if(counts[i] < qt) continue;

            if(idx === quantity.length - 1) return true;

            cnts = [...counts];

            cnts[i] -= qt;

            if(f(idx + 1, cnts)) return true;
        }

        return false;
    };

    return f(0, counts);
};

let nums = [1,2,3,4], quantity = [2];
nums = [1,2,2,2,3], quantity = [2,2];
nums = [1,1,1,1,1], quantity = [2,3];
nums = [1,1,1,1,2,2,2], quantity = [3,2,2];

console.log(canDistribute(nums, quantity));