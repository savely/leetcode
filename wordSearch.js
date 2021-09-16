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

    const h = board.length - 1, w = board[0].length - 1;

    const dfs = function (i, j, idx) {
    
    if(i < 0 || i > h)  return false;
    if(j < 0 || j > w)  return false;
    if(board[i][j] !== word[idx])   return false;

    if(idx === word.length - 1) return true;

    const letter = board[i][j];

    board[i][j] = '*';

    const next = idx + 1;

    const res = dfs(i + 1, j, next)
                || dfs(i - 1, j, next)
                || dfs(i, j + 1, next)
                || dfs(i, j - 1, next);
    
    board[i][j] = letter;

    return res;
    }

    for(let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {

            if(board[i][j] === word[0] && dfs(i, j, 0)) return true;
        }
    }
    
    return false;
};