/*
#227. Basic Calculator II

Given a string s which represents an expression, evaluate this expression and return its value. 

The integer division should truncate toward zero.

You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

 

Example 1:

Input: s = "3+2*2"
Output: 7
Example 2:

Input: s = " 3/2 "
Output: 1
Example 3:

Input: s = " 3+5 / 2 "
Output: 5
 

Constraints:

1 <= s.length <= 3 * 105
s consists of integers and operators ('+', '-', '*', '/') separated by some number of spaces.
s represents a valid expression.
All the integers in the expression are non-negative integers in the range [0, 231 - 1].
The answer is guaranteed to fit in a 32-bit integer.

*/

var calculate = function(s) {

    let opsStack = [], nums = [];
    const ops = {'+' : (x, y) => x + y,
                 '-' : (x, y) => x - y,
                 '*' : (x, y) => x * y,
                 '/' : (x, y) => (x / y) >> 0};
    
    let currNum = 0;


    for(const ch of s) {

        if(ch === " ") continue;

        if(!ops[ch]) {
            currNum = currNum * 10 + (+ch);
            continue;
        }

        
        op = ops[ch];
        num = currNum;
        currNum = 0;        

        if(!nums.length) {

            nums.push(num);
            opsStack.push(op);
            continue;
        }

        currOp = opsStack[opsStack.length - 1];

        if((currOp === ops["*"] || currOp === ops["/"])) {

            opsStack.pop();    
            nums[nums.length - 1] = currOp(nums[nums.length - 1], num);
        } else {
            nums.push(num);
        }

        opsStack.push(op);
    }

    const lastOp = opsStack[opsStack.length - 1];

    if(lastOp === ops['*'] || lastOp === ops['/']) {
        opsStack.pop();
        nums[nums.length - 1]  = lastOp(nums[nums.length - 1], currNum); 
    } else {
        nums.push(currNum);
    }

    nums = nums.reverse();
    opsStack = opsStack.reverse();

    let res = nums.pop();

    while(opsStack.length) {

        const num = nums.pop(), op = opsStack.pop();

        res = op(res, num);
    }

    return res;
};
