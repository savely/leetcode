


var totalNQueens = function(n) {
  
    const queens = []
    let solutions = []
    let v = 1
    let h = 1

    if(n < 2) return n

    const place = function (queen) {

        const ld  = function(pos) {
          return pos['h'] - pos['v']
        }
        const rd  = function (pos) {
            return pos['h'] + pos['v']
        }

        if(!queens.reduce((acc, q) => {
            return acc && q['v'] !== queen['v'] && q['h'] !== queen['h'] && ld(q) !== ld(queen) && rd(q) !== rd(queen)
        }, true)) return false

        queens.push(queen)
        return true
    }

    const rejectLast = function() {

        if(!queens.length) {
            return [0,0]
        }
        const lastPlaced = queens.pop()
        if(lastPlaced['v'] === n) {
            return rejectLast()
        }
        return [lastPlaced['v'] +1, lastPlaced['h']]
    }

    while(true) {


        if(!place({'v' : v, 'h' : h})) {

            if(v === n) {
            //backtrack
            [v, h] = rejectLast()
             if(v === 0) break
            } else {
               v++ 
            }
            continue
        }

        if(queens.length === n) {
            //we get a board
            solutions.push(queens)
            //move to the next horizontal
            const next  = rejectLast() 
            //?????
            v = next[0]
            h = next[1]
            if(v === 0) break

            continue
       }   

        v = 1
        h++
    }
    return solutions.length
};

console.log(totalNQueens(12))