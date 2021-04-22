/*
#282. Expression Add Operators

Given a string num that contains only digits and an integer target, 
return all possibilities to add the binary operators '+', '-', or '*' between the digits of num so that 
the resultant expression evaluates to the target value.

Input: num = "123", target = 6
Output: ["1*2*3","1+2+3"]

*/

/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
 var addOperators = function(num, target) {
    
    const nums = [...num].map(c => parseInt(c));
    const res  = [] 
   
    let opsIdx = new Array(num.length - 1).fill(0)

    const nextIdx = (idx) => {

        let carry = 1

        for(let i = 0; i < idx.length; i++) {
            
            if(idx[i] + carry < 4) {
                idx[i] += carry
                return idx
            }
            idx[i] = 0
        }

        if(carry) return []
    }

    const ops = {'+' : (x, y) => x + y,
                 '-' : (x, y) => x - y,
                 '*' : (x,y) => x * y,
                 ''  : (x, y) => x === 0 ? NaN : 10 * x + y
            }
    
    const generateExpr = (idx) => {
        const expr = [nums[0]], sym = Object.keys(ops)
        
        for(let i = 0; i < idx.length; i++) {
            expr.push(sym[ idx[i] ], nums[i + 1])
        }

        return expr
    }

     const evalExpr = (expr) => {

         const hasOp  = expr.includes('')
         const hasMultiply = expr.includes('*')
         const stack = [expr[0]]

         let i = 1

         while (i < expr.length) {

             const op = expr[i++]
             const n  = expr[i++]
             const top = stack.length - 1

            if(op === '*' && hasOp) {
               stack.push(op, n)
               continue
             }

        if((op === '+' || op === '-') && (hasMultiply || hasOp)) {
            stack.push(op, n)
            continue
         }

         stack[top] = (ops[op])(stack[top], n) 
    }

     if(stack.length === 1) return stack[0]

    return evalExpr(stack)
    };

    while(opsIdx.length) {
        const expr = generateExpr(opsIdx)

        if(evalExpr(expr) === target) {
            res.push(expr.join(''))
        }

        opsIdx = nextIdx(opsIdx)
    }

    return res
};