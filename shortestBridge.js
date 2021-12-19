/*
#934. Shortest Bridge

You are given an n x n binary matrix grid where 1 represents land and 0 represents water.

An island is a 4-directionally connected group of 1's not connected to any other 1's. There are exactly two islands in grid.

You may change 0's to 1's to connect the two islands to form one island.

Return the smallest number of 0's you must flip to connect the two islands.

 

Example 1:

Input: grid = [[0,1],[1,0]]
Output: 1
Example 2:

Input: grid = [[0,1,0],[0,0,0],[0,0,1]]
Output: 2
Example 3:

Input: grid = [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
Output: 1
 

Constraints:

n == grid.length == grid[i].length
2 <= n <= 100
grid[i][j] is either 0 or 1.
There are exactly two islands in grid.

*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var shortestBridge = function(grid) {

    const h = grid.length - 1, w = grid[0].length - 1;

    let queue = [];

    for(let i = 0; i <= h; i++) {
        for(let j = 0; j <= w; j++) {

            if(grid[i][j] === 0) continue;

            let island = [[i, j]];

            queue.push([i, j])

            grid[i][j] = -1;

            while(island.length) {

                const nextI = [];

                while(island.length) {

                    const [m, n] = island.pop();

                for(const [x, y] of [[m + 1, n], [m - 1, n], [m, n - 1], [m, n + 1]]) {

                    if(x < 0 || x > h) continue;
                    if(y < 0 || y > w) continue;
                    if(grid[x][y] < 1) continue;

                    grid[x][y] = -1;

                    queue.push([x, y]);
                    nextI.push([x, y]);
                }
                }
            island = nextI;
            }
        
            break;
        }

        if(queue.length) break;
    }


    while(queue.length) {

        const nextQ = [];

        while(queue.length) {

            const [i, j] = queue.pop(), dist = grid[i][j];

            for(const [x, y] of [[i + 1, j], [i - 1, j], [i, j - 1], [i, j + 1]]) {

                if(x < 0 || x > h) continue;
                if(y < 0 || y > w) continue;
                if(grid[x][y] < 0) continue;
                
                if(grid[x][y] === 1) return -1 * (dist + 1); 

                grid[x][y] = dist - 1;

                nextQ.push([x, y]);
            }

        }

        queue = nextQ;
    }

    return 0;
};

let grid = [[0,1],[1,0]];
grid = [[0,1,0],[0,0,0],[0,0,1]];
grid = [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]];

console.log(shortestBridge(grid));