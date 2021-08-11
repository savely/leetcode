/*
#1020. Number of Enclaves

You are given an m x n binary matrix grid, where 0 represents a sea cell and 1 represents a land cell.

A move consists of walking from one land cell to another adjacent (4-directionally) land cell or walking off the boundary of the grid.

Return the number of land cells in grid for which we cannot walk off the boundary of the grid in any number of moves.

 

Example 1:


Input: grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]
Output: 3
Explanation: There are three 1s that are enclosed by 0s, and one 1 that is not enclosed because its on the boundary.
Example 2:


Input: grid = [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]
Output: 0
Explanation: All 1s are either on the boundary or can reach the boundary.
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 500
grid[i][j] is either 0 or 1.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var numEnclaves = function(grid) {
  
    const h = grid.length - 1, w = grid[0].length - 1;

    const dfs = (i, j) => {

        if(i < 0 || i > h) return;
        if(j < 0 || j > w) return;
        if(grid[i][j] === 0) return;

        grid[i][j] = 0;

        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    }

    for(let i = 0; i <= h; i++) {

        dfs(i, 0);
        dfs(i, w);
    }

    for(let i = 1; i <= w - 1; i++) {

        dfs(0, i);
        dfs(h, i);
    }
    
    let count = 0;

    for(let i = 0; i <= h; i++) {
        for(let j = 0; j <= w; j++) {
            count += grid[i][j];
        }
    }

    return count;
};