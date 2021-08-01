/*
#1952. Three Divisors

Given an integer n, return true if n has exactly three positive divisors. Otherwise, return false.

An integer m is a divisor of n if there exists an integer k such that n = k * m.

 

Example 1:

Input: n = 2
Output: false
Explantion: 2 has only two divisors: 1 and 2.
Example 2:

Input: n = 4
Output: true
Explantion: 4 has three divisors: 1, 2, and 4.
 

Constraints:

1 <= n <= 104
*/

/**
 * @param {number} n
 * @return {boolean}
 */
/**
 * @param {number} n
 * @return {boolean}
 */
 var isThree = function(n) {
    
    if(n < 3) return false;
    
    let divisors = 2;
    
    for(let i = 2; i <= (n / 2 >> 0); i++) {
        
        if(n % i === 0) {
            divisors++; 
        }
        
        if(divisors > 3) return false;
    }
    
    return divisors === 3;
};