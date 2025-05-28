/*
#3212. Count Submatrices With Equal Frequency of X and Y

Given a 2D character matrix grid, where grid[i][j] is either 'X', 'Y', or '.', return the number of
submatrices
that contains:

    grid[0][0]
    an equal frequency of 'X' and 'Y'.
    at least one 'X'.

 

Example 1:

Input: grid = [["X","Y","."],["Y",".","."]]

Output: 3

Explanation:

Example 2:

Input: grid = [["X","X"],["X","Y"]]

Output: 0

Explanation:

No submatrix has an equal frequency of 'X' and 'Y'.

Example 3:

Input: grid = [[".","."],[".","."]]

Output: 0

Explanation:

No submatrix has at least one 'X'.

 

Constraints:

    1 <= grid.length, grid[i].length <= 1000
    grid[i][j] is either 'X', 'Y', or '.'.


*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numberOfSubmatrices = function(grid) {
    
    let prevSums = [], count = 0;

    for(let i = 0; i < grid.length; i++) {

        let row = [];

        for(let j = 0; j < grid[0].length; j++) {

            let x = grid[i][j] === 'X' ? 1 : 0, y = grid[i][j] === 'Y' ? 1 : 0;

            if(i > 0) {
                x += prevSums[j][0];
                y += prevSums[j][1];
            }

            if(j > 0) {
                x += row[j - 1][0];
                y += row[j - 1][1];               
            }

            count += x > 0 && x === y ? 1 : 0;

            row.push([x, y]);
        }

        prevSums = row;

        console.dir(prevSums);
    }


    return count;
};

let grid = [["X","Y","."],
            ["Y",".","."]];

console.log(numberOfSubmatrices(grid));