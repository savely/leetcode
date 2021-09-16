/*
#200. Number of Islands

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3

 

Constraints:

    m == grid.length
    n == grid[i].length
    1 <= m, n <= 300
    grid[i][j] is '0' or '1'.
*/

var numIslands = function(grid) {

    const h = grid.length -1, w = grid[0].length -1;

    let island = 0;

    for(let i = 0; i <= h; i++) {
        for(let j = 0; j <= w; j++) {

            if(grid[i][j] !== '1') continue;

            let queue = [[i,j]];

            island--;

            grid[i][j] = island + '';

            while(queue.length) {

                const [x, y] = queue.shift();

                for(const [m, n] of [[x-1,y], [x+1,y],[x,y-1],[x,y+1]]) {

                    if(m < 0 || m > h) continue;
                    if(n < 0 || n > w) continue;
                    if(grid[m][n] !== '1') continue;

                    grid[m][n] = island  + '';
                    queue.push([m,n]);
                }
            }
        }
    }
    return -1 * island;
};

let grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ];

  grid = [
    ["1","1","0","1","0"],
    ["1","1","0","1","1"],
    ["0","0","1","0","0"],
    ["0","1","0","1","1"]
  ];

  console.log(numIslands(grid));

  console.table(grid);