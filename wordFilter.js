/*
#745. Prefix and Suffix Search
Design a special dictionary which has some words and allows you to search the words in it by a prefix and a suffix.

Implement the WordFilter class:

WordFilter(string[] words) Initializes the object with the words in the dictionary.
f(string prefix, string suffix) Returns the index of the word in the dictionary which has the prefix prefix and the suffix suffix. 
If there is more than one valid index, return the largest of them. If there is no such word in the dictionary, return -1.

1 <= words.length <= 15000
1 <= words[i].length <= 10
1 <= prefix.length, suffix.length <= 10
words[i], prefix and suffix consist of lower-case English letters only.
At most 15000 calls will be made to the function f.

*/


/**
 * @param {string[]} words
 */
 var WordFilter = function(words) {
    
    this.map = new Map()

    for(let i = 0; i < words.length; i++) {
          const word = words[i]

          for(let j = 0; j <= word.length; j++) {

            const prefix = word.slice(0, j)

            for(let k = 0; k <= word.length; k++) {

                const suffix = word.slice(k, word.length), hash = `${prefix}#${suffix}`

                if(!this.map.has(hash)) {
                    this.map.set(hash, i)
                }
                
                const id = this.map.get(hash)

                if(i > id) {
                    this.map.set(hash, i)  
                }
            }
          }
    }
};

/** 
 * @param {string} prefix 
 * @param {string} suffix
 * @return {number}
 */
WordFilter.prototype.f = function(prefix, suffix) {
    const  idx = this.map.get(`${prefix}#${suffix}`) 

    return idx === undefined ? -1 : idx
};

/** 
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(prefix,suffix)
 */


let words = ['apple', 'appple']
words = ["cabaabaaaa","ccbcababac","bacaabccba","bcbbcbacaa","abcaccbcaa","accabaccaa","cabcbbbcca","ababccabcb","caccbbcbab","bccbacbcba"];

[["bccbacbcba","a"],["ab","abcaccbcaa"],["a","aa"],["cabaaba","abaaaa"],["cacc","accbbcbab"],["ccbcab","bac"],["bac","cba"],["ac","accabaccaa"],["bcbb","aa"],["ccbca","cbcababac"]]
const wf = new WordFilter(words)

console.log(wf.f("bccbacbcba",'a'))