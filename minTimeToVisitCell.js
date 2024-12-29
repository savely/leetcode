/*
#2577. Minimum Time to Visit a Cell In a Grid

You are given a m x n matrix grid consisting of non-negative integers where grid[row][col] represents the minimum time required to be able to visit the cell (row, col), which means you can visit the cell (row, col) only when the time you visit it is greater than or equal to grid[row][col].

You are standing in the top-left cell of the matrix in the 0th second, and you must move to any adjacent cell in the four directions: up, down, left, and right. Each move you make takes 1 second.

Return the minimum time required in which you can visit the bottom-right cell of the matrix. If you cannot visit the bottom-right cell, then return -1.

 

Example 1:

Input: grid = [[0,1,3,2],[5,1,2,5],[4,3,8,6]]
Output: 7
Explanation: One of the paths that we can take is the following:
- at t = 0, we are on the cell (0,0).
- at t = 1, we move to the cell (0,1). It is possible because grid[0][1] <= 1.
- at t = 2, we move to the cell (1,1). It is possible because grid[1][1] <= 2.
- at t = 3, we move to the cell (1,2). It is possible because grid[1][2] <= 3.
- at t = 4, we move to the cell (1,1). It is possible because grid[1][1] <= 4.
- at t = 5, we move to the cell (1,2). It is possible because grid[1][2] <= 5.
- at t = 6, we move to the cell (1,3). It is possible because grid[1][3] <= 6.
- at t = 7, we move to the cell (2,3). It is possible because grid[2][3] <= 7.
The final time is 7. It can be shown that it is the minimum time possible.

Example 2:

Input: grid = [[0,2,4],[3,2,1],[1,0,4]]
Output: -1
Explanation: There is no path from the top left to the bottom-right cell.

 

Constraints:

    m == grid.length
    n == grid[i].length
    2 <= m, n <= 1000
    4 <= m * n <= 105
    0 <= grid[i][j] <= 105
    grid[0][0] == 0

*/

const { PriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumTime = function(grid) {
    
    if(grid[0][1] > 1 && grid[1][0] > 1) return -1;

    const queue = new PriorityQueue({compare : ([n1, m1, t1], [n2, m2, t2]) => t1 - t2});

    queue.enqueue([0, 0, 0]);

    while(queue.size()) {

        const [y, x, t] = queue.dequeue();

        if(grid[y][x] < 0) continue;

        if(y === grid.length - 1 && x === grid[0].length - 1) return t;

        grid[y][x] = -1;

        for(const [dy, dx] of [[1,0],[-1,0],[0,1],[0,-1]]) {

            const nextY = y + dy, nextX = x + dx;

            if(nextY === grid.length || nextY < 0) continue;
            if(nextX === grid[0].length || nextX < 0) continue;
            if(grid[nextY][nextX] < 0) continue;

            const wait = (grid[nextY][nextX] + t) % 2 ? 0 : 1, nextT = Math.max(grid[nextY][nextX] + wait, t + 1);

            queue.enqueue([nextY, nextX, nextT]);
        }
    }

    return -1;
};

let grid = [[0,1,3,2],[5,1,2,5],[4,3,8,6]];
grid = [[0,1,4],[3,2,1],[1,0,4]];
grid = [[0,100,1,1,1],
        [1,100,9,100,1],
        [1,1,1,100,1],
        [100,100,100,100,1],
        [100,100,100,100,1]]

console.log(minimumTime(grid));