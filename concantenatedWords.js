/*
#472. Concatenated Words

Given an array of strings words (without duplicates), return all the concatenated words in the given list of words.

A concatenated word is defined as a string that is comprised entirely of at least two shorter words in the given array.

 

Example 1:

Input: words = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
Output: ["catsdogcats","dogcatsdog","ratcatdogcat"]
Explanation: "catsdogcats" can be concatenated by "cats", "dog" and "cats"; 
"dogcatsdog" can be concatenated by "dog", "cats" and "dog"; 
"ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat".

Example 2:

Input: words = ["cat","dog","catdog"]
Output: ["catdog"]

 

Constraints:

    1 <= words.length <= 104
    1 <= words[i].length <= 30
    words[i] consists of only lowercase English letters.
    All the strings of words are unique.
    1 <= sum(words[i].length) <= 105


*/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
    
    words = new Set(words);
    
    const ans = new Set();
    
    const f = (word, start) => {
        
        if(start >= word.length) return;
        
        let str = "";
        
        for(let i = start; i < word.length; i++) {
            
            str += word[i];
            
            if(words.has(str)) {
                
                if(i === word.length - 1 && start > 0) {
                    ans.add(word);
                    return;
                }
                f(word, i + 1);
            }
        }
        
    };
    
    for(const word of words) {
        f(word, 0);
    }
    
    
    return [...ans];
};

words = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"];
words = ["cat","dog","catdog"];

console.dir(findAllConcatenatedWordsInADict(words));