/*
#878. Nth Magical Number

A positive integer is magical if it is divisible by either a or b.

Given the three integers n, a, and b, return the nth magical number. Since the answer may be very large, return it modulo 109 + 7.

 

Example 1:

Input: n = 1, a = 2, b = 3
Output: 2
Example 2:

Input: n = 4, a = 2, b = 3
Output: 6
Example 3:

Input: n = 5, a = 2, b = 4
Output: 10
Example 4:

Input: n = 3, a = 6, b = 4
Output: 8
 

Constraints:

1 <= n <= 109
2 <= a, b <= 4 * 104

*/

/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 var nthMagicalNumber = function(n, a, b) {

    if(b > a) [a, b] = [b, a];

    if(n < 2) return b;

    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b), lcm = (a, b) => Math.abs(a * b) / gcd(a, b);

    const mod = 10 ** 9 + 7, lcmAB = lcm(a, b);

    let lo = 0, hi = b * n;

    const count = (n) => [n / a >> 0, n / b  >> 0];


    while(hi > lo) {

        const mid = Math.trunc((hi + lo) / 2);
        const countA = Math.trunc(mid / a), countB = Math.trunc(mid / b), countLcm =  Math.trunc(mid / lcmAB);
        const count = countA + countB - countLcm;

        if(count >= n) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    }

    return lo % mod;
};

let n = 1, a = 2, b = 3;
n = 5, a = 2, b = 4;
n = 4, a = 2, b = 3; //6
//n = 3, a = 6, b = 4;//8
n = 1000000000, a = 40000, b = 40000;

console.log(nthMagicalNumber(n, a, b));