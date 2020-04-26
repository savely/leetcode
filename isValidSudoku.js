var isValidSudoku = function(board) {
    
   const rowSets = Array(9).fill(0).map(_ => new Set())
   const colSets = Array(9).fill(0).map(_ => new Set())
   const quadSets = Array(9).fill(0).map(_ => new Set())

   const q = (i, j) => 3 * Math.floor(i/3) + Math.floor(j/3)
   
     for(let i = 0; i < 9; i++) {
        for (let j  = 0; j < 9; j++) {
           const el = board[i][j]

           if(el === '.') continue

           const row = rowSets[i]
           const col = colSets[j]
           const quad = quadSets[q(i,j)]

           if(row.has(el) 
              || col.has(el) 
              || quad.has(el)) return false

        
           row.add(el)
           col.add(el)
           quad.add(el)
        }
     }
     return true
};

const s = [
   ["5","3",".",".","7",".",".",".","."],
   ["6",".",".","1","9","5",".",".","."],
   [".","9","8",".",".",".",".","6","."],
   ["8",".",".",".","6",".",".",".","3"],
   ["4",".",".","8",".","3",".",".","1"],
   ["7",".",".",".","2",".",".",".","6"],
   [".","6",".",".",".",".","2","8","."],
   [".",".",".","4","1","9",".",".","5"],
   [".",".",".",".","8",".",".","7","9"]
];

console.log(isValidSudoku(s))