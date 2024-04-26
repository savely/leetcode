/*
#1289. Minimum Falling Path Sum II

Given an n x n integer matrix grid, return the minimum sum of a falling path with non-zero shifts.

A falling path with non-zero shifts is a choice of exactly one element from each row of grid such that no two elements chosen in adjacent rows are in the same column.

 

Example 1:

Input: arr = [[1,2,3],[4,5,6],[7,8,9]]
Output: 13
Explanation: 
The possible falling paths are:
[1,5,9], [1,5,7], [1,6,7], [1,6,8],
[2,4,8], [2,4,9], [2,6,7], [2,6,8],
[3,4,8], [3,4,9], [3,5,7], [3,5,9]
The falling path with the smallest sum is [1,5,7], so the answer is 13.

Example 2:

Input: grid = [[7]]
Output: 7

 

Constraints:

    n == grid.length == grid[i].length
    1 <= n <= 200
    -99 <= grid[i][j] <= 99

*/

var minFallingPathSum = function(matrix) { 

    if(matrix.length === 1) return matrix[0][0];

    let minFst = 0, minSnd = 0, fstPos = -1;
    
    for(let i = 0; i < matrix.length; i++) {

        let nextFst = Infinity, nextSnd = Infinity, nextPos = -1;

        for(let j = 0; j < matrix[0].length; j++) {

            const val = matrix[i][j] + (j === fstPos ? minSnd : minFst);

            if(nextFst >= val) {
                nextSnd = nextFst;
                nextFst = val;
                nextPos = j;
            } else if(nextSnd > val) {
                nextSnd = val;
            }
        }

        minFst = nextFst;
        minSnd = nextSnd;
        fstPos = nextPos;
    }
    
    return minFst;
};

let matrix = [[1,2,3,-19],
              [4,5,11,6],
              [7,-1,8,9],
              [-13,5,3,-1]];//-29

matrix = [[1,2,3],
          [4,5,6],
          [7,8,9]]; //13

console.log(minFallingPathSum(matrix));
