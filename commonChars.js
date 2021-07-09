/*
#1002. Find Common Characters

iven an array words of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

You may return the answer in any order.

 

Example 1:

Input: ["bella","label","roller"]
Output: ["e","l","l"]

Example 2:

Input: ["cool","lock","cook"]
Output: ["c","o"]

 

Note:

    1 <= words.length <= 100
    1 <= words[i].length <= 100
    words[i] consists of lowercase English letters.


*/

/**
 * @param {string[]} A
 * @return {string[]}
 */
 var commonChars = function(A) {
    
    let freq = {};
      
      for(let i = 0; i < A[0].length; i++) {
          freq[A[0][i]] = freq[A[0][i]] || 0;
          freq[A[0][i]]++;
      }
      
      for(let i = 1; i < A.length; i++) {
          
          const newFreq = {}, word = A[i];
          
          let found  = false;
          
          for(let j = 0; j < word.length; j++) {
              
              if(freq[word[j]] === undefined) continue;
              
              found = true;
              
              newFreq[word[j]] = newFreq[word[j]] || 0;
              
              if(newFreq[word[j]] < freq[word[j]]) newFreq[word[j]]++;
          }
          
          if(!found) return [];
          freq = newFreq;
      }
      
      const res = [];
      
      for(const ch in freq) {
          res.push(...ch.repeat(freq[ch]));
      }
      
      return res;
  };

  let words = ["bella","label","roller"];
  words = ["cool","lock","cook"];

  console.table(commonChars(words));