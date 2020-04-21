const removeDuplicates = function(nums) {
    
    let i = 0
    
     while (i < nums.length) {
         let j = 0
          while (j+i < nums.length && nums[i] === nums[j+i]) {
              j++
          }
         
         if(i+1 < nums.length && nums[i] === nums[i+1]) {
             nums.splice(i+1, j-1)
         }
         i++
     }
    return nums
};

var isValid = function(s) {
    const stack = []
    
    const isOpen = function(b) {
        return b === '(' || b === '[' || b === '{'
    }
    
    const match = function(o,c) {
        return (o === '[' && c === ']') || (o === '{' && c === '}') || (o === '(' && c === ')')
    }
    
    for(let i = 0; i < s.length; i++ ) {
        if(isOpen(s[i])) {
            stack.push(s[i])
            continue
        }
        
        if(stack.length === 0) return false
        
        if(!match(stack.pop(),s[i])) return false
    }
    
    return stack.length === 0
};




var numSquares1 = function(n) {

    const squares = function(n) {
        const res = []
    
        for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
            res.push(i*i)
        }
        return res
    }

    const ns = function(sq, n) { 

    if(n === 0) return 0

        for(let i = 0; i < sq.length; i++) {

        if(sq[i] > n) continue 
            
        if(sq[i] === 1) return n

        return Math.min(1 + ns(sq, (n - sq[i])), ns(sq.slice(1),n))
       }

    }
    
    return ns(squares(n), n)
};

var numSquares = function(n) {
    const dp = Array(n+1).fill(Number.MAX_SAFE_INTEGER)
    dp[0] = 0

    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j *j <= i; j++ ) {
            dp[i] = Math.min(dp[i], dp[i - j*j]+1)
        }
    }

    // return dp[n]