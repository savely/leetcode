/*
#2290. Minimum Obstacle Removal to Reach Corner

You are given a 0-indexed 2D integer array grid of size m x n. Each cell has one of two values:

    0 represents an empty cell,
    1 represents an obstacle that may be removed.

You can move up, down, left, or right from and to an empty cell.

Return the minimum number of obstacles to remove so you can move from the upper left corner (0, 0) to the lower right corner (m - 1, n - 1).

 

Example 1:

Input: grid = [[0,1,1],[1,1,0],[1,1,0]]
Output: 2
Explanation: We can remove the obstacles at (0, 1) and (0, 2) to create a path from (0, 0) to (2, 2).
It can be shown that we need to remove at least 2 obstacles, so we return 2.
Note that there may be other ways to remove 2 obstacles to create a path.

Example 2:

Input: grid = [[0,1,0,0,0],[0,1,0,1,0],[0,0,0,1,0]]
Output: 0
Explanation: We can move from (0, 0) to (2, 4) without removing any obstacles, so we return 0.

 

Constraints:

    m == grid.length
    n == grid[i].length
    1 <= m, n <= 105
    2 <= m * n <= 105
    grid[i][j] is either 0 or 1.
    grid[0][0] == grid[m - 1][n - 1] == 0

*/

const { PriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumObstacles = function(grid) {

    const queue = new PriorityQueue({compare : ([n1, m1], [n2, m2]) => grid[n2][m2] - grid[n1][m1]});

    queue.enqueue([0,0]);
    grid[0][0] = -1;

    while(queue.size()) {

        const [n, m] = queue.dequeue();

        const val = grid[n][m];

        for(const [dy, dx] of [[1,0],[-1,0],[0,1],[0,-1]]) {

            if(n + dy === grid.length || n + dy < 0) continue;
            if(m + dx === grid[0].length || m + dx < 0) continue;
            if(grid[n + dy][m + dx] < 0) continue;

            grid[n + dy][m + dx] = grid[n + dy][m + dx] === 1  ? val - 1 : val;
            queue.enqueue([n + dy, m + dx]);
        }
    }
    
    return Math.abs(grid[grid.length - 1][grid[0].length - 1] + 1);
};
