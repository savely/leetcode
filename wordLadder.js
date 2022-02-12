/*
#127. Word Ladder

A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

Every adjacent pair of words differs by a single letter.
Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
sk == endWord
Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

 

Example 1:

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
Example 2:

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
Output: 0
Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.
 

Constraints:

1 <= beginWord.length <= 10
endWord.length == beginWord.length
1 <= wordList.length <= 5000
wordList[i].length == beginWord.length
beginWord, endWord, and wordList[i] consist of lowercase English letters.
beginWord != endWord
All the words in wordList are unique.
*/

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
 var ladderLength = function(beginWord, endWord, wordList) {

    const map = new Map();

    for(let i = 0; i < wordList.length; i++) {
        map.set(wordList[i], i);
    }

    if(!map.has(endWord)) return 0;

    let queue = [map.get(endWord)];

    map.delete(endWord);

    let length = 1;

    while(queue.length) {

        const next = [];

        while(queue.length) {

            const idx = queue.pop();

            const word = wordList[idx];

            for(let i = 0; i < word.length; i++) {

                for(let j = 0; j < 26; j++) {

                    searchWord = word.slice(0, i) + String.fromCharCode(j + 97) + word.slice(i + 1);

                    if(searchWord === beginWord) return length + 1;

                    if(map.has(searchWord)) {
                        next.push(map.get(searchWord));
                        map.delete(searchWord);
                    }
                }
            }
        }

        queue = next;
        length++;
    }

    return 0;
};

 //"hit" -> "hot" -> "dot" -> "dog" -> cog"
//let beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"];
let beginWord = "hit", endWord = "keg", wordList = ["hot","dot","dog","lot","log","cog","keg","lag", "leg", "peg"];

console.log(ladderLength(beginWord, endWord, wordList));