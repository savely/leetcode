/*
#576. Out of Boundary Paths

There is an m x n grid with a ball. The ball is initially at the position [startRow, startColumn]. You are allowed to move the ball to one of the four adjacent four cells in the grid (possibly out of the grid crossing the grid boundary). You can apply at most maxMove moves to the ball.

Given the five integers m, n, maxMove, startRow, startColumn, return the number of paths to move the ball out of the grid boundary. Since the answer can be very large, return it modulo 109 + 7.

 

Example 1:

Input: m = 2, n = 2, maxMove = 2, startRow = 0, startColumn = 0
Output: 6

Example 2:

Input: m = 1, n = 3, maxMove = 3, startRow = 0, startColumn = 1
Output: 12

 

Constraints:

    1 <= m, n <= 50
    0 <= maxMove <= 50
    0 <= startRow <= m
    0 <= startColumn <= n
*/

/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
 var findPaths = function(m, n, maxMove, startRow, startColumn) {

    if(maxMove === 0) return 0;
     
     const modulo = BigInt((10 ** 9) + 7);

    const neighbours = function(i, j) {

        const res = [];

        for(const [x,y] of [[i-1,j], [i+1,j],[i,j-1],[i, j+1]]) {

            if(x < 0 || x >= m) continue;
            if(y < 0 || y >= n) continue;

            res.push([x,y])
        }

        return res;
    };      
    
    const moves = [[startRow, startColumn, 1n]];

    let out = 0n, nextMoves = {};

    while(maxMove > 0) {

        while(moves.length) {

            const [i, j, waysToCell] = moves.pop(); next = neighbours(i, j);

            out += (BigInt(4 - next.length) * waysToCell) % modulo;

            for(const [x, y] of next) {
                if(x - maxMove > m && y - maxMove > n) continue;

                const hash = `${x}|${y}`;

                if(nextMoves[hash] === undefined) {
                    nextMoves[hash] = [x, y, 0n];
                }

                nextMoves[hash][2] += waysToCell;
            }
        }

        moves.push(...Object.values(nextMoves));
        maxMove--;
        nextMoves = {};
    }

    return out % modulo;
};

m = 4, n = 4, maxMove = 2, startRow = 1, startColumn = 1;
m = 2, n = 2, maxMove = 2, startRow = 0, startColumn = 0;
m = 1, n = 3, maxMove = 3, startRow = 0, startColumn = 1;
m = 50, n = 50, maxMove = 50, startRow = 0, startColumn = 0;


console.log(findPaths(m,n,maxMove,startRow,startColumn));