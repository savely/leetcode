/*
#241. Different Ways to Add Parentheses

Given a string expression of numbers and operators, return all possible results from computing all the different possible ways to group numbers and operators. You may return the answer in any order.

 

Example 1:

Input: expression = "2-1-1"
Output: [0,2]
Explanation:
((2-1)-1) = 0 
(2-(1-1)) = 2
Example 2:

Input: expression = "2*3-4*5"
Output: [-34,-14,-10,-10,10]
Explanation:
(2*(3-(4*5))) = -34 
((2*3)-(4*5)) = -14 
((2*(3-4))*5) = -10 
(2*((3-4)*5)) = -10 
(((2*3)-4)*5) = 10
 

Constraints:

1 <= expression.length <= 20
expression consists of digits and the operator '+', '-', and '*'.
All the integer values in the input expression are in the range [0, 99].
*/

/**
 * @param {string} expression
 * @return {number[]}
 */
 var diffWaysToCompute = function(expression) {

    const ans = [], ops = {'+': (x, y) => x + y, '-' : (x, y) => x - y, '*' : (x, y) => x * y};

    const ways = (expr) => {

        let stack = [], res = [];

        while(expr.length) {

            const token = expr.shift();

            if(!stack.length || typeof stack[stack.length - 1] === 'function') {
                stack.push(+token);
                continue;
            }

            if(!(token in ops)) {
                stack[stack.length - 1] *= 10 + +token;
                continue;
            }

            const f = ops[token];

            if(stack.length > 1) {
                const [x, op, y] = stack;
                stack = [op(x, y)];
            }

           // if(expr.some((ch) => ch in ops)) {
                for(const val of ways([...expr])) {
                    res.push(f(stack[0], val))
                //}
            }

            if(expr.length) stack.push(f);
        }

        if(stack.length > 1) {
            const [x, op, y] = stack;
             stack = [op(x, y)];
        }

        res.push(stack[0]);

        return res;
    }

    return ways([...expression]);

};

let expression = "2-1-1";
expression = "2*3-4*5";

console.table(diffWaysToCompute(expression));