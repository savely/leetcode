/*
#1048. Longest String Chain

Given a list of words, each word consists of English lowercase letters.

Let's say word1 is a predecessor of word2 if and only if we can add exactly one letter anywhere in word1 
to make it equal to word2. For example, "abc" is a predecessor of "abac".

A word chain is a sequence of words [word_1, word_2, ..., word_k] with k >= 1, 
where word_1 is a predecessor of word_2, word_2 is a predecessor of word_3, and so on.

Return the longest possible length of a word chain with words chosen from the given list of words

Example 1:

Input: words = ["a","b","ba","bca","bda","bdca"]
Output: 4
Explanation: One of the longest word chains is ["a","ba","bda","bdca"].

Example 2:

Input: words = ["xbc","pcxbcf","xb","cxbc","pcxbc"]
Output: 5
Explanation: All the words can be put in a word chain ["xb", "xbc", "cxbc", "pcxbc", "pcxbcf"].

Example 3:

Input: words = ["abcd","dbqca"]
Output: 1
Explanation: The trivial word chain ["abcd"] is one of the longest word chains.
["abcd","dbqca"] is not a valid word chain because the ordering of the letters is changed.

 

Constraints:

    1 <= words.length <= 1000
    1 <= words[i].length <= 16
    words[i] only consists of lowercase English letters.

*/

/**
 * @param {string[]} words
 * @return {number}
 */

 var longestStrChain = function(words) {
    
    const dp = {};
    
    const set = new Set(words);
    
    const longestChain = (word) => {
        
        if(word.length === 0) return 0;
        
        if(word.length === 1) {
            dp[word] = set.has(word) ? 1 : 0;
            return dp[word];
        }
        
        
        if(dp[word] !== undefined) return dp[word];
        
        dp[word] = 1;
        
        for(let i = 0; i < word.length; i++) {
            
            const prev = word.substring(0,i) + word.substring(i+1, word.length);
            
            if(set.has(prev)) {
                dp[word] = Math.max(dp[word], 1 + longestChain(prev));
            }
        }
        
        return dp[word];
    }
    
    let max = 0;
    
    for(const word of words) {
        max = Math.max(max, longestChain(word));
    }

    return max;
};

let words = ["a","b","ba","bca","bda","bdca"];
words = ["xbc","pcxbcf","xb","cxbc","pcxbc"];

console.log(longestStrChain(words));