/*
 #318 Maximum Product of Word Lengths
Given a string array words, return the maximum value of length(word[i]) * length(word[j]) 
where the two words do not share common letters. If no such two words exist, return 0.

 

Example 1:

Input: words = ["abcw","baz","foo","bar","xtfn","abcdef"]
Output: 16
Explanation: The two words can be "abcw", "xtfn".
Example 2:

Input: words = ["a","ab","abc","d","cd","bcd","abcd"]
Output: 4
Explanation: The two words can be "ab", "cd".
Example 3:

Input: words = ["a","aa","aaa","aaaa"]
Output: 0
Explanation: No such pair of words.
 

Constraints:

2 <= words.length <= 1000
1 <= words[i].length <= 1000
words[i] consists only of lowercase English letters.
*/

/**
 * @param {string[]} words
 * @return {number}
 */
 var maxProduct = function(words) {
    
    
    const bytes = words.map((word) => {
          let b = 0
  
        for(let i = 0; i < word.length; i++) {
         b |= (1 << ( word.charCodeAt(i) - 97))
        }
        return b
   })
      
   let max = 0
   
    for(let i = 0; i < words.length; i++) {
        for(let j = 0; j < words.length; j++) {
            
            if((bytes[i] & bytes[j]) === 0) {
                max = Math.max(max, words[i].length * words[j].length)
            }
        }
    }
      return max
  };

  let words = ["abcw","baz","foo","bar","xtfn","abcdef"]

  console.log(maxProduct(words))