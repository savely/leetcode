/*
#51. N-Queens

The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, 
respectively.

Input: n = 4
Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
Example 2:

Input: n = 1
Output: [["Q"]]
 

Constraints:

1 <= n <= 9

*/

/**
 * @param {number} n
 * @return {string[][]}
 */
/**
 * @param {number} n
 * @return {string[][]}
 */
 var solveNQueens = function(n) {

    if(n === 1) return [['Q']];
  
    const rows = new Array(n).fill(-1), lds = {}, rds = {}, cols = {}, solutions = [];

    const backtrack = (row) => {

      if(rows[row] > -1) {
        const col = rows[row], ld = row - col, rd = row + col
        cols[col] = lds[ld] = rds[rd] = false
        rows[row] = -1
      }

      const prevRow = row - 1,  prevCol = rows[prevRow]
       
      if(prevCol === n - 1) {

          if(prevRow === 0) return [n , n];

          return backtrack(prevRow)
      }

    const pld = prevRow - prevCol, prd = prevRow + prevCol
    cols[prevCol] = lds[pld] = rds[prd] = false
    rows[prevRow] = -1

    return [prevRow, prevCol + 1]
    };

    const print = (solution) => {
        const res = []

        for(let i = 0; i < n; i++) {

            const r = []

            for(let j = 0; j < n; j++) {
               r.push(j === solution[i] ? 'Q' : '.') 
            }

            res.push(r.join(''))
        }

        return res
    };
    
    let r = 0, c = 0

    while(r < n) {

        let colFound = false

        while(c < n) {
          
            const ld = r - c, rd = r + c

            if(!cols[c] && !lds[ld] && !rds[rd]) {
                //found free column in the row
                cols[c] = lds[ld] = rds[rd] = colFound = true
                rows[r] = c
                break;
            }
            c++
        }

        if(r === n-1) {

           if(colFound) {
               solutions.push(print(rows));
           }

           [r,c] = backtrack(r)

           if(r === n && c === n) break;    
           
           continue;
        }

        if(colFound) {
            c = 0
            r++
            continue;
        }

        [r,c] = backtrack(r,c)
    }

    return solutions
};

console.log(solveNQueens(13).length)