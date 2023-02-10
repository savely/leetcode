/*
#1162. As Far from Land as Possible

Given an n x n grid containing only values 0 and 1, where 0 represents water and 1 represents land, find a water cell such that its distance to the nearest land cell is maximized, and return the distance. If no land or water exists in the grid, return -1.

The distance used in this problem is the Manhattan distance: the distance between two cells (x0, y0) and (x1, y1) is |x0 - x1| + |y0 - y1|.

 

Example 1:

Input: grid = [[1,0,1],[0,0,0],[1,0,1]]
Output: 2
Explanation: The cell (1, 1) is as far as possible from all the land with distance 2.

Example 2:

Input: grid = [[1,0,0],[0,0,0],[0,0,0]]
Output: 4
Explanation: The cell (2, 2) is as far as possible from all the land with distance 4.

 

Constraints:

    n == grid.length
    n == grid[i].length
    1 <= n <= 100
    grid[i][j] is 0 or 1


*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {

    const neighbours = (i, j) => {

        const ans = [];

        for(const [m, n] of [[i - 1, j], [i + 1, j], [i, j - 1], [i, j + 1]]) {

            if(m < 0 || m === grid.length) continue;
            if(n < 0 || n === grid[0].length) continue;
            if(grid[m][n] === 1 || (grid[m][n] < 0 && grid[m][n] >= grid[i][j])) continue;

            ans.push([m, n]);
        }
        return ans;
    };

    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {

            if(grid[i][j] !== 1) continue;

            let queue = neighbours(i, j);

            let depth = -1;

            while(queue.length) {

                const next = []; 

                for(k = 0; k < queue.length; k++) {

                    const [m, n] = queue[k];

                    if(grid[m][n] < 0 && grid[m][n] >= depth) continue;

                    grid[m][n] = depth;

                    next.push(...neighbours(m, n));
                }
                queue = next;
                depth--;
            }
        }
    }

    let max = 0;
    
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            max = Math.min(max, grid[i][j]);
        }
    }

    return max === 0 ? -1 : -1 * max;
};

let grid = [[1,0,1],
            [0,0,0],
            [1,0,1]];
grid = [[1,1,0],
        [0,0,0],
        [0,0,0]];

console.log(maxDistance(grid));