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
          let b = 1 << 26
  
        for(let i = 0; i < word.length; i++) {
         b |= (1 << ( word.charCodeAt(i) - 97))
        }
        return [b, word.length]
   })

   const sets = [bytes[0]], inv = ~(1 << 26)   
      
     while(bytes.length) {

        let [currMask, currLen] = bytes.pop(), nextSets = [];

        for(let i = 0; i < sets.length; i++) {

            const [mask, len]  = sets[i], hasCommon = mask & currMask & inv !== 0

            if(!hasCommon) {
                nextSets.push(sets[i])
                continue
            }

            currMask |= mask
            currLen  = Math.max(currLen, len)
        }

        sets.length = 0
        sets.push([currMask, currLen], ...nextSets)

     }

     if(sets.length < 2) return 0

     let max = -Infinity, sndMax = -Infinity

     for(const [_, len] of sets) {
         
        if(len > max) {
            sndMax = max
            max = len
        } else if(len > sndMax) {
            sndMax = len
        }
     }


     console.log(sets)

     return max * sndMax
  };

  let words = ["abcw","baz","foo","bar","xtfn","abcdef"]

  console.log(maxProduct(words))