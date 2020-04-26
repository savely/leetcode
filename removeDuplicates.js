var removeDuplicates = function(S) {
    
    if(S.length < 2) return S

    const stack = []

    for(let i = 0; i < S.length; i++){
       if(stack.length === 0 || stack[stack.length-1] !== S[i]) {
           stack.push(S[i])
           continue
       } 
        stack.pop()
    }

    return stack.join('')
}

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates2 = function(s, k) {
    
    const stack = []
    const times = []

    for(let i = 0; i < s.length; i++){
      const el = s[i]
      const top = stack.length-1
      const timesTop = times.length-1

      if(stack.length === 0 || stack[top] !== s[i]) {
        stack.push(s[i])
        times.push(1)
        continue
      }
      
      if(times[timesTop] < k-1) {
        stack.push(s[i]) 
        times[timesTop] += 1
        continue
      }

      stack.length = stack.length - (k-1)
      times.pop()

    }

    return stack.join('')
};


console.log(removeDuplicates2('pbbcggttciiippooaais', 2))