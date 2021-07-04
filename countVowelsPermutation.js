/*
#1220. Count Vowels Permutation

Given an integer n, your task is to count how many strings of length n can be formed under the following rules:

Each character is a lower case vowel ('a', 'e', 'i', 'o', 'u')
Each vowel 'a' may only be followed by an 'e'.
Each vowel 'e' may only be followed by an 'a' or an 'i'.
Each vowel 'i' may not be followed by another 'i'.
Each vowel 'o' may only be followed by an 'i' or a 'u'.
Each vowel 'u' may only be followed by an 'a'.
Since the answer may be too large, return it modulo 10^9 + 7.

 
Example 1:

Input: n = 1
Output: 5
Explanation: All possible strings are: "a", "e", "i" , "o" and "u".
Example 2:

Input: n = 2
Output: 10
Explanation: All possible strings are: "ae", "ea", "ei", "ia", "ie", "io", "iu", "oi", "ou" and "ua".
Example 3: 

Input: n = 5
Output: 68
 

Constraints:

1 <= n <= 2 * 10^4
*/

/**
 * @param {number} n
 * @return {number}
 */
 var countVowelPermutation = function(n) {
    
    const dp = {'a' : 1, 'e' : 1, 'i' : 1, 'o' : 1, 'u' : 1}, mod = 10 ** 9 + 7;

    while(--n > 0) {

        const {a, e, i, o, u} = dp;

        dp['a'] = (e + i + u) % mod; //number of strings ending by 'a' is count of strings that can be followed by 'a'
        dp['e'] = (a + i) % mod;
        dp['i'] = (e + o) % mod;
        dp['o'] = i;
        dp['u'] = (o + i) % mod;

    }

    let count = 0;

    for(const v in dp) {
        count += dp[v];
    }
    return count % mod;
};


console.log(countVowelPermutation(2));