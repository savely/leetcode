/*
#1292. Maximum Side Length of a Square with Sum Less than or Equal to Threshold

Given a m x n matrix mat and an integer threshold. Return the maximum side-length of a square with a sum less than or equal to threshold or return 0 if there is no such square.

 

Example 1:

Input: mat = [[1,1,3,2,4,3,2],[1,1,3,2,4,3,2],[1,1,3,2,4,3,2]], threshold = 4
Output: 2
Explanation: The maximum side length of square with sum less than 4 is 2 as shown.

Example 2:

Input: mat = [[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2]], threshold = 1
Output: 0

Example 3:

Input: mat = [[1,1,1,1],[1,0,0,0],[1,0,0,0],[1,0,0,0]], threshold = 6
Output: 3

Example 4:

Input: mat = [[18,70],[61,1],[25,85],[14,40],[11,96],[97,96],[63,45]], threshold = 40184
Output: 2

 

Constraints:

    1 <= m, n <= 300
    m == mat.length
    n == mat[i].length
    0 <= mat[i][j] <= 10000
    0 <= threshold <= 10^5


*/

/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
 var maxSideLength = function(mat, threshold) {

    for(let i = 0; i < mat.length; i++) {
        for(let j = 1; j < mat[0].length; j++) {
            mat[i][j] += mat[i][j-1];
        }
    }

    for(let i = 1; i < mat.length; i++) {
        for(let j = 0; j < mat[0].length; j++) {
            mat[i][j] += mat[i - 1][j];
        }
    }

    const maxSquare = Math.min(mat.length, mat[0].length);

    const squareSum = (i, j, n) => {  // bottom right corner
        
        if(i < n - 1 || j < n - 1) return Infinity;

        let sum = mat[i][j];

        sum -= i > n - 1 ? mat[i - n][j] : 0;
        sum -= j > n - 1 ? mat[i][j - n] : 0;
        sum += j > n - 1 && i > n - 1 ? mat[i - n ][j - n] : 0;

        return sum;
    };

    const check = (n) => {

        for(let i = n - 1; i < mat.length; i++) {
            for(let j = n - 1; j < mat[0].length; j++) {
                if(squareSum(i, j, n) <= threshold) return true;
            }
        }
        return false;
    }

    let lo = 1, hi = maxSquare;

    while(hi > lo) {

        const mid = (hi + lo) / 2 >> 0;

        if(check(mid)) {
            if(mid + 1 <= maxSquare && !check(mid + 1)) return mid;
            lo = mid + 1;
        } else {
            if(mid > 1 && check(mid - 1)) return mid - 1;
            hi = mid - 1;
        }
    }
    
    return check(lo) ? lo : 0;
};