/*
#1905. Count Sub Islands

You are given two m x n binary matrices grid1 and grid2 containing only 0's (representing water) and 1's (representing land). An island is a group of 1's connected 4-directionally (horizontal or vertical). Any cells outside of the grid are considered water cells.

An island in grid2 is considered a sub-island if there is an island in grid1 that contains all the cells that make up this island in grid2.

Return the number of islands in grid2 that are considered sub-islands.

 

Example 1:


Input: grid1 = [[1,1,1,0,0],[0,1,1,1,1],[0,0,0,0,0],[1,0,0,0,0],[1,1,0,1,1]], grid2 = [[1,1,1,0,0],[0,0,1,1,1],[0,1,0,0,0],[1,0,1,1,0],[0,1,0,1,0]]
Output: 3
Explanation: In the picture above, the grid on the left is grid1 and the grid on the right is grid2.
The 1s colored red in grid2 are those considered to be part of a sub-island. There are three sub-islands.
Example 2:


Input: grid1 = [[1,0,1,0,1],[1,1,1,1,1],[0,0,0,0,0],[1,1,1,1,1],[1,0,1,0,1]], grid2 = [[0,0,0,0,0],[1,1,1,1,1],[0,1,0,1,0],[0,1,0,1,0],[1,0,0,0,1]]
Output: 2 
Explanation: In the picture above, the grid on the left is grid1 and the grid on the right is grid2.
The 1s colored red in grid2 are those considered to be part of a sub-island. There are two sub-islands.
 

Constraints:

m == grid1.length == grid2.length
n == grid1[i].length == grid2[i].length
1 <= m, n <= 500
grid1[i][j] and grid2[i][j] are either 0 or 1.
*/

/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
 var countSubIslands = function(grid1, grid2) {

    const l = grid1.length - 1, w = grid1[0].length - 1;           
        
    const neighbours = function(i, j) {

        const res = [];

        for(const [x,y] of [[i-1,j], [i+1,j],[i,j-1],[i, j+1]]) {

            if(x < 0 || x > l) continue;
            if(y < 0 || y > w) continue;
            if(grid2[x][y] !== 1) continue;

            res.push([x,y])
        }

        return res;
    };        
    
    let islandNum = 1, count = 0;
    
    for(let i = 0; i <= l; i++) {

        for(let j = 0; j <= w; j++) {
            
            if(grid2[i][j] !== 1) continue;
            
            islandNum++;

            let isSubisland = true;
            
            const stack = [[i,j]];
            
            while(stack.length) {
                
                const [x,y] = stack.pop();
                
                if(grid2[x][y] !== 1) continue;

                if(grid1[x][y] !== 1) isSubisland = false;
                
                grid2[x][y] = islandNum;
                
                stack.push(...neighbours(x,y));
            }
            
            count += isSubisland ? 1 : 0;
        }
    }
   return count;
};