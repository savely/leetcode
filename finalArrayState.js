/*
#3266. Final Array State After K Multiplication Operations II

You are given an integer array nums, an integer k, and an integer multiplier.

You need to perform k operations on nums. In each operation:

    Find the minimum value x in nums. If there are multiple occurrences of the minimum value, select the one that appears first.
    Replace the selected minimum value x with x * multiplier.

After the k operations, apply modulo 109 + 7 to every value in nums.

Return an integer array denoting the final state of nums after performing all k operations and then applying the modulo.

 

Example 1:

Input: nums = [2,1,3,5,6], k = 5, multiplier = 2

Output: [8,4,6,5,6]

Explanation:
Operation	Result
After operation 1	[2, 2, 3, 5, 6]
After operation 2	[4, 2, 3, 5, 6]
After operation 3	[4, 4, 3, 5, 6]
After operation 4	[4, 4, 6, 5, 6]
After operation 5	[8, 4, 6, 5, 6]
After applying modulo	[8, 4, 6, 5, 6]

Example 2:

Input: nums = [100000,2000], k = 2, multiplier = 1000000

Output: [999999307,999999993]

Explanation:
Operation	Result
After operation 1	[100000, 2000000000]
After operation 2	[100000000000, 2000000000]
After applying modulo	[999999307, 999999993]

 

Constraints:

    1 <= nums.length <= 104
    1 <= nums[i] <= 109
    1 <= k <= 109
    1 <= multiplier <= 106

*/

const { PriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
    
    const mod = 10 ** 9 + 7;

    let min = Infinity, max = -Infinity;

    for(const num of nums) {
        min = Math.min(min, num);
        max = Math.max(max, num);
    }

    const times = Math.floor(max / (min * multiplier));

    if(times > 0) {
        k %= times;
        nums = nums.map(num => (num * multiplier * times) % mod);
    }

    if(k === 0) return nums;

    const queue = new PriorityQueue({compare : (i1, i2) => nums[i1] - nums[i2] || i1 - i2});

    for(let i = 0; i < nums.length; i++) {
        queue.enqueue(i);
    }

    while(k-- > 0) {

        const idx = queue.dequeue();
        nums[idx] = (nums[idx]  * multiplier) % mod;
        queue.enqueue(idx);
    }

    return nums;
};

let nums = [2,1,3,5,6], k = 5, multiplier = 2;

console.log(getFinalState(nums, k, multiplier));