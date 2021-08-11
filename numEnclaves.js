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

    for(let i = 0; i <= h; i++) {

        if(!grid[i][0] && !grid[i][w]) continue;

        const queue = [];

        if(grid[i][0]) {
            queue.push([i,0]);
            grid[i][0] = 0;
        }

        if(grid[i][w]) {
            queue.push([i,w]);
            grid[i][w] = 0;
        }

        while(queue.length) {

            const [i, j] = queue.pop();

            for(const [x,y] of [[i + 1,j], [i - 1,j], [i, j+ 1], [i, j - 1]]) {
                
                if(x < 0 || x > h) continue;
                if(y < 0 || y > w) continue;
                if(grid[x][y] === 0) continue;

                grid[x][y] = 0;
                queue.unshift([x,y]);
            }
        }
    }

    for(let i = 1; i <= w - 1; i++) {

        if(!grid[0][i] && !grid[h][i]) continue;

        const queue = [];

        if(grid[0][i]) {
            queue.push([0, i]);
            grid[0][i] = 0;
        }

        if(grid[h][i]) {
            queue.push([h, i]);
            grid[h][i] = 0;
        }

        while(queue.length) {

            const [i, j] = queue.pop();

            for(const [x,y] of [[i + 1, j], [i - 1, j], [i, j+ 1], [i, j - 1]]) {
                
                if(x < 0 || x > h) continue;
                if(y < 0 || y > w) continue;
                if(grid[x][y] === 0) continue;

                grid[x][y] = 0;
                queue.unshift([x,y]);
            }
        }
    }
    
    let count = 0;

    for(let i = 0; i <= h; i++) {
        for(let j = 0; j <= w; j++) {
            count += grid[i][j];
        }
    }

    console.table(grid);
    return count;
};