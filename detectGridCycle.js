/*
#1559 Detect Cycles in 2D Grid

Given a 2D array of characters grid of size m x n, you need to find if there exists any cycle consisting of the same value in grid.

A cycle is a path of length 4 or more in the grid that starts and ends at the same cell. From a given cell, you can move to one of the cells adjacent to it - in one of the four directions (up, down, left, or right), if it has the same value of the current cell.

Also, you cannot move to the cell that you visited in your last move. For example, the cycle (1, 1) -> (1, 2) -> (1, 1) is invalid because from (1, 2) we visited (1, 1) which was the last visited cell.

Return true if any cycle of the same value exists in grid, otherwise, return false.

Example 1:

Input: grid = [["a","a","a","a"],["a","b","b","a"],["a","b","b","a"],["a","a","a","a"]]
Output: true
Explanation: There are two valid cycles shown in different colors in the image below:

Example 2:

Input: grid = [["c","c","c","a"],["c","d","c","c"],["c","c","e","c"],["f","c","c","c"]]
Output: true
Explanation: There is only one valid cycle highlighted in the image below:

Example 3:

Input: grid = [["a","b","b"],["b","z","b"],["b","b","a"]]
Output: false

 

Constraints:

    m == grid.length
    n == grid[i].length
    1 <= m, n <= 500
    grid consists only of lowercase English letters.

*/

/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var containsCycle = function(grid) {
    
    const visited = Array.from({ length: grid.length }, () => new Array(grid[0].length).fill(false));

    const bfs = (i, j, fromI, fromJ) => {
        const queue = [[i, j, fromI, fromJ]];
        const val = grid[i][j];
        visited[i][j] = true;

        while(queue.length) {
            const [x, y, fromX, fromY] = queue.shift();

            for(const [dx, dy] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
                const newX = x + dx;
                const newY = y + dy;

                if(newX < 0 || newX >= grid.length || newY < 0 || newY >= grid[0].length || grid[newX][newY] !== val) continue;

                if(newX === fromX && newY === fromY) continue;                

                if(visited[newX][newY]) return true;

                visited[newX][newY] = true;
                queue.push([newX, newY, x, y]);
            }
        }

        return false;
    };

    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(!visited[i][j] && bfs(i, j, -1, -1)) return true;
        }
    }

    return false;   
};