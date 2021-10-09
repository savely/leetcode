/*
#212. Word Search II
Given an m x n board of characters and a list of strings words, return all words on the board.

Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. 
The same letter cell may not be used more than once in a word.
*/
const Trie = function() {
    this._hash = {};
    this._symbol = '';
    this._isEnd  = false;
};

Trie.prototype._insert = function(word, i, idx) {

    const ch = word[i], endIdx = word.length - 1 === i ? idx + 1: 0;

    this._hash[ch] = this._hash[ch] || new Trie();
    this._hash[ch]._symbol = this._hash[ch]._symbol || ch;
    this._hash[ch]._isEnd =  this._hash[ch]._isEnd || endIdx;

    if(endIdx === 0) this._hash[ch]._insert(word, i + 1, idx);
}


Trie.prototype.insert = function(word, idx) {

    this._insert(word, 0, idx);
};


var findWords = function(board, words) {
  
    const h = board.length - 1, w = board[0].length - 1;

    const trie = new Trie(), res = new Array(words.length).fill(false);

    for(let i = 0; i < words.length; i++) {
        trie.insert(words[i], i);
    }

    console.dir(trie);

    const dfs = function ([i, j], root) {
    
    if(i < 0 || i > h)  return;
    if(j < 0 || j > w)  return;
    if(board[i][j] === '*') return;

    const letter = board[i][j], trie = root._hash[letter];

    if(trie === undefined) return;

    if(trie._isEnd > 0) res[trie._isEnd - 1] = true;

    board[i][j] = '*';    

    dfs([i + 1, j], trie);
    dfs([i - 1, j], trie);
    dfs([i, j + 1], trie);
    dfs([i, j - 1], trie);
    
    board[i][j] = letter;
    };
 
    for(let i = 0; i <= h; i++) {
        for(let j = 0; j <= w; j++) {

            dfs([i, j], trie);
        }
    }

    return words.filter((w, i) => res[i]);
};

let board = 
  [
    ['o','a','a','n'],
    ['e','t','a','e'],
    ['i','h','k','r'],
    ['i','f','l','v']
  ];
  
let words = ["oath","pea","eat","rain"];

board = [["a","a","a","a","a","a","a","a","a","a","a","a"],
         ["a","a","a","a","a","a","a","a","a","a","a","a"],
         ["a","a","a","a","a","a","a","a","a","a","a","a"],
         ["a","a","a","a","a","a","a","a","a","a","a","a"],
         ["a","a","a","a","a","a","a","a","a","a","a","a"],
         ["a","a","a","a","a","a","a","a","a","a","a","a"],
         ["a","a","a","a","a","a","a","a","a","a","a","a"],
         ["a","a","a","a","a","a","a","a","a","a","a","a"],
         ["a","a","a","a","a","a","a","a","a","a","a","a"],
         ["a","a","a","a","a","a","a","a","a","a","a","a"],
         ["a","a","a","a","a","a","a","a","a","a","a","a"],
         ["a","a","a","a","a","a","a","a","a","a","a","a"]];

words = ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"];

console.log(findWords(board, words))