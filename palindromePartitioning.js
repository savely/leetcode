/*
#131. Palindrome Partitioning

Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

A palindrome string is a string that reads the same backward as forward.

 

Example 1:

Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]
Example 2:

Input: s = "a"
Output: [["a"]]

Constraints:

1 <= s.length <= 16
s contains only lowercase English letters.

*/

/**
 * @param {string} s
 * @return {string[][]}
 */
 const partition = (s) => {

    const res = [];

    const dp = new Array(s.length).fill(0).map(() => new Array(s.length).fill(0));
    
    for(let i = 0; i < s.length; i++) {

        for(let j = i; j >= 0; j--) {

            if(s[i] === s[j] && ( i - j < 2 || dp[i - 1][j + 1])) {
                dp[i][j] = 1;
            }
        }
    }

    const f = (i, path) => {

        if(i === s.length) {

            const arr = [];
            let prev = 0;

            for(const end of path) {
                arr.push(s.slice(prev, end));
                prev = end;
            }

            res.push(arr);
        }

        for(let j = i; j < s.length; j++) {

            if(dp[j][i]) {
                f(j + 1, [...path, j + 1]);
            }
        }
    }

    f(0, []);

    return res;
  };

  let s = "abaaba";

  console.table(partition(s));