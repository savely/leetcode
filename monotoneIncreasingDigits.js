/*
#738. Monotone Increasing Digits

n integer has monotone increasing digits if and only if each pair of adjacent digits x and y satisfy x <= y.

Given an integer n, return the largest number that is less than or equal to n with monotone increasing digits.

 

Example 1:

Input: n = 10
Output: 9
Example 2:

Input: n = 1234
Output: 1234
Example 3:

Input: n = 332
Output: 299
 

Constraints:

0 <= n <= 109

*/

var monotoneIncreasingDigits = function(N) {

    if(N < 10) return N;
  
    const num = "" + N;

    let i = 1;
    
    while(i < num.length && num[i] >= num[i - 1]) i++;

    if(i === num.length) return +num;
    
    let j = i - 2,  curr =  + num[i - 1] - 1;

    while(j >= 0 && +num[j] > curr) {
        curr = +num[j] - 1;
        j--;
        i--;
    }

    if(curr === 0 && j < 0) return +("9".repeat(num.length -1));

    return +(num.slice(0, j + 1) + `${+num[i - 1] - 1}` + "9".repeat(num.length - i));
};
