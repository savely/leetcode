var searchMatrix = function(matrix, target) {
  
    if(matrix.length === 0) return false

    const numCols = matrix[0].length - 1
    const numRows = matrix.length - 1  

    const searchRow = function (row, start, end) {
       
        if(end - start < 2) {
            return matrix[row][end] === target  ||  matrix[row][start] === target
        }

    const mid = start + Math.floor((end-start) /2)

    if(matrix[row][mid] > target) return searchRow(row, start, mid)
    if(matrix[row][mid] < target) return searchRow(row, mid, end)

    return matrix[row][mid] === target
}


    const searchRows = function (start, end) {
       
        if(end - start < 2) {
          return searchRow(start, 0, numCols) || searchRow(end, 0, numCols)  
        }

        const mid = start + Math.floor((end-start) /2)

        if(matrix[mid][0] > target) return searchRows(start, mid)
        if(matrix[mid][numCols] < target) return searchRows(mid, end)

        return searchRow(mid, 0, numCols)
    }

    return searchRows(0, numRows)
};

var subtractProductAndSum = function(n) {
   
    let pow =  1
    let sum =  0
    let prod = 1
    
    while (Math.floor(n /pow) > 0) {
        d = Math.floor(n % (pow * 10) / pow)
        sum  += d
        prod *= d 
        pow  *= 10
    }
    
    return prod - sum
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {

    let times = 0

    return nums.reduce((acc, val, i) => {
         if(i % 2 === 0) {
             times = val
             return acc
         }
         const arr = []
         arr.length = times
         arr.fill(val)
         return acc.concat(arr)
    }, [])
};

var searchMatrix2 = function(matrix, target) {
    
    let i = 0
    let j = matrix[0].length -1

    while(i < matrix.length && j >= 0) {
        if(matrix[i][j] === target) return true

        if(matrix[i][j] > target) {
            j--
            continue
        }
       i++
    }

    return false
};

m1 = [
    [1,   3,  5,  7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
  ]

  m2 = [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ]
  
  var toLowerCase = function(str) {
    
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lower = 'abcdefghijklmnopqrstuvwxyz'
    const hash  = {}
    
    for(let i = 0; i < upper.length; i++) {
        hash[upper[i]] = lower[i]
    }
    

    return Array.from(str).map(c => hash[c] === undefined ? c: hash[c]).join('')
};

//  console.log(toLowerCase("Hello"))


var removeOuterParentheses = function(S) {
  
    if(S.length === 0) return S

    const outer = []
    const inner = []
    let i = 0
    let count = 0

    while(i < S.length) {

     if(S[i] === ')' && count === 1) {
          inner.push(...outer.slice(1))
          outer.length = 0
          count = 0
          i++
          continue
     }
    
     (S[i] === '(') ? count ++ : count--
     outer.push(S[i])
      i++
    }
    return inner.join('')
};

  //console.log(removeOuterParentheses("()()"))

  var sortedSquares = function(A) {
    
    if(A.length === 0) return A

    if(A[0] >= 0) return A.map(x => x*x)

    if(A[A.length-1] <= 0) return A.reverse().map(x => x*x)
    
    let pos = 0
    
    while(A[pos] < 0 && pos < A.length) {
        pos++
    }
   
    const res = []
    let neg = pos - 1
    
    while(neg >= 0 || pos < A.length) {
       
        let n = A[neg] * A[neg]
        let p = A[pos] * A[pos]

        if(isNaN(p)) {
            res.push(n)
            neg--
            continue
        }
        
        if(isNaN(n)) {
            res.push(p)
            pos++
            continue
        }

        if(n <= p) {
            res.push(n)
            neg--
            continue
        }
        
        res.push(p)
        pos++
    }
    
    return res
};

//console.log(sortedSquares([-4,-1,0,3,10]))
//console.log(sortedSquares([-7,-3,2,3,11]))
//console.log(sortedSquares([-7,-4,-3,-2,-1]))
//console.log(sortedSquares([-3,0,2]))

var sortArrayByParity = function(A) {
    
    if(A.length < 2) return A
    
    let even = odd = 0
    
    for(let i = 0; i < A.length; i++) {

    }
    
    return A
};

//console.log(sortArrayByParity([1,2,3,4]))

var selfDividingNumbers = function(left, right) {
    
    const isSd = function(n)  {
        
        let k = n
                
        while(k  > 0) {
           
            if( k % 10 === 0) return false

            if(n % (k % 10) !== 0 ) return false
            
            k = Math.floor(k/10)
        }
            
      return true      
    }
    
    const res = []
    
    for(let i = left; i <= right; i++) {
        if(isSd(i)) res.push(i)
    }
    
    return res
};

//console.log(selfDividingNumbers(500,800))

var uniqueOccurrences = function(arr) {
    
    const isUnique = function(xs) {
        const hash = {}
        
        for(let i = 0; i < xs.length; i++ ) {
            if(hash[xs[i]]  === undefined) {
               hash[xs[i]] = 1 
                continue
            }
            return false
        }
        return true
    }
    
    const hash = {}
    
            for(let i = 0; i < arr.length; i++ ) {
            if(hash[arr[i]]  === undefined) {
               hash[arr[i]] = 0 
            }
           hash [arr[i]]++
        }
    return isUnique(Object.values(hash))
};

console.log(uniqueOccurrences([1,2,2,3,3]))