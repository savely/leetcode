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


/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak2 = function(s, wordDict) {
    
    if(s.length === 1) return wordDict.has(s)

    res = []

    let start = 0, end = 1
    const len = s.length-1

    while (end <= s.length) {

      if(wordDict.includes(s.substring(start, end))) {
        res.push(s.substring(start, end))
         start = end
         end = start+1
      } else if(end === s.length) {
      
        if(res.length === 0) break

        const backtrack =  res.pop()
           end = start + 1 
           start -= backtrack.length
       } else {
        end++
       }
    }

    return res.length > 0
};
// ["cat", "cats", "and", "sand", "dog"]
console.log(wordBreak2('catsanddog', ["cat", "cats", /*"and",*/ "sand", "dog"]))