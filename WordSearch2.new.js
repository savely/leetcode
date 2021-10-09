/*
#212. Word Search II
Given an m x n board of characters and a list of strings words, return all words on the board.

Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. 
The same letter cell may not be used more than once in a word.

Example 1:


Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
Output: ["eat","oath"]
Example 2:


Input: board = [["a","b"],["c","d"]], words = ["abcb"]
Output: []
 

Constraints:

m == board.length
n == board[i].length
1 <= m, n <= 12
board[i][j] is a lowercase English letter.
1 <= words.length <= 3 * 104
1 <= words[i].length <= 10
words[i] consists of lowercase English letters.
All the strings of words are unique.
*/

var findWords = function(board, words) {
    
    const h = board.length - 1, w = board[0].length - 1;

    const dfs = function (i, j, word, idx) {
    
    if(i < 0 || i > h)  return false;
    if(j < 0 || j > w)  return false;
    if(board[i][j] !== word[idx])   return false;

    if(idx === word.length - 1) return true;

    const letter = board[i][j];

    board[i][j] = '*';

    const next = idx + 1;

    const res = dfs(i + 1, j, word, next)
                || dfs(i - 1, j, word, next)
                || dfs(i, j + 1, word, next)
                || dfs(i, j - 1, word, next);
    
    board[i][j] = letter;

    return res;
    };

    const wMap = {}, res = {};

    for(let i = 0; i < words.length; i++) {

        const word = words[i];
        wMap[word[0]] = wMap[word[0]] || {};
        wMap[word[0]][i] = true;
    }

    for(let i = 0; i <= h; i++) {

        for(let j = 0; j <= w; j++) {

            const ch = board[i][j], ids = wMap[ch] || {};

            for(const id in ids) {

                const word = words[id];

                if(dfs(i, j, word, 0)) {
                    res[id] = true;
                    delete wMap[ch][id];
                }
            }
        }
    }
    
    return words.filter((w, i) => res[i]);
};


let board = [["o","a","a","n"],
             ["e","t","a","e"],
             ["i","h","k","r"],
             ["i","f","l","v"]];

let words = ["oath","pea","eat","rain"];

board = [["a","b"]];
words = ["ab"];

board = [["o","a","a","n"],
         ["e","t","a","e"],
         ["i","h","k","r"],
         ["i","f","l","v"]];
words = ["oath","pea","eat","rain","hklf", "hf"];
words = ["hklf", "hf"];

board = [["a","b","c"],
         ["a","e","d"],
         ["a","f","g"]];

//words = ["eaafgdcba","eaabcdgfa"];

console.log(findWords(board, words));