/*
Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.
Example 1:

Input:
s = "catsanddog"
wordDict = ["cat", "cats", "and", "sand", "dog"]
Output:
[
  "cats and dog",
  "cat sand dog"
]
Example 2:

Input:
s = "pineapplepenapple"
wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
Output:
[
  "pine apple pen apple",
  "pineapple pen apple",
  "pine applepen apple"
]
Explanation: Note that you are allowed to reuse a dictionary word.
Example 3:

Input:
s = "catsandog"
wordDict = ["cats", "dog", "sand", "and", "cat"]
Output:
[]
*/

var positions = function(s, wordDict) {
  
  const dp = new Array(s.length+1).fill(false)
  dp[0] = true
  
  const positions = []
  
   for(let i = 1; i < dp.length; i++) {
     for(let j= 0; j < i; j++) {
         if(dp[j] && wordDict.includes(s.substring(j,i))) {
            dp[i] = true
            positions.push(i-1)
            break
         }
     }    
   }
   
return positions
};

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak2 = function(s, wordDict) {
    
    const dp = positions(s, wordDict)

    if(dp.length === 2) return [s.substring(dp[0], dp[1])]

    res = []

    let start = 0, end = 1
    

    while (end <= dp.length) {

      if(wordDict.includes(s.substring(dp[start], dp[end]))) {
        res.push(s.substring(dp[start], dp[end]))
         start = end
         end = start+1
      } else if(end === dp.length) {
      
        if(res.length === 0) break

        const backtrack =  res.pop()
           start++
           end = start +1 
       } else {
        end++
       }
    }

    return res.length > 0
};
// ["cat", "cats", "and", "sand", "dog"]
console.log(wordBreak2('catsanddog', ["cat", "cats", "and", "sand", "dog"]))

//"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab"
//["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]