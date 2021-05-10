/*
#212. Word Search II
Given an m x n board of characters and a list of strings words, return all words on the board.

Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. 
The same letter cell may not be used more than once in a word.
*/
var Trie = function() {
    this._hash = new Map()
    this._symbol = ''
    this._isEnd  = false 
};

Trie.prototype.insert = function(word) {
    
    if(word === '') return

    
    if(!this._hash.has(word[0])) {
       const  newLeaf = new Trie()
       newLeaf._symbol = word[0]  
       this._hash.set(word[0], newLeaf)
    }
    const leaf = this._hash.get(word[0])
    if(leaf._symbol === word) {
        leaf._isEnd = true
    }

    return leaf.insert(word.slice(1))
};

Trie.prototype.search = function(word) {
    
    if(word === '') return true
    
    if(!this._hash.has(word[0])) return false

    const leaf = this._hash.get(word[0])

    if(leaf._symbol === word) return leaf._isEnd

    return leaf.search(word.slice(1))
};

Trie.prototype.startsWith = function(prefix) {
    
    if(prefix === '') return true

    if(!this._hash.has(prefix[0])) return false

    return this._hash.get(prefix[0]).startsWith(prefix.slice(1))

};

var findWords = function(board, words) {
  
    if(board.length === 0 || words.length === 0) return []

    const res = new  Set()

    const dict = words.reduce ((acc, word) => {acc.insert(word); return acc}, new Trie())

    const search = function (vstd, pos, strng = '') {

       let [m,n] = pos
       
       if(m < 0 || m >= board.length)    return 
       if(n < 0 || n >= board[0].length) return 
       if(!dict.startsWith(strng))         return 
       if(vstd.has(pos.toString()))      return 

        const visited = new Set(vstd)
        visited.add(pos.toString())
        const str = strng + board[m][n]

        if(dict.search(str) && !res.has(str)) {
            res.add(str)
        }
   
        search(visited, [m+1,n], str)
        search(visited, [m-1,n], str)
        search(visited, [m,n+1], str)
        search(visited, [m,n-1], str)
       }
   
       for(let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
           search(new Set(),[i,j])
        }
    }

    return Array.from(res)
};

const board = 
  [
    ['o','a','a','n'],
    ['e','t','a','e'],
    ['i','h','k','r'],
    ['i','f','l','v']
  ]

const words = ["oath","pea","eat","rain"]

console.log(findWords(board, words))