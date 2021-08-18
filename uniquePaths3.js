/*

980. Unique Paths III

You are given an m x n integer array grid where grid[i][j] could be:

1 representing the starting square. There is exactly one starting square.
2 representing the ending square. There is exactly one ending square.
0 representing empty squares we can walk over.
-1 representing obstacles that we cannot walk over.
Return the number of 4-directional walks from the starting square to the ending square, that walk over every non-obstacle square exactly once.

 

Example 1:


Input: grid = [[1,0,0,0],[0,0,0,0],[0,0,2,-1]]
Output: 2
Explanation: We have the following two paths: 
1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2)
2. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2)
Example 2:


Input: grid = [[1,0,0,0],[0,0,0,0],[0,0,0,2]]
Output: 4
Explanation: We have the following four paths: 
1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2),(2,3)
2. (0,0),(0,1),(1,1),(1,0),(2,0),(2,1),(2,2),(1,2),(0,2),(0,3),(1,3),(2,3)
3. (0,0),(1,0),(2,0),(2,1),(2,2),(1,2),(1,1),(0,1),(0,2),(0,3),(1,3),(2,3)
4. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2),(2,3)
Example 3:


Input: grid = [[0,1],[2,0]]
Output: 0
Explanation: There is no path that walks over every empty square exactly once.
Note that the starting and ending square can be anywhere in the grid.
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 20
1 <= m * n <= 20
-1 <= grid[i][j] <= 2
There is exactly one starting cell and one ending cell.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var uniquePathsIII = function(grid) {

    let start = null, count = 0, countWays = 0;

    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {

            if(grid[i][j] === 1) start = [i,j];

           if(grid[i][j] === 0) count++;
        }
    }

    const dfs = (i, j, count) => {

        if(count < 0) return;
        if(i < 0 || i >= grid.length) return;
        if(j < 0 || j >= grid[0].length) return;
        if(grid[i][j] < 0) return;

        if(grid[i][j] === 2){
            countWays += count === 0 ? 1 : 0;
            return;
        }

        const next = count - 1;
        grid[i][j] = -1;

        dfs(i + 1, j, next);
        dfs(i - 1, j, next);
        dfs(i, j - 1, next);
        dfs(i, j + 1, next);

        grid[i][j] = 0;
    };


    const [i, j] = start;
    grid[i][j]  = -1;

    for(const [m, n] of [[i + 1, j], [i - 1, j], [i, j + 1], [i, j - 1]]) {
        dfs(m, n, count);
    }
    
    return countWays;
};