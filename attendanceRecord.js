/*
#552. Student Attendance Record II

An attendance record for a student can be represented as a string where each character signifies whether the student was absent, late, or present on that day. The record only contains the following three characters:

    'A': Absent.
    'L': Late.
    'P': Present.

Any student is eligible for an attendance award if they meet both of the following criteria:

    The student was absent ('A') for strictly fewer than 2 days total.
    The student was never late ('L') for 3 or more consecutive days.

Given an integer n, return the number of possible attendance records of length n that make a student eligible for an attendance award. The answer may be very large, so return it modulo 109 + 7.

 

Example 1:

Input: n = 2
Output: 8
Explanation: There are 8 records with length 2 that are eligible for an award:
"PP", "AP", "PA", "LP", "PL", "AL", "LA", "LL"
Only "AA" is not eligible because there are 2 absences (there need to be fewer than 2).

Example 2:

Input: n = 1
Output: 3

Example 3:

Input: n = 10101
Output: 183236316

 

Constraints:

    1 <= n <= 105
*/

/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function(n) {

    const dp = new Array(n + 1).fill().map(() => new Array(2).fill().map(() => new Array(3).fill(-1)));
    const mod = 1e9 + 7;
    
    function solve(n, a, l) {
        if (a === 2 || l === 3) return 0;
        if (n === 0) return 1;
        if (dp[n][a][l] !== -1) return dp[n][a][l];
        
        let ans = 0;
        ans = (ans + solve(n - 1, a, 0) % mod) % mod; // present
        ans = (ans + solve(n - 1, a + 1, 0) % mod) % mod; // absent
        ans = (ans + solve(n - 1, a, l + 1) % mod) % mod; // late
        
        return dp[n][a][l] = ans;
    }
    
        return solve(n, 0, 0);
};

let n = 10101; //183236316
//n = 10 //3536
//n = 3; //19
//n = 4;//43
//n = 5;//94

console.log(checkRecord(n));