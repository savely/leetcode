/*
#773. Sliding Puzzle

On an 2 x 3 board, there are five tiles labeled from 1 to 5, and an empty square represented by 0. A move consists of choosing 0 and a 4-directionally adjacent number and swapping it.

The state of the board is solved if and only if the board is [[1,2,3],[4,5,0]].

Given the puzzle board board, return the least number of moves required so that the state of the board is solved. If it is impossible for the state of the board to be solved, return -1.

 

Example 1:

Input: board = [[1,2,3],[4,0,5]]
Output: 1
Explanation: Swap the 0 and the 5 in one move.

Example 2:

Input: board = [[1,2,3],[5,4,0]]
Output: -1
Explanation: No number of moves will make the board solved.

Example 3:

Input: board = [[4,1,2],[5,0,3]]
Output: 5
Explanation: 5 is the smallest number of moves that solves the board.
An example path:
After move 0: [[4,1,2],[5,0,3]]
After move 1: [[4,1,2],[0,5,3]]
After move 2: [[0,1,2],[4,5,3]]
After move 3: [[1,0,2],[4,5,3]]
After move 4: [[1,2,0],[4,5,3]]
After move 5: [[1,2,3],[4,5,0]]

 

Constraints:

    board.length == 2
    board[i].length == 3
    0 <= board[i][j] <= 5
    Each value board[i][j] is unique.
*/

/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(board) {
    
    const boardToStr = (board) => board[0].join('') + board[1].join('');

    const strToBoard = (str) => {
        const arr = str.split('');
        return [ [+arr[0],+arr[1],+arr[2]], [+arr[3],+arr[4],+arr[5]] ];
    }
 
    const win = "123450",  str = boardToStr(board), visited = new Set();

    if(str === win) return 0;

    let queue = [str], count = 0;

    while(queue.length) {

        const next = [];

        for (let i = 0; i < queue.length; i++) {

            if(visited.has(queue[i])) continue;

            visited.add(queue[i]);

            const idx = queue[i].indexOf("0"), x = idx % 3, y = idx > 2 ? 1 : 0, brd = strToBoard(queue[i]);

            for(const [dx, dy] of [[-1,0],[1,0],[0,-1],[0,1]]) {

                if(x + dx > 2 || x + dx < 0) continue;
                if(y + dy > 1 || y + dy < 0) continue;

                const tile = brd[y + dy][x + dx];
                brd[y + dy][x + dx] = 0;
                brd[y][x] = tile;

                const str = boardToStr(brd);

                if(str === win) return count + 1;

                if(!visited.has(str)) next.push(str);

                brd[y + dy][x + dx] = tile;
                brd[y][x] = 0;
            }
        }
        queue = next;
        count++;
    }

    return -1;
};

let board = [[1,2,3],[4,0,5]];
board = [[4,1,2],[5,0,3]];
board = [[1,2,3],[5,4,0]];

console.log(slidingPuzzle(board));