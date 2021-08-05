/*
#1391. Check if There is a Valid Path in a Grid

Given a m x n grid. Each cell of the grid represents a street. The street of grid[i][j] can be:
1 which means a street connecting the left cell and the right cell.
2 which means a street connecting the upper cell and the lower cell.
3 which means a street connecting the left cell and the lower cell.
4 which means a street connecting the right cell and the lower cell.
5 which means a street connecting the left cell and the upper cell.
6 which means a street connecting the right cell and the upper cell.


You will initially start at the street of the upper-left cell (0,0). A valid path in the grid is a path which starts from the upper left cell (0,0) and ends at the bottom-right cell (m - 1, n - 1). The path should only follow the streets.

Notice that you are not allowed to change any street.

Return true if there is a valid path in the grid or false otherwise.

 

Example 1:


Input: grid = [[2,4,3],[6,5,2]]
Output: true
Explanation: As shown you can start at cell (0, 0) and visit all the cells of the grid to reach (m - 1, n - 1).
Example 2:


Input: grid = [[1,2,1],[1,2,1]]
Output: false
Explanation: As shown you the street at cell (0, 0) is not connected with any street of any other cell and you will get stuck at cell (0, 0)
Example 3:

Input: grid = [[1,1,2]]
Output: false
Explanation: You will get stuck at cell (0, 1) and you cannot reach cell (0, 2).
Example 4:

Input: grid = [[1,1,1,1,1,1,3]]
Output: true
Example 5:

Input: grid = [[2],[2],[2],[2],[2],[2],[6]]
Output: true
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 300
1 <= grid[i][j] <= 6
*/

/**
 * @param {number[][]} grid
 * @return {boolean}
 */
 var hasValidPath = function(grid) {
    
    const valid = {
            1 : {'l': [1,4,6], 'r' : [1,3,5]},
            2 : {'u': [2,3,4], 'd' : [2,5,6]},
            3 : {'l' : [1,4,6], 'd' : [2,5,6]},
            4 : {'r' : [1,3,5], 'd' : [2,5,6]},
            5 : {'u' : [2,3,4], 'l' : [1,4,6]},
            6 : {'u' : [2,3,4], 'r' : [1,3,5]}
    };

    if(grid.length < 2 && grid[0].length < 2) return true;
    
    let queue = [[0,0]];

    const visited = new Set(["0,0"]);    

    const getNeighbour = (i, j, dir) => {

        if(dir === 'u') {
            return i > 0 && !visited.has(`${i - 1},${j}`) ? [i - 1, j] : null;
        }  
        if(dir === 'd') {
            return i < grid.length - 1 && !visited.has(`${i + 1},${j}`) ? [i + 1, j] : null;
        } 
        if(dir === 'l') {
            return j > 0 && !visited.has(`${i},${j - 1}`) ? [i, j - 1] : null;
        } 
        if(dir === 'r') {
            return  j < grid[0].length - 1 && !visited.has(`${i},${j + 1}`) ? [i, j + 1] : null;
        } 
    }

    while(queue.length) {

        const [i, j] = queue.pop(), type = grid[i][j], validMoves = valid[type];

        for(const dir  in validMoves) {

            const allowedTypes = validMoves[dir];

            const neighbour = getNeighbour(i, j, dir);

            if(neighbour === null) continue;

            const [x, y] = neighbour, neighbourType = grid[x][y];

            if(!allowedTypes.includes(neighbourType)) continue;

            if(x === grid.length - 1 && y === grid[0].length - 1) return true;

            queue.unshift([x, y]);

            visited.add(`${x},${y}`);
        }

    }

    return false;
};