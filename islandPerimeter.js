/*
#463
ou are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    
    let perimeter = 0

    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            
           if(grid[i][j] === 0) continue

          perimeter +=  (i === 0 ||grid[i-1][j] === 0) ? 1 : 0
          perimeter +=  (i === grid.length - 1 || grid[i+1][j] === 0) ? 1 : 0

          perimeter +=  ( j === 0  || grid[i][j-1] === 0) ? 1 : 0
          perimeter +=  (j === grid[0].length - 1 || grid[i][j+1] === 0) ? 1 : 0
 
        }
    }
    return perimeter
};


let island = [[0,1,0,0],
              [1,1,1,0],
              [0,1,0,0],
              [1,1,0,0]]

console.log(islandPerimeter(island))
