/*
#1926. Nearest Exit from Entrance in Maze

ou are given an m x n matrix maze (0-indexed) with empty cells (represented as '.') and walls (represented as '+'). You are also given the entrance of the maze, where entrance = [entrancerow, entrancecol] denotes the row and column of the cell you are initially standing at.

In one step, you can move one cell up, down, left, or right. You cannot step into a cell with a wall, and you cannot step outside the maze. Your goal is to find the nearest exit from the entrance. An exit is defined as an empty cell that is at the border of the maze. The entrance does not count as an exit.

Return the number of steps in the shortest path from the entrance to the nearest exit, or -1 if no such path exists.

 

Example 1:


Input: maze = [["+","+",".","+"],[".",".",".","+"],["+","+","+","."]], entrance = [1,2]
Output: 1
Explanation: There are 3 exits in this maze at [1,0], [0,2], and [2,3].
Initially, you are at the entrance cell [1,2].
- You can reach [1,0] by moving 2 steps left.
- You can reach [0,2] by moving 1 step up.
It is impossible to reach [2,3] from the entrance.
Thus, the nearest exit is [0,2], which is 1 step away.
Example 2:


Input: maze = [["+","+","+"],[".",".","."],["+","+","+"]], entrance = [1,0]
Output: 2
Explanation: There is 1 exit in this maze at [1,2].
[1,0] does not count as an exit since it is the entrance cell.
Initially, you are at the entrance cell [1,0].
- You can reach [1,2] by moving 2 steps right.
Thus, the nearest exit is [1,2], which is 2 steps away.
Example 3:


Input: maze = [[".","+"]], entrance = [0,0]
Output: -1
Explanation: There are no exits in this maze.
 

Constraints:

maze.length == m
maze[i].length == n
1 <= m, n <= 100
maze[i][j] is either '.' or '+'.
entrance.length == 2
0 <= entrancerow < m
0 <= entrancecol < n
entrance will always be an empty cell.
*/

/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
 var nearestExit = function(maze, entrance) {
    

    const l = maze.length - 1, w = maze[0].length - 1;

    let queue = [entrance], dist = 0;

    while(queue.length) {

         const next = [];

         while(queue.length) {

            const [x, y] = queue.shift();

            maze[x][y] = '+';

            for([m, n] of [[x-1, y],[x+1,y], [x, y-1], [x,y+1]]) {

                if(m < 0 || m > l) continue;
                if(n < 0 || n > w) continue;
                if(maze[m][n] === '+') continue;

                if(m === 0 || m === l || n === 0 || n === w) return dist + 1;

                next.push([m, n]);
            }
         }

         queue.push(...next);
         dist++;
    }

    return -1;
};

let maze = [["+","+",".","+"],[".",".",".","+"],["+","+","+","."]], entrance = [1,2];
maze = [["+","+","+"],[".",".","."],["+","+","+"]], entrance = [1,0];
maze = [[".","+"]], entrance = [0,0];

maze = [["+",".","+","+","+","+","+"],
        ["+",".","+",".",".",".","+"],
        ["+",".","+",".","+",".","+"],
        ["+",".",".",".","+",".","+"],
        ["+","+","+","+","+",".","+"]];
entrance = [0,1];


console.log(nearestExit(maze, entrance));