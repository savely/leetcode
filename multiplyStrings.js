/*
#43. Multiply Strings

Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

 

Example 1:

Input: num1 = "2", num2 = "3"
Output: "6"
Example 2:

Input: num1 = "123", num2 = "456"
Output: "56088"
 

Constraints:

1 <= num1.length, num2.length <= 200
num1 and num2 consist of digits only.
Both num1 and num2 do not contain any leading zero, except the number 0 itself.
*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var multiply = function(num1, num2) {

    if(num1 === "0" || "num2" === "0") return "0";

    if(num1 === "1") return num2;

    if(num2 === "1") return num1;

    if(num2.length > num1.length) [num2, num1] = [num1, num2];

    let res = "0";

    for(let i = num2.length - 1; i >= 0; i--) {

        const d = num2[i], currMult = multDigit(num1, d);

        res = add(res, currMult + "0".repeat(num2.length - i - 1));
    }
    
    return res;
};

const multDigit = (num, d) => {

    if(d === "0") return "0";
    if(d === "1") return num;

    let res = "", carry  = 0;

    for(let i = num.length - 1; i >= 0; i--) {
        
        const nextMul = (+num[i]) * (+d) + carry, digit = nextMul % 10;

        res = `${digit}` + res;

        carry = nextMul / 10 >> 0;
    }

    if(carry > 0) res = `${carry}` + res;

    return res;
};

var add = function(num1, num2) {

    if(num1 === "0") return num2;

    if(num2 === "0") return num1;
    
    let ans = "", carry = 0, i = num1.length - 1, j = num2.length - 1;
    
     while(i >= 0 || j >= 0) {

        let nextSum = 0;
         
        if(i >= 0 && j >= 0) {
            nextSum = +num1[i--] + +num2[j--] + carry;
        } else if(i >= 0) {
            nextSum = +num1[i--] + carry;
        } else if(j >= 0) {
            nextSum =   +num2[j--] + carry;            
        }
      
        carry = nextSum / 10 >> 0;
         
        ans = `${nextSum % 10}` + ans;
     }
    
    if(carry > 0) {
    ans = `${carry}` + ans;
    }
    
    return ans;
};

console.log(multiply("162", "11"));