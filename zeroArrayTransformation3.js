/*
#3362. Zero Array Transformation III

You are given an integer array nums of length n and a 2D array queries where queries[i] = [li, ri].

Each queries[i] represents the following action on nums:

    Decrement the value at each index in the range [li, ri] in nums by at most 1.
    The amount by which the value is decremented can be chosen independently for each index.

A Zero Array is an array with all its elements equal to 0.

Return the maximum number of elements that can be removed from queries, such that nums can still be converted to a zero array using the remaining queries. If it is not possible to convert nums to a zero array, return -1.

 

Example 1:

Input: nums = [2,0,2], queries = [[0,2],[0,2],[1,1]]

Output: 1

Explanation:

After removing queries[2], nums can still be converted to a zero array.

    Using queries[0], decrement nums[0] and nums[2] by 1 and nums[1] by 0.
    Using queries[1], decrement nums[0] and nums[2] by 1 and nums[1] by 0.

Example 2:

Input: nums = [1,1,1,1], queries = [[1,3],[0,2],[1,3],[1,2]]

Output: 2

Explanation:

We can remove queries[2] and queries[3].

Example 3:

Input: nums = [1,2,3,4], queries = [[0,3]]

Output: -1

Explanation:

nums cannot be converted to a zero array even after using all the queries.

 

Constraints:

    1 <= nums.length <= 105
    0 <= nums[i] <= 105
    1 <= queries.length <= 105
    queries[i].length == 2
    0 <= li <= ri < nums.length


*/
const { MaxPriorityQueue}  = require('@datastructures-js/priority-queue');
const _ = require('lodash');


/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var maxRemoval = function(nums, queries) {
    // Group queries by start time using lodash _.groupBy or custom implementation
    const g = _.groupBy(queries, x => x[0]);

    // Max priority queue for query end times
    const h = new MaxPriorityQueue();

    // Difference array for workload
    const d = new Int32Array(nums.length + 1);

    let o = 0; // assigned workload count
    let j = 0; // unused here but kept from original

    // Recursive function to assign queries until workload meets requirement
    const assign = (x, i) => {
        if (o >= x) return true; // done for current time

        if (h.isEmpty() || h.front() < i) return false; // no valid queries

        o++;
        d[h.front() + 1]--;
        h.pop();

        return assign(x, i);
    };

    // Iterate over each time slot in nums
    for (let i = 0; i < nums.length; i++) {
        o += d[i]; // update current workload from difference array

        // Push all queries starting at i into max-heap
        if (g[i]) {
            g[i].forEach(y => h.enqueue(y[1]));
        }

        // Assign queries greedily to satisfy nums[i]
        if (!assign(nums[i], i)) {
            return -1; // impossible to fulfill
        }
    }

    // Return the number of unused queries in the heap
    return h.size();
};

let nums = [1,2,3,4], queries = [[0,3]];
nums = [1,1,1,1], queries = [[1,3],[0,2],[1,3],[1,2]];
nums = [2,0,2], queries = [[0,2],[0,2],[1,1]]

console.log(maxRemoval(nums, queries)); // -1