/*
#600. Non-negative Integers without Consecutive Ones

Given a positive integer n, return the number of the integers in the range [0, n] whose binary representations do not contain consecutive ones.

 

Example 1:

Input: n = 5
Output: 5
Explanation:
Here are the non-negative integers <= 5 with their corresponding binary representations:
0 : 0
1 : 1
2 : 10
3 : 11
4 : 100
5 : 101
Among them, only integer 3 disobeys the rule (two consecutive ones) and the other 5 satisfy the rule. 
Example 2:

Input: n = 1
Output: 2
Example 3:

Input: n = 2
Output: 3
 

Constraints:

1 <= n <= 109
*/

/**
 * @param {number} n
 * @return {number}
 */
 var findIntegers = function(n) {
    

    const dp = new Array(32);

    dp[0] = 1;
    dp[1] = 2;

    for(let i = 2; i < 32; i++) {
        dp[i] = dp[i-1] + dp[i - 2];
    }

    let i = 30, sum = 0, prevBit = 0;

        while (i >= 0) {

            if ((n & (1 << i)) !== 0) {

                sum += dp[i];

                if (prevBit == 1) {
                    sum--;
                    break;
                }

                prevBit = 1;
            } else
                prevBit = 0;
            i--;
        }

    return sum + 1;
};

//12577040
//944060589

console.log(findIntegers(944060589));