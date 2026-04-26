/*
#1411. Number of Ways to Paint N × 3 Grid

ou have a grid of size n x 3 and you want to paint each cell of the grid with exactly one of the three colors: Red, Yellow, or Green while making sure that no two adjacent cells have the same color (i.e., no two cells that share vertical or horizontal sides have the same color).

Given n the number of rows of the grid, return the number of ways you can paint this grid. As the answer may grow large, the answer must be computed modulo 109 + 7.

 

Example 1:

Input: n = 1
Output: 12
Explanation: There are 12 possible way to paint the grid as shown.

Example 2:

Input: n = 5000
Output: 30228214

 

Constraints:

    n == grid.length
    1 <= n <= 5000

*/

/**
 * @param {number} n
 * @return {number}
 */
var numOfWays = function(n) {
    // 1. Use BigInt for the modulo to prevent precision overflow
    const mod = 1000000007n;  

    // 2. Generalized Matrix Multiplication (RowsA x ColsA) * (ColsA x ColsB)
    const mul = (A, B) => {
        const rowsA = A.length;
        const colsA = A[0].length;
        const colsB = B[0].length;
        
        // Initialize an empty matrix of size RowsA x ColsB with BigInts
        const ans = Array.from({length: rowsA}, () => new Array(colsB).fill(0n));

        for(let i = 0; i < rowsA; i++) {
            for(let j = 0; j < colsB; j++) {
                for(let k = 0; k < colsA; k++) {
                    // BigInt math ensures 10^18 products do not lose precision
                    ans[i][j] = (ans[i][j] + (A[i][k] * B[k][j])) % mod;
                }
            }
        }
        return ans;
    };

    const pow = (base, b) => {
        // Identity matrix initialized with BigInts
        let ans = [
            [1n, 0n],
            [0n, 1n]
        ];

        while(b > 0) {
            if(b % 2 === 1) ans = mul(ans, base);
            base = mul(base, base);
            b = Math.floor(b / 2); // Math.floor is safer than >>= 1 for general JS numbers
        }
        return ans;
    };

    // Base Transition Matrix defined as BigInts
    const baseMatrix = [
        [3n, 2n],
        [2n, 2n]
    ];
    
    // Initial possibilities for n=1 defined as BigInts
    const initialState = [[6n, 6n]];

    // Execute the Matrix Exponentiation
    const tPow = pow(baseMatrix, n - 1);
    const ans = mul(initialState, tPow);

    // Convert the final result back to a standard Number 
    return Number((ans[0][0] + ans[0][1]) % mod);
};

// Tests
console.log(numOfWays(1));    // Output: 12
console.log(numOfWays(5000)); // Output: 30228214
