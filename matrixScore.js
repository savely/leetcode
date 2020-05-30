/*
e have a two dimensional matrix A where each value is 0 or 1.

A move consists of choosing any row or column, and toggling each value in that row or column: changing all 0s to 1s, and all 1s to 0s.

After making any number of moves, every row of this matrix is interpreted as a binary number, and the score of the matrix is the sum of these numbers.

Return the highest possible score.
*/
/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function(A) {

    if(A.length === 0 || A[0].length === 0) return 0

    const flipCol = (idx) => {
        for(let i = 0; i < A.length; i++) {
            A[i][idx] = A[i][idx] === 0 ? 1 : 0
        }
    }

    const flipRow = (idx) => {
        for(let i = 0; i < A[0].length; i++) {
            A[idx][i] = A[idx][i] === 0 ? 1 : 0
        }
    }

    for(let i = 0; i < A.length; i++) {
       if(A[i][0] === 0) flipRow(i)    
    }

    for(let i = 1; i < A[0].length; i++) {
        let zeros = 0
        for(let j = 0; j < A.length; j++) {
          if(A[j][i] === 0) zeros++

          if(zeros > Math.floor(A.length / 2)) {
              flipCol(i)
              break
          }
        }
    }
   
    return A.map(row => parseInt(row.join(''),2)).reduce((acc, n) => acc + n, 0)
};


let m = [
          [0,0,1,1],
          [1,0,1,0],
          [1,1,0,0]
        ]
console.log(matrixScore(m))