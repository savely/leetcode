let s = [["5","3",".",".","7",".",".",".","."],
         ["6",".",".","1","9","5",".",".","."],
         [".","9","8",".",".",".",".","6","."],
         ["8",".",".",".","6",".",".",".","3"],
         ["4",".",".","8",".","3",".",".","1"],
         ["7",".",".",".","2",".",".",".","6"],
         [".","6",".",".",".",".","2","8","."],
         [".",".",".","4","1","9",".",".","5"],
         [".",".",".",".","8",".",".","7","9"]]

var solveSudoku = function(board) {

    const filled = new Map()
    const s      =  board

    const cellNum  = function(i, j) {
          return 9 * i + ((i %2 !== 0) ? 8-j : j)
    }

    const numCell = function (n) {
        let row = Math.floor(n/9)
        let col = ((row %2 !== 0 ) ?  (8 - n % 9) : n % 9)
        return [row, col]
    }

    const _next = function(i, j) {
        if(i === 8 && j === 9) return [0,0]

        let isNextRow = (i % 2 === 0) ? (j > 0 && j % 8 === 0) : j === 0
        let nextI = isNextRow ? i+1 : i
        let nextJ = (nextI % 2 === 0) ? j+1 : j-1
        if(isNextRow) {
          nextJ = (nextI % 2 === 0) ? 0 : 8
        }
        
        return  [nextI, nextJ]
    }

    const next = function(pos) {
         if(pos > 80) return false

         const nextPos = cellNum(..._next(...numCell(pos)))

         if (filled.has(nextPos)) return next(nextPos) 
          
         return nextPos > 80 ? false : nextPos
    }

    const _prev = function(i, j) {
        if(i === 0 && j === 0) return [8,8]

        let isNextRow = (i % 2 === 0) ? j === 0 : (j > 0 && j % 8 === 0)
        let nextI = isNextRow ? i-1 : i
        let nextJ = (nextI % 2 !== 0) ? j+1 : j-1
        if(isNextRow) {
          nextJ = (nextI % 2 !== 0) ? 0 : 8
        }
        
        return  [nextI, nextJ]

    }

    const prev = function(pos) {
         if(pos < 0) return false
         
         const prevPos = cellNum(..._prev(...numCell(pos)))

         if (filled.has(prevPos)) return prev(prevPos) 

         return prevPos < 0 ? false : prevPos

    }
    
    const setPos = function(pos, n) {
        const [row,col] = numCell(pos)
        board[row][col] = `${n}`
    }

    getPos = function(pos) {
        const [row,col] = numCell(pos)
        return board[row][col]
    }

    const resetPos = function(pos) {
        setPos(pos, '.')
    }

    const columnValid = function (pos) {
       const [row,col] = numCell(pos)
       const val = board[row][col]
       
       if(val === '.') return false

       count = 0
       for(i = 0; i < 9; i++) {
           if (board[i][col] === val) {
               count++
               if(count > 1) return false
           }
       }
       return true
    }

    const rowValid = function (pos) {
        const [row,col] = numCell(pos)
        const val = board[row][col]
        
        if(val === '.') return false

        count = 0
        for(i = 0; i < 9; i++) {
            if (board[row][i] === val) {
                count++
                if(count > 1) return false
            }
        }
        return true
     }

     const quadValid = function (pos) {
        const [row,col] = numCell(pos)

        const val = board[row][col]

        if(val === '.') return false

        const quadRow = 3 * Math.floor(row / 3)
        const quadCol = 3 * Math.floor(col / 3)

        for(let i = quadRow ; i < quadRow + 3; i++) {
            for(let j= quadCol ; j < quadCol + 3; j++) {

                if(i === row && j === col) continue

                if(i > 8 || j > 8 ) continue

                if(board[i][j] === val) return false
            }
        }
        return true
     }

     const isValid = function(pos) {
         return rowValid(pos) && columnValid(pos) && quadValid(pos)
     }


     const startPoint = function() {
         if(board[0][0] === '.') return 0

         return next(0)
     }

    const solve = function(pos, board) {

        while (pos !== false) {
            
            let val = getPos(pos) 
            let isSet = false
      
            val = val === '.' ? 1 : (parseInt(val) +1)

            while (val < 10) {
                setPos(pos, val)
                if(isValid(pos)) {
                    isSet = true
                    pos = next(pos)  
                    break
                }
                val++
            }
             if(isSet) continue
            //backtrack
            resetPos(pos)
            pos = prev(pos)

        }
    }

 
    for(let i = 0; i < 9; i++)
    for(let j = 0; j < 9; j++) {
        if(board[i][j] !== '.') {
            filled.set(cellNum(i,j), board[i][j])
        }
    }    


 
    solve(startPoint(), board)   

    //x = [ 9, 17, 26, 27, 18,35,36, 44, 45,53,54,62,71,70,63,72,80]
    //console.log(x, x.map(prev))   
        
};

//f = new solveSudoku()

console.log(s)
console.log( "--------------------------")
solveSudoku(s)
console.log(s)

/*
const cellNum  = function(i, j) {
    return 9 * i + ((i %2 !== 0) ? 8-j : j)
}

xs = Array(9).fill(null).map(_ => Array(9).fill(0))
for(i = 0; i < 9; i++)
  for(j = 0; j < 9; j++) {
       xs[i][j] = cellNum(i,j)
  }


  /*for(let k = 0; k <9*9; k++) {
      [i,j] = f.numCell(k)
     //
  }
  
  console.log( xs)


x = [0, 9, 17, 26, 27, 18,35,36, 44, 45,53,54,62,71,70,63,72,80]
*/

