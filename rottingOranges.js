/*
#994. Rotting Oranges

You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

 

Example 1:


Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4
Example 2:

Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
Example 3:

Input: grid = [[0,2]]
Output: 0
Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 10
grid[i][j] is 0, 1, or 2.

 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var orangesRotting = function(grid) {
    
    const h = grid.length - 1, w = grid[0].length - 1, nextGen = new Set()
    let iter = 0, hasFresh = false

    while(true) {
        nextGen.clear()
        hasFresh = false
    for (let i = 0; i <= h; i++) {
        for (let j = 0; j <= w; j++) {
         
           if(nextGen.has([i,j].toString())) continue

           const cell = grid[i][j] 

           if(cell === 1) hasFresh = true

           if(cell === 2) {

               grid[i][j] = 0

            if(i+1 <= h && grid[i+1][j] === 1) {
                nextGen.add([i+1,j].toString())
                grid[i+1][j] = 2
            }

            if(i-1 >= 0 && grid[i-1][j] === 1) {
                nextGen.add([i-1,j].toString())
                grid[i-1][j] = 2
            }

            if(j+1 <= w && grid[i][j+1] === 1) {
                nextGen.add([i,j+1].toString())
                grid[i][j+1] = 2
            }

            if(j-1 >= 0 && grid[i][j-1] === 1) {
                nextGen.add([i,j-1].toString())
                grid[i][j-1] = 2
            }            
         }
        }
    }
        
     if(nextGen.size === 0) break
        
    iter++        
  }

  return hasFresh ? -1 : iter
};

let grid = [[2,1,1],[1,1,0],[0,1,1]];
//grid = [[0,2]];
/*grid = [[2,1,1],[0,1,1],[1,0,1]];
grid = [[2,1,1],
        [1,1,1],
        [0,1,2]];//2*/


console.log(orangesRotting(grid));