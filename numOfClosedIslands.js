/*
#1254. Number of Closed Islands

Given a 2D grid consists of 0s (land) and 1s (water).  
An island is a maximal 4-directionally connected group of 0s 
and a closed island is an island totally (all left, top, right, bottom) surrounded by 1s.

Return the number of closed islands.

 

Example 1:



Input: grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
Output: 2
Explanation: 
Islands in gray are closed because they are completely surrounded by water (group of 1s).
Example 2:



Input: grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
Output: 1
Example 3:

Input: grid = [[1,1,1,1,1,1,1],
               [1,0,0,0,0,0,1],
               [1,0,1,1,1,0,1],
               [1,0,1,0,1,0,1],
               [1,0,1,1,1,0,1],
               [1,0,0,0,0,0,1],
               [1,1,1,1,1,1,1]]
Output: 2
 

Constraints:

1 <= grid.length, grid[0].length <= 100
0 <= grid[i][j] <=1
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var closedIsland = function(grid) {
    
    const h = grid.length - 1, w = grid[0].length - 1;

    const dfs = (i, j, fill = 1) => {

        if(i < 0 || i > h) return;
        if(j < 0 || j > w) return;
        if(grid[i][j] !== 0) return;

        grid[i][j] = fill;

        dfs(i + 1, j, fill);
        dfs(i - 1, j, fill);
        dfs(i, j + 1, fill);
        dfs(i, j - 1, fill);
    }

    for(let i = 0; i <= h; i++) {

        dfs(i, 0);
        dfs(i, w);
    }

    for(let i = 1; i <= w - 1; i++) {

        dfs(0, i);
        dfs(h, i);
    }
    
    islands = 0;
     
    for(let i = 1; i < h; i++) {
        for(let j = 1; j < w; j++) {

            if(grid[i][j] !== 0) continue;

            islands++;
            
            dfs(i, j);
        }
    }

    return islands;
};