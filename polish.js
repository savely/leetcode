/**
 * @param {string[]} tokens
 * @return {number}
 */

 
var decodeString = function(s) {
    
   const stack = []

   const shiftTimes = function (times, expr) {
       for(let i = 0; i < times; i++) {
           for(j = 0; j < expr.length; j++) {
                stack.unshift(expr[j])
           }
       }
   }

    const parseTimes = function() {

        const num = []
        let symbol = stack.shift()

         while (Number.isInteger(parseInt(symbol))) {
           num.unshift(symbol)   
           symbol = stack.shift()
         }
         
         if(symbol !== undefined) {
             //put last non-integer symbol back in the stack
             stack.unshift(symbol)
         }

         return parseInt(num.join(''))
    }

        for(let i = 0; i < s.length; i++) {

            if(s[i] === ']') {
              expr = []
              while((c = stack.shift()) !== '[') {
                  expr.unshift(c)
              }
              const times = parseTimes()
              shiftTimes(times, expr)
            }
          else  {
            stack.unshift(s[i])  
          }
        }

    return stack.reverse().join('')
};
    //console.log(evalRPN(["2", "1", "+", "3", "*"]))
    //console.log(evalRPN(["4", "13", "5", "/", "+"]))
    //console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]))

    console.log('---------------')
    console.log(decodeString("3[a]2[bc]"))
    console.log('---------------')
    console.log(decodeString("3[a2[c]]"))
    console.log('---------------')
    console.log(decodeString("2[abc]3[cd]ef"))
    console.log('---------------')
    console.log(decodeString("100[leetcode]"))
    console.log('---------------')