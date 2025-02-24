/*
#3462. Maximum Sum With at Most K Elements

You are given a 2D integer matrix grid of size n x m, an integer array limits of length n, and an integer k. The task is to find the maximum sum of at most k elements from the matrix grid such that:

    The number of elements taken from the ith row of grid does not exceed limits[i].

Return the maximum sum.

 

Example 1:

Input: grid = [[1,2],[3,4]], limits = [1,2], k = 2

Output: 7

Explanation:

    From the second row, we can take at most 2 elements. The elements taken are 4 and 3.
    The maximum possible sum of at most 2 selected elements is 4 + 3 = 7.

Example 2:

Input: grid = [[5,3,7],[8,2,6]], limits = [2,2], k = 3

Output: 21

Explanation:

    From the first row, we can take at most 2 elements. The element taken is 7.
    From the second row, we can take at most 2 elements. The elements taken are 8 and 6.
    The maximum possible sum of at most 3 selected elements is 7 + 8 + 6 = 21.

 

Constraints:

    n == grid.length == limits.length
    m == grid[i].length
    1 <= n, m <= 500
    0 <= grid[i][j] <= 105
    0 <= limits[i] <= m
    0 <= k <= min(n * m, sum(limits))


*/

const { PriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * @param {number[][]} grid
 * @param {number[]} limits
 * @param {number} k
 * @return {number}
 */
var maxSum = function(grid, limits, k) {

    const totalQueue = new PriorityQueue({compare : (a, b) => a - b}), n = grid.length, m = grid[0].length;

    const rowQueue = new PriorityQueue({compare : (a, b) => a - b}); 

    let sum = 0;

    for(let i = 0; i < n; i++) {

        const lim = limits[i];

        for(let j = 0; j < m; j++) {

            if(rowQueue.size() === lim && grid[i][j] > rowQueue.front()) {
                rowQueue.dequeue();
            }

            if(rowQueue.size() < lim) {
                rowQueue.enqueue(grid[i][j]);
            }
        }

        while(rowQueue.size()) {

            const num = rowQueue.dequeue();

            if(totalQueue.size() === k && num > totalQueue.front()) {
                sum -= totalQueue.dequeue();
            }

            if(totalQueue.size() < k) {
                totalQueue.enqueue(num);
                sum += num;
            }
        }

    }

    return sum;
};
