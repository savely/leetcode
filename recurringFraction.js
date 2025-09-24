/*
#166. Fraction to Recurring Decimal

Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.

If the fractional part is repeating, enclose the repeating part in parentheses.

If multiple answers are possible, return any of them.

It is guaranteed that the length of the answer string is less than 104 for all the given inputs.

 

Example 1:

Input: numerator = 1, denominator = 2
Output: "0.5"

Example 2:

Input: numerator = 2, denominator = 1
Output: "2"

Example 3:

Input: numerator = 4, denominator = 333
Output: "0.(012)"

 

Constraints:

    -231 <= numerator, denominator <= 231 - 1
    denominator != 0

*/

/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    if (numerator === 0) return "0";

    let result = '';
    
    // Handle sign
    if (numerator < 0 ^ denominator < 0) result += '-';
    
    // Convert to positive values
    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);
    
    // Integer part
    result += Math.floor(numerator / denominator);
    
    // Fractional part
    let remainder = numerator % denominator;
    if (remainder === 0) return result;
    
    result += '.';
    const map = new Map();
    
    while (remainder !== 0) {
        if (map.has(remainder)) {
            const index = map.get(remainder);
            result = result.slice(0, index) + '(' + result.slice(index) + ')';
            break;
        }
        map.set(remainder, result.length);
        remainder *= 10;
        result += Math.floor(remainder / denominator);
        remainder %= denominator;
    }
    
    return result;
};

let numerator = 4, denominator = 333;
console.log(fractionToDecimal(numerator, denominator));