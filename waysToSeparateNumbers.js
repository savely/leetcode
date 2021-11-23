/*
#1977. Number of Ways to Separate Numbers

You wrote down many positive integers in a string called num. However, you realized that you forgot to add commas to seperate the different numbers. You remember that the list of integers was non-decreasing and that no integer had leading zeros.

Return the number of possible lists of integers that you could have written down to get the string num. Since the answer may be large, return it modulo 109 + 7.

 

Example 1:

Input: num = "327"
Output: 2
Explanation: You could have written down the numbers:
3, 27
327

Example 2:

Input: num = "094"
Output: 0
Explanation: No numbers can have leading zeros and all numbers must be positive.

Example 3:

Input: num = "0"
Output: 0
Explanation: No numbers can have leading zeros and all numbers must be positive.

Example 4:

Input: num = "9999999999999"
Output: 101

 

Constraints:

    1 <= num.length <= 3500
    num consists of digits '0' through '9'.

*/

/**
 * @param {string} num
 * @return {number}
 */
 var numberOfCombinations = function(num) {

    if(num[0] === '0') return 0;

    const suffix = new Array(num.length);
    suffix[0] = BigInt(num);

    let pow = 1n, n = 0n;

    for(let i = num.length -1; i > 0; i--) {
      n += pow * BigInt(num[i]);
      suffix[i] = num[i] === '0' ? 0n : n;
      pow *= 10n;
    }

    const dp = {};

    const f = (idx, min) => {

        if(dp[idx] !== undefined && dp[idx][min] !== undefined) return dp[idx][min];

        if(idx > num.length - 1) return 0n;

        let n = 0n, count = 0n;

        for(let i = idx; i < num.length; i++) {

            n = n * 10n + BigInt(num[i]);

            if(n <= min) continue;

            if(num[idx + 1] === '0') continue;

            if(n >= suffix[i]) break;

            count += 1n + f(i + 1, n);
        }

        if(dp[idx] === undefined) dp[idx] = {};
        
        dp[idx][min] = count;

        return dp[idx][min];
    }
    
    return 1n + f(0, 0);
};

//let num = "327";
num = "9999999999999";

console.log(numberOfCombinations(num));