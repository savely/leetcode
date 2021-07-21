/*
#994
n a given grid, each cell can have one of three values:

the value 0 representing an empty cell;
the value 1 representing a fresh orange;
the value 2 representing a rotten orange.
Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.

 
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

let grid = [[2,1,1],[1,1,0],[0,1,1]]
//grid = [[0,2]]
//grid = [[2,1,1],[0,1,1],[1,0,1]]


console.log(orangesRotting(grid))