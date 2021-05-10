/*
#212. Word Search II
Given an m x n board of characters and a list of strings words, return all words on the board.

Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.
*/

var findWords = function(board, words) {
    
    const neighbours = (i, j) => {
        return [[i - 1, j], [i, j - 1], [i + 1, j], [i, j + 1]].filter(([a, b]) => {
        if(a < 0 || a > board.length -1) return false;
        if(b < 0 || b > board[0].length -1) return false;
        return true
    })
}
        
    const find = function(word, pos, i, j, visited) {
      
        if(pos === word.length - 1) return true
            
        const hash = `${i}|${j}`
       
        if(visited.has(hash) || board[i][j] !== word[pos]) return false
        
        visited.add(hash)
        
       
        for (const [nextI, nextJ] of neighbours(i, j)) {
            
            const nextHash = `${nextI}|${nextJ}`
            
            if(board[nextI][nextJ] === word[pos + 1] && ! visited.has(nextHash)) {
                
                return  find(word, pos + 1, nextI, nextJ, new Set([...visited]))               
            }
        }
        
       return false 
    }
    
    const wordsDict = new Map()
    
    for(const word of words) {
        
        const arr = wordsDict.get(word[0]) || []
        arr.push(word)
        wordsDict.set(word[0], arr)
    }
    
    const res = []
    
    
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            
            const letter = board[i] [j], words = wordsDict.get(letter)

            if(!words) continue;
            

            const toDelete = new Set()
            
            for (const word of words) {
                
                if(find(word, 0, i, j, new Set())) {
                    toDelete.add(word) 
                    res.push(word)
                }
            }
            if(toDelete.size) {
                const newArr = []
                for(let i = 0; i < words.length; i++) {
                    if(!toDelete.has(words[i])) {
                        newArr.push(words[i])
                    }
                }
                wordsDict.set(letter, newArr)
            }
            
        }
    }
    
    return res
};


let board = [["o","a","a","n"],
             ["e","t","a","e"],
             ["i","h","k","r"],
             ["i","f","l","v"]]

let words = ["oath","pea","eat","rain"]

board = [["a","b"]]
words = ["ab"]

board = [["o","a","a","n"],
         ["e","t","a","e"],
         ["i","h","k","r"],
         ["i","f","l","v"]]
words = ["oath","pea","eat","rain","hklf", "hf"]
words = ["hklf", "hf"]

console.log(findWords(board, words))