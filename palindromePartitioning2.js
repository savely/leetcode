/*
132. Palindrome Partitioning II

Given a string s, partition s such that every substring of the partition is a palindrome.

Return the minimum cuts needed for a palindrome partitioning of s.

 

Example 1:

Input: s = "aab"
Output: 1
Explanation: The palindrome partitioning ["aa","b"] could be produced using 1 cut.
Example 2:

Input: s = "a"
Output: 0
Example 3:

Input: s = "ab"
Output: 1
 

Constraints:

1 <= s.length <= 2000
s consists of lower-case English letters only.
*/

const { fill } = require("lodash");

/**
 * @param {string} s
 * @return {number}
 */
 var minCut = function(s) {

    if(s.length < 2) return 0;

    const dp = new Array(s.length + 1).fill(0).map ((_ => new Array(s.length).fill(false)));

    for(let i = 0; i < s.length; i++) {

        dp[0][i] = dp[1][i] = true;
    }
    
    for(let i = 2; i < dp.length; i++) {

        for(let j = i - 1; j < dp[0].length; j++) {

            dp[i][j] = dp[i - 2][j - 1] && s[j] === s[j - i + 1];
        }
    }

    if(dp[s.length][s.length - 1]) return 0; // s is a palindrome

    const dp2 = new Array(s.length).fill(Infinity);

    const findCutFrom = (i) => {

        if(isFinite(dp2[i])) return dp2[i];

        for(let j = i + 1; j>= 1; j--) {

            if(!dp[j][i]) continue;

            if(i === j - 1) { ///found palindrome that starts with s[0]
                dp2[i] = 0;
                return dp2[i];
            }

            dp2[i] = Math.min(dp2[i], 1 + findCutFrom(i - j));
        }

        return dp2[i];
    }

    return findCutFrom(s.length - 1);
};
