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

    const nodesFrom = (word) => {

        const arr = [...word], nodes = [];

        for(let i = 0; i < arr.length; i++) {

            arr[i] = '*';

            nodes.push(arr.join(''));

            arr[i] = word[i];
        }
        return nodes;
    }

    const nodes = {};

    let hasEndWord = false;

    for(let i = 0; i < wordList.length; i++) {

      const word = wordList[i];

      hasEndWord |= word === endWord;

      for (const node of nodesFrom(word)) {

         if(nodes[node] === undefined) nodes[node] = [];
         nodes[node].push(i);
      }
    }

    if(!hasEndWord) return 0;

    if(beginWord === endWord) return 1;

    const queue = nodesFrom(beginWord); 
    
    let depth = 1;

    const visited = new Set();

    while(queue.length) {

        const next = new Set();

        while(queue.length) {

            const currNode = queue.pop(), wordIds = nodes[currNode] || [];

            if(visited.has(currNode)) continue;

            visited.add(currNode);

            for(const id of wordIds) {

                const word = wordList[id];

                if(word === endWord) return depth + 1;

                for(const node of nodesFrom(word)) {

                    if(visited.has(node)) continue;

                    next.add(node);
                }
            }
        }

        queue.push(...next);
        depth++;
    }
    
    return 0;
};

/* //"hit" -> "hot" -> "dot" -> "dog" -> cog"
//let beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"];
beginWord = "hit", endWord = "keg", wordList = ["hot","dot","dog","lot","log","cog","keg","lag", "leg", "peg"];

console.log(ladderLength(beginWord, endWord, wordList)); */