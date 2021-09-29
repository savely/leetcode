/*
#2018. Check if Word Can Be Placed In Crossword

You are given an m x n matrix board, representing the current state of a crossword puzzle. 
The crossword contains lowercase English letters (from solved words), ' ' to represent any empty cells, 
and '#' to represent any blocked cells.

A word can be placed horizontally (left to right or right to left) or vertically (top to bottom or bottom to top) 
in the board if:

    It does not occupy a cell containing the character '#'.
    The cell each letter is placed in must either be ' ' (empty) or match the letter already on the board.
    There must not be any empty cells ' ' or other lowercase letters directly left or right of the word 
    if the word was placed horizontally.
    There must not be any empty cells ' ' or other lowercase letters directly above or below the word 
    if the word was placed vertically.

Given a string word, return true if word can be placed in board, or false otherwise.

 

Example 1:

Input: board = [["#", " ", "#"], [" ", " ", "#"], ["#", "c", " "]], word = "abc"
Output: true
Explanation: The word "abc" can be placed as shown above (top to bottom).

Example 2:

Input: board = [[" ", "#", "a"], [" ", "#", "c"], [" ", "#", "a"]], word = "ac"
Output: false
Explanation: It is impossible to place the word because there will always be a space/letter above or below it.

Example 3:

Input: board = [["#", " ", "#"], [" ", " ", "#"], ["#", " ", "c"]], word = "ca"
Output: true
Explanation: The word "ca" can be placed as shown above (right to left). 

 

Constraints:

    m == board.length
    n == board[i].length
    1 <= m * n <= 2 * 105
    board[i][j] will be ' ', '#', or a lowercase English letter.
    1 <= word.length <= max(m, n)
    word will contain only lowercase English letters.
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var placeWordInCrossword = function(board, word) {

    const r = board.length - 1, c = board[0].length - 1, len = word.length - 1;

    const check = (i, j, vert = true)  => {

        if(vert && (j + len) > c) return false;
        
        if(vert && (j + len) < c && board[i][j + len + 1] !== '#') return false;
        
        if(!vert && (i + len) > r) return false;
        
        if(!vert && (i + len) < r && board[i + len + 1][j] !== '#') return false;
        
        let dir = true, rev = true, k = 0;

        while(k <= len) {

            const c = vert ? board[i][j + k] : board[i + k][j];

            if(c === '#') return false;

            dir &=  c === ' ' || word[k] === c;
            rev &=  c === ' ' || word[len - k] === c;

            if(!dir && !rev) return false;

            k++;
        }
        
        return true;
    };

for(let i = 0; i <= r; i++) {

    for(let j = 0; j <= c; j ++) {


        if(i === 0 && check(i, j, false)) return true;

        if(j === 0 && check(i,j)) return true;

        if(board[i][j] === '#' && (check(i, j + 1) || check(i + 1, j, false))) return true;
    }
}
return false;
};

let board = [["#", " ", "#"], 
             [" ", " ", "#"], 
             ["#", "c", " "]]; 
let word = "abc";

console.log(placeWordInCrossword(board, word));
