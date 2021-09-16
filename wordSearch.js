/*
#79. Word Search

Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

Example 1:

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 
word = "ABCCED"
Output: true

Example 2:

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
 word = "SEE"
Output: true

Example 3:

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 
word = "ABCB"
Output: false

 

Constraints:

    m == board.length
    n = board[i].length
    1 <= m, n <= 6
    1 <= word.length <= 15
*/

var exist = function(board, word) {
 
    if(board.length === 0) return false;

    const search = function (vstd, idx, pos) {

     if(word.length <= idx) return true;

    let [m,n] = pos;
    
    if(m < 0 || m >= board.length)    return false
    if(n < 0 || n >= board[0].length) return false
    if(board[m][n] !== word[idx])     return false
    if(vstd.has(pos.toString()))      return false

     idx++;
     const visited = new Set(vstd);
     visited.add(pos.toString());

     return   search(visited, idx, [m+1,n])
           || search(visited, idx, [m-1,n])
           || search(visited, idx, [m,n+1])
           || search(visited, idx, [m,n-1]);
    }

    for(let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if(search(new Set(), 0, [i,j] )) {
                   return true;
               }
        }
    }
    
    return false;
};

const board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

board2 = [
    ["A","B","C","E"],
    ["S","F","E","S"],
    ["A","D","E","E"]
]
str = "ABCESEEEFS"

console.log(exist(board2, 'ABCESEEEFSAB'))
