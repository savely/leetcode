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

*/

/**
 * @param {string} s
 * @return {string[][]}
 */
 const partition = (s) => {
    const res = [];
  
    const isPalindrome = (l, r) => {
      while (l < r) {
        if (s[l] !== s[r]) return false;
        l++;
        r--;
      }
      return true;
    };
  
    const go = (l, list) => {
      if (l === s.length) {
        res.push(list);
      } else {
        for (let r = l; r < s.length; r++) {
          if (isPalindrome(l, r)) {
            go(r + 1, [...list, s.slice(l, r + 1)]);
          }
        }
      }
    };
  
    go(0, []);
    return res;
  };