var calculate = function(s) {
    const stack = [], low = ['-','+']
    const op = {
        '+' : (a,b) => a + b,
        '-' : (a,b) => a - b,
        '*' : (a,b) => a * b,
        '/' : (a,b) => Math.floor(a/b)
    }

    
    const isDigit = (ch) => ch.charCodeAt(0) > 47 && ch.charCodeAt(0) < 58
    
    for(let i = 0; i < s.length; i++) {

        if(s[i] === ' ') continue

        let isNum = false,j = i
        
        while(j < s.length && isDigit(s[j])) {
              isNum = true
              j++
        } 

        if(!isNum) {
            stack.push(s[i])
            continue
        }
        
        const top = stack.length-1
        const number = parseInt(s.substring(i, j+1))
        i = j-1

        if(stack.length === 0 || low.includes(stack[top])) {
               stack.push(number)
               continue
        }

        const y = number
        const f = op[stack.pop()]
        const x = stack.pop()
        stack.push(f(x,y))   
    }

    while(stack.length > 1) {
        const x = stack.shift()
        const f = op[stack.shift()]
        const y = stack.shift()
        stack.unshift(f(x,y))  
    }

    return stack.pop()
};
