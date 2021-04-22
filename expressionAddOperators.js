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
    let dp = {};
    const ops = {'+' : (x, y) => x + y,
                 '-' : (x, y) => x - y,
                 '*' : (x,y) => x * y,
                 ''  : (x, y) => x === 0 ? NaN : 10 * x + y
            }

     const evaluate = (expr) => {

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

    return evaluate(stack)
    };

    dp[num[0]] = [ [nums[0]] ]

   for(let i = 1; i < nums.length; i++) {
       
       const digit = nums[i], nextDp = {} 

       for(const key in dp) {
           const expressions = dp[key]

           for (const expr of expressions) {
            for(const op in ops) {

                const newExpr = [...expr, op, digit], nextKey = evaluate(newExpr)

                if(!nextDp[nextKey]) {
                   
                    nextDp[nextKey] = []
                }

                nextDp[nextKey].push(newExpr)
            }
           }
       }
        dp = nextDp
        delete nextDp
   }

   const n = parseInt(num)

    return dp[target] ? dp[target].map(arr => arr.join('')) : []
};

let str = "123456789"
let target = 5

console.time('a')
console.table(addOperators(str, target))
console.timeEnd('a')

console.dir(process.memoryUsage())


let expr = [3,'<',4,'*',5,'<',6,'-',2,'-',3,'+',7,'<',4,'<',9,'<',0]
expr = [3,'+',4,'',5,'',6,'*',2,'',3,'+',7,'',4,'-',9,'-',0]
expr = [3,'+',4,'',5,'',6,'*',2,'',3,'+',7,'',4,'-',9,'-',0]

//console.log(evaluate(expr))
