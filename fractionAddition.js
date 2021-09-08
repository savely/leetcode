/*
592. Fraction Addition and Subtraction

Given a string expression representing an expression of fraction addition and subtraction, return the calculation result in string format.

The final result should be an irreducible fraction. If your final result is an integer, say 2, you need to change it to the format of a fraction that has a denominator 1. So in this case, 2 should be converted to 2/1.

 

Example 1:

Input: expression = "-1/2+1/2"
Output: "0/1"
Example 2:

Input: expression = "-1/2+1/2+1/3"
Output: "1/3"
Example 3:

Input: expression = "1/3-1/2"
Output: "-1/6"
Example 4:

Input: expression = "5/3+1/3"
Output: "2/1"
 

Constraints:

The input string only contains '0' to '9', '/', '+' and '-'. So does the output.
Each fraction (input and output) has the format ±numerator/denominator. If the first input fraction or the output is positive, then '+' will be omitted.
The input only contains valid irreducible fractions, where the numerator and denominator of each fraction will always be in the range [1, 10]. If the denominator is 1, it means this fraction is actually an integer in a fraction format defined above.
The number of given fractions will be in the range [1, 10].
The numerator and denominator of the final result are guaranteed to be valid and in the range of 32-bit int.

*/

/**
 * @param {string} expression
 * @return {string}
 */
 var fractionAddition = function(expression) {
    
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b), lcm = (a, b) => Math.abs(a * b) / gcd(a, b);

    let num = 0, denum = 0, currNum = '', currDenum = '', isDenum = false, sign = expression[0] === '-' ? -1 : 1;    

    for (let i = (sign < 0 ? 1 : 0); i < expression.length; i++) {

        const token = expression[i];

        if(token === '/') {
            isDenum = true;
            continue;
        }

        if(token === '-' || token === '+') {

            const n = sign * (+currNum), d = +currDenum;

            if(denum === 0) {
                denum = d;
                num = n;
            } else {

                const currLcm = lcm(denum, d);
                num = num * (currLcm / denum) + n * (currLcm / d);
                denum = currLcm;
                const currGcd = Math.abs(gcd(num, denum));
                num /=  currGcd;
                denum /= currGcd;
            }

            currNum = '';
            currDenum = '';
            sign = token === '-' ? -1 : 1;
            isDenum = false;
            continue;
        }

        isDenum ? currDenum += token : currNum += token;
    }

    const n = sign * (+currNum), d = +currDenum;   
    
    const currLcm = lcm(denum || d, d);
    num = num * (currLcm / (denum || d)) + n * (currLcm / d);
    denum = currLcm;
    const currGcd = Math.abs(gcd(num, denum));
    num /=  currGcd;
    denum /= currGcd;
    
    
    return `${num}/${denum}`;
};

let  expression = "-1/2+1/2";
//expression = "-1/2+1/2+1/3";
//expression = "1/3-1/2";
expression = "-75/100-125/100";
//expression = "-7/3";

console.log(fractionAddition(expression));