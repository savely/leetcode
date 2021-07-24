/*
126. Word Ladder II

A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

Every adjacent pair of words differs by a single letter.
Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
sk == endWord
Given two words, beginWord and endWord, and a dictionary wordList, return all the shortest transformation sequences from beginWord to endWord, or an empty list if no such sequence exists. Each sequence should be returned as a list of the words [beginWord, s1, s2, ..., sk].

 

Example 1:

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: [["hit","hot","dot","dog","cog"],["hit","hot","lot","log","cog"]]
Explanation: There are 2 shortest transformation sequences:
"hit" -> "hot" -> "dot" -> "dog" -> "cog"
"hit" -> "hot" -> "lot" -> "log" -> "cog"
Example 2:

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
Output: []
Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.
 

Constraints:

1 <= beginWord.length <= 5
endWord.length == beginWord.length
1 <= wordList.length <= 1000
wordList[i].length == beginWord.length
beginWord, endWord, and wordList[i] consist of lowercase English letters.
beginWord != endWord
All the words in wordList are unique.
*/

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
 var findLadders = function(beginWord, endWord, wordList) {

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

    let endWordId = -1 , beginWordId = -1;

    for(let i = 0; i < wordList.length; i++) {

      const word = wordList[i];

      if(word === endWord) {
          endWordId = i;
      }

      if(word === beginWord) {
        beginWordId = i;
    }

      for (const node of nodesFrom(word)) {

         if(nodes[node] === undefined) nodes[node] = [];
         nodes[node].push(i);
      }
    }

    if(endWordId < 0) return [];

    if(beginWord === wordList[endWordId]) return [[beginWord]];

    if(beginWordId < 0) {
        wordList.push(beginWord);
        beginWordId = wordList.length - 1;
    }    

    const visitedWords = new Set([beginWordId]);

    let paths = {} ;

    let queue = [beginWordId];     

    while(queue.length) {

        const nextQueue = [], nextVisited = [];

        hasEndWord = false;

        while(queue.length) {

            const prevId = queue.pop(), prevWord = wordList[prevId],  wordNodes = nodesFrom(prevWord);

            for(let i = 0; i < wordNodes.length; i++) {

                const node = wordNodes[i];

                const wordIds = nodes[node] || [];

                for(let j = 0; j < wordIds.length; j++) {

                    const id = wordIds[j], word = wordList[id];

                    if(visitedWords.has(id)) continue;        
                    
                    nextVisited.push(id);

                    hasEndWord |= word === endWord;

                    if(paths[id] === undefined) {
                        paths[id] = new Set();
                    }

                    if(id === prevId || paths[id].has(prevId)) continue;

                    paths[id].add(prevId);

                    nextQueue.push(id);
                    }
                }
        }

        for(const id of nextVisited) {
            visitedWords.add(id);
        }

        if(hasEndWord) break;

        queue.push(...nextQueue);        
    }

    const ans = []

    const restorePaths = (node, path) => {

        if(node === beginWordId) {
          
            path.push(wordList[node]);
            ans.push(path.reverse());
            return;
        }

        if(paths[node] === undefined) return;

        for(const prevNode of [...paths[node]]) {

            restorePaths(prevNode, [...path, wordList[node]]);
        }
    }

    restorePaths(endWordId, []);

    return ans;
};