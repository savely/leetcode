/**
 * @param {string} s
 * @return {number}
 */
 var longestValidParentheses = function(s) {
    
    if(s.length < 2) return 0
    
    let max = 0, i = 0

    const dp = new Array(s.length + 1).fill(-1)

    
    
    const stack = []
    
    while(i < s.length) {
        
        if(s[i] === '(') {
          stack.push(i++)
          continue
        }
        
        if(stack.length === 0) {
            i++
            continue
        }

      const pos = stack.pop(), curr = i - pos + 1
      dp[i+1] = Math.max(curr, curr + dp[pos])
      max = Math.max(max, dp[i+1])
      i++
    }
    
    return  max
};

const arr = ["(()", ")()())", "(())())"]
console.table(arr.map(longestValidParentheses))