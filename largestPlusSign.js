/*
#764. Largest Plus Sign

You are given an integer n. You have an n x n binary grid grid with all values initially 1's except for some indices given in the array mines. The ith element of the array mines is defined as mines[i] = [xi, yi] where grid[xi][yi] == 0.

Return the order of the largest axis-aligned plus sign of 1's contained in grid. If there is none, return 0.

An axis-aligned plus sign of 1's of order k has some center grid[r][c] == 1 along with four arms of length k - 1 going up, down, left, and right, and made of 1's. Note that there could be 0's or 1's beyond the arms of the plus sign, only the relevant area of the plus sign is checked for 1's.

 

Example 1:


Input: n = 5, mines = [[4,2]]
Output: 2
Explanation: In the above grid, the largest plus sign can only be of order 2. One of them is shown.
Example 2:


Input: n = 1, mines = [[0,0]]
Output: 0
Explanation: There is no plus sign, so return 0.
 

Constraints:

1 <= n <= 500
1 <= mines.length <= 5000
0 <= xi, yi < n
All the pairs (xi, yi) are unique.

*/

/**
 * @param {number} N
 * @param {number[][]} mines
 * @return {number}
 */
 var orderOfLargestPlusSign = function(N, mines) {

    const field = new Array(N).fill(0).map(_ => new Array(N).fill(1));
    const upDown = new Array(N).fill(0).map(_ => new Array(N).fill(0));
    const leftRight = new Array(N).fill(0).map(_ => new Array(N).fill(0));

    while(mines.length) {
        const [x, y] = mines.pop();
        field[x][y] = 0;
    }

    for(let i = 0; i < N; i++) {

        let udCount = 0, lrCount = 0;

        for(let j = 0; j < N; j++) {

            if(field[i][j] === 0) {
                udCount = 0;
            } else {
                 upDown[i][j] = ++udCount;
            }

            if(field[j][i] === 0) {
                lrCount = 0;
            } else {
                leftRight[j][i] = ++lrCount;
            }
        }
    }

    for(let i = N - 1; i >= 0; i--) {

        let udCount = 0, lrCount = 0;

        for(let j = N - 1; j >= 0; j--) {

            if(field[i][j] === 0) {
                udCount = 0;
            } else {
                 upDown[i][j] = Math.min(upDown[i][j], ++udCount);
            }

            if(field[j][i] === 0) {
                lrCount = 0;
            } else {
                leftRight[j][i] = Math.min(leftRight[j][i], ++lrCount);
            }
        }
    }    

    let max = 0;

    for(let i = 0; i < N; i++) {
        for(let j = 0; j < N; j++) {

            max = Math.max(max, Math.min(leftRight[i][j], upDown[i][j]));
        }
    }    

    return max;  
};