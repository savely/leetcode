/*
#1293. Shortest Path in a Grid with Obstacles Elimination

You are given an m x n integer matrix grid where each cell is either 0 (empty) or 1 (obstacle). 
You can move up, down, left, or right from and to an empty cell in one step.

Return the minimum number of steps to walk from the upper left corner (0, 0) to the lower right corner (m - 1, n - 1) 
given that you can eliminate at most k obstacles. If it is not possible to find such walk return -1.

 

Example 1:

Input: 
grid = 
[[0,0,0],
 [1,1,0],
 [0,0,0],
 [0,1,1],
 [0,0,0]], 
k = 1
Output: 6
Explanation: 
The shortest path without eliminating any obstacle is 10. 
The shortest path with one obstacle elimination at position (3,2) is 6. Such path is (0,0) -> (0,1) -> (0,2) -> (1,2) -> (2,2) -> (3,2) -> (4,2).
Example 2:

Input: 
grid = 
[[0,1,1],
 [1,1,1],
 [1,0,0]], 
k = 1
Output: -1
Explanation: 
We need to eliminate at least two obstacles to find such a walk.
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 40
1 <= k <= m * n
grid[i][j] == 0 or 1
grid[0][0] == grid[m - 1][n - 1] == 0

*/

const { MinPriorityQueue }  = require('@datastructures-js/priority-queue');

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */

 var shortestPath = function(grid, k) {

    const m = grid.length, n = grid[0].length;

    if(k >= m + n - 2) return m + n - 2;

    const queue = new MinPriorityQueue(), minDist = {};

    queue.enqueue([0,0,k], 0);

    minDist[`0:0:${k}`] = 0;

    while(!queue.isEmpty()) {

        const { element } = queue.dequeue();

        const [x, y, eliminate] = element, dist = minDist[`${x}:${y}:${eliminate}`];

        for(const [i, j] of [[x+1,y],[x-1,y],[x,y+1],[x,y-1]]) {

            if(i === m - 1 && j === n -1 && (eliminate - grid[i][j] >= 0)) {
                return dist + 1;
            }

            if(i < 0 || i >= m) continue;
            if(j < 0 || j >= n) continue;

            const elmnt = eliminate - grid[i][j];

            if(elmnt < 0) continue;

            const newDist = dist + 1, key = `${i}:${j}:${elmnt}`;

            if(minDist[key] !== undefined && minDist[key] <= newDist) continue;

            minDist[key] = newDist;

            queue.enqueue([i, j, elmnt], newDist + (m - i) + (n - j));
         }

    }

    return -1;
};