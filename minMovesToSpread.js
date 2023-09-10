/*
#2850. Minimum Moves to Spread Stones Over Grid

You are given a 0-indexed 2D integer matrix grid of size 3 * 3, representing the number of stones in each cell. The grid contains exactly 9 stones, and there can be multiple stones in a single cell.

In one move, you can move a single stone from its current cell to any other cell if the two cells share a side.

Return the minimum number of moves required to place one stone in each cell.

 

Example 1:

Input: grid = [[1,1,0],[1,1,1],[1,2,1]]
Output: 3
Explanation: One possible sequence of moves to place one stone in each cell is: 
1- Move one stone from cell (2,1) to cell (2,2).
2- Move one stone from cell (2,2) to cell (1,2).
3- Move one stone from cell (1,2) to cell (0,2).
In total, it takes 3 moves to place one stone in each cell of the grid.
It can be shown that 3 is the minimum number of moves required to place one stone in each cell.

Example 2:

Input: grid = [[1,3,0],[1,0,0],[1,0,3]]
Output: 4
Explanation: One possible sequence of moves to place one stone in each cell is:
1- Move one stone from cell (0,1) to cell (0,2).
2- Move one stone from cell (0,1) to cell (1,1).
3- Move one stone from cell (2,2) to cell (1,2).
4- Move one stone from cell (2,2) to cell (2,1).
In total, it takes 4 moves to place one stone in each cell of the grid.
It can be shown that 4 is the minimum number of moves required to place one stone in each cell.

 

Constraints:

    grid.length == grid[i].length == 3
    0 <= grid[i][j] <= 9
    Sum of grid is equal to 9.


*/

var minimumMoves = function(grid) {
    
    const emptyCells = [], excessCells = [];
    
    for(let i = 0; i < 3; i++) {
        
        for(let j = 0; j < 3; j++) {
            
            if(grid[i][j] === 0) emptyCells.push([i, j]);
            
            if(grid [i][j] > 1) excessCells.push([i, j]);
        }
    }
    
    let res = Infinity;
    
    for(const empty of permute(emptyCells)) {

        let totalDistance = 0;
        
        const copied = copyGrid(grid);
        
        for(let i = 0; i < empty.length; i++) {
            
            const [l, k] = empty[i];
            
            let distance = 5, sourceX = -1, sourceY = -1;
            
            for(let j = 0; j < excessCells.length; j++) {
                
                const [m, n] = excessCells[j], dist = Math.abs(m - l) + Math.abs(n - k);
                
                if(copied[m][n] > 1 && distance > dist) {
                    
                    distance = dist;
                    [sourceX, sourceY] = [m, n];
                }
            }
            
            totalDistance += distance;
            copied[sourceX][sourceY]--;
        }

        res = Math.min(res, totalDistance);
    }
    
    return res;
};

var permute = function(arr) {
    
    if(arr.length == 0) return [];
    if(arr.length == 1) return [[arr[0]]];
    
    const res = [];
    
     for (let i = 0; i < arr.length; i++) {
         
         const rest = arr.slice(0, i).concat(arr.slice(i + 1, arr.length));

         const restPerm = permute(rest);

         for(const perm of restPerm) {
             res.push([arr[i], ...perm]);
         }

     }
    
    return res;               
};

const copyGrid = function(grid) {

    const copy = [];

    for(const row of grid) copy.push([...row]);

    return copy;
}

let grid = [[1,1,0],[1,1,1],[1,2,1]];
//grid = [[1,3,0],[1,0,0],[1,0,3]];
grid = [[3,2,0],[0,1,0],[0,3,0]];

console.log(minimumMoves(grid));