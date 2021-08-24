/*
#537. Complex Number Multiplication
A complex number can be represented as a string on the form "real+imaginaryi" where:

real is the real part and is an integer in the range [-100, 100].
imaginary is the imaginary part and is an integer in the range [-100, 100].
i2 == -1.
Given two complex numbers num1 and num2 as strings, return a string of the complex number that represents their multiplications.

 

Example 1:

Input: num1 = "1+1i", num2 = "1+1i"
Output: "0+2i"
Explanation: (1 + i) * (1 + i) = 1 + i2 + 2 * i = 2i, and you need convert it to the form of 0+2i.
Example 2:

Input: num1 = "1+-1i", num2 = "1+-1i"
Output: "0+-2i"
Explanation: (1 - i) * (1 - i) = 1 + i2 - 2 * i = -2i, and you need convert it to the form of 0+-2i.
 

Constraints:

num1 and num2 are valid complex numbers.
*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var complexNumberMultiply = function(num1, num2) {
    
    const toPair = str => {
       
        const realSig = str[0] === '-' ? -1 : 1;
        
        let realStr = "", i = (realSig > 0 ? 0 : 1);
        
        while(str[i] !== '-' && str[i] !== '+') realStr += str[i++];
        
        const imgSig = str[i] == '-' ? -1 : 1, imgStr = str.slice(i + 1, str.length - 1);
        
        return [realSig * (+realStr), imgSig * (+imgStr)];
    };

    const [p, q] = toPair(num1), [r, s] = toPair(num2);
    
    return `${ p * r - q * s}+${p * s + q * r}i`;
};