/*
# 3122. Minimum Number of Operations to Satisfy Conditions

You are given a 2D matrix grid of size m x n. In one operation, you can change the value of any cell to any non-negative number. You need to perform some operations such that each cell grid[i][j] is:

    Equal to the cell below it, i.e. grid[i][j] == grid[i + 1][j] (if it exists).
    Different from the cell to its right, i.e. grid[i][j] != grid[i][j + 1] (if it exists).

Return the minimum number of operations needed.

 

Example 1:

Input: grid = [[1,0,2],[1,0,2]]

Output: 0

Explanation:

All the cells in the matrix already satisfy the properties.

Example 2:

Input: grid = [[1,1,1],[0,0,0]]

Output: 3

Explanation:

The matrix becomes [[1,0,1],[1,0,1]] which satisfies the properties, by doing these 3 operations:

    Change grid[1][0] to 1.
    Change grid[0][1] to 0.
    Change grid[1][2] to 1.

Example 3:

Input: grid = [[1],[2],[3]]

Output: 2

Explanation:

There is a single column. We can change the value to 1 in each cell using 2 operations.

 

Constraints:

    1 <= n, m <= 1000
    0 <= grid[i][j] <= 9

*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumOperations = function(grid) {

    const columns = Array.from({length : grid[0].length}, () => new Array(10).fill(0));
    
    const dp = Array.from({length : grid[0].length + 1}, () => new Array(10).fill(0));

    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            const digit = grid[i][j];
            columns[j][digit]++;
        }
    }

    for(let i = 1; i < dp.length; i++) {

        let fst = 0, snd = -1;

        for(let k = 1; k < 10; k++) {

            if(dp[i - 1][k] < dp[i - 1][fst]) {
                snd = fst;
                fst = k;
            } else if(snd < 0 || dp[i - 1][k] < dp[i - 1][snd]) {
                snd = k;
            }
        }

        for(let j = 0; j < 10; j++) {

            dp[i][j] = grid.length - columns[i - 1][j] + (j === fst ?  dp[i - 1][snd] : dp[i - 1][fst]);
        }
    }

    return Math.min(...dp[dp.length - 1]);
};

let grid = [[4,2,4,6,2,8,0,6],
            [7,4,2,0,4,1,6,8],
            [5,9,2,8,6,7,9,6],
            [9,0,2,4,7,3,3,0],
            [4,2,6,4,7,0,1,7],
            [8,6,3,6,6,7,6,6],
            [2,0,1,5,0,2,9,9],
            [7,2,6,7,4,6,7,0]];

grid = [[4,2,1,9,2,8,2,0],
        [8,0,4,0,0,7,2,1],
        [7,9,9,8,4,5,7,7],
        [5,8,0,0,5,3,8,8],
        [8,0,1,9,4,0,1,2],
        [0,5,9,6,7,6,4,2],
        [2,8,7,5,6,5,9,6],
        [4,4,2,8,7,7,0,0]];

console.log(minimumOperations(grid));