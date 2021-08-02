/*
#827. Making A Large Island

You are given an n x n binary matrix grid. You are allowed to change at most one 0 to be 1.

Return the size of the largest island in grid after applying this operation.

An island is a 4-directionally connected group of 1s.

 

Example 1:

Input: grid = [[1,0],[0,1]]
Output: 3
Explanation: Change one 0 to 1 and connect two 1s, then we get an island with area = 3.
Example 2:

Input: grid = [[1,1],[1,0]]
Output: 4
Explanation: Change the 0 to 1 and make the island bigger, only one island with area = 4.
Example 3:

Input: grid = [[1,1],[1,1]]
Output: 4
Explanation: Can't change any 0 to 1, only one island with area = 4.
 

Constraints:

n == grid.length
n == grid[i].length
1 <= n <= 500
grid[i][j] is either 0 or 1.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var largestIsland = function(grid) {

    const squares = {},  h = grid.length -1 , w = grid[0].length - 1, gridSquare = (h + 1) * (w + 1);

    let currentIsland = -1;


    for(let i = 0; i <= h; i++) {

        for(let j = 0; j <= w; j++) {

            if(grid[i][j] !== 1) continue;

            grid[i][j] = currentIsland;

            const queue = [[i,j]];

            let square = 1;

            while(queue.length) {

                let next = [];

                while(queue.length) {    

                    const [m, n] = queue.pop();

                    for(const [x, y] of [[m+1,n],[m-1,n],[m,n+1],[m,n-1]]) {

                        if(x < 0 || x > h) continue;
                        if(y < 0 || y > w) continue; 
                        if(grid[x][y] !== 1) continue;

                        square++; 
                        grid[x][y] = currentIsland;
                        next.push([x,y]);
                    }   
                }
                
                queue.push(...next);
            }

            if(square ===  gridSquare) return square;

            squares[currentIsland--] = square;
        }
    }

    let maxSquare = 0;
    
    for(let i = 0; i <= h; i++) {
        for(let j = 0; j <= w; j++) {

            if(grid[i][j] !== 0) continue;

            const islands = {};

            for(const [x, y] of [[i+1,j],[i-1,j],[i,j+1],[i,j-1]]) {

                if(x < 0 || x > h) continue;
                if(y < 0 || y > w) continue; 
                if(grid[x][y] === 0) continue;

                islands[grid[x][y]] = grid[x][y];
            }            

            let currSquare = 1;

            for(const island in islands) {

                currSquare += squares[island];
            }

            maxSquare = Math.max(maxSquare, currSquare);
        }            
    }

    return maxSquare;
};


let grid = [[1,0],
            [0,1]];
grid = [[1,1],[1,0]];
grid = [[1,1],[1,1]];
grid = [[1,1,0,1,0],
        [1,1,0,1,0],
        [1,1,0,0,0],
        [0,0,0,0,0]];

console.log(largestIsland(grid));