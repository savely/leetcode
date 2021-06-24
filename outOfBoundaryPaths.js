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

    const neighbours = function(i, j) {

        const res = [];

        for(const [x,y] of [[i-1,j], [i+1,j],[i,j-1],[i, j+1]]) {

            if(x < 0 || x >= m) continue;
            if(y < 0 || y >= n) continue;

            res.push([x,y])
        }

        return res;
    };      
    
    const moves = [[startRow, startColumn]];

    let out = 0;

    while(maxMove > 0) {

        nextMoves = [];

        while(moves.length) {

            const [i , j] = moves.pop(); next = neighbours(i, j);

            out += 4 - next.length;

            for(const [x, y] of next) {
                if(x - maxMove > m && y - maxMove > n) continue;
                nextMoves.push([x,y]);
            }
        }

        moves.push(...nextMoves);
        maxMove--;
    }

    return out % ((10 ** 9) + 7);
};

m = 4, n = 4, maxMove = 2, startRow = 1, startColumn = 1;
m = 2, n = 2, maxMove = 2, startRow = 0, startColumn = 0;
m = 1, n = 3, maxMove = 3, startRow = 0, startColumn = 1;
m = 10, n = 10, maxMove = 6, startRow = 5, startColumn = 5;


console.log(findPaths(m,n,maxMove,startRow,startColumn));