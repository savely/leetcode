
/**
 * 
 * @param {[int][int]} matrix 
 */
 
const maxSquare = function(matrix) {

    if(matrix.length === 0) return 0

    if(matrix.length === 1) {
        return matrix[0].some(x => x === 1) ? 1 : 0
    }

    if(matrix[0].length === 1) {
        return matrix.some(arr => arr[0] === 1) ? 1 : 0 
    }

    let max = 0

    for (let i = 1; i < matrix.length; i++) {
        for(let j = 1; j < matrix[0].length; j++) {
            if(matrix[i][j] === 0) continue

            matrix[i][j] = 1 + Math.min(matrix[i-1][j-1],matrix[i][j-1], matrix[i-1][j])

            max = Math.max(max, matrix[i][j])
        }
    }
    return max
}

matrix = [[0,1,0,0,0]]/*,
          [0,0,1,1,1],
          [1,1,1,1,1],
          [1,0,1,1,1]
        ]*/
console.log(maxSquare(matrix))