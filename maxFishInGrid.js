/*
#2658. Maximum Number of Fish in a Grid

You are given a 0-indexed 2D matrix grid of size m x n, where (r, c) represents:

    A land cell if grid[r][c] = 0, or
    A water cell containing grid[r][c] fish, if grid[r][c] > 0.

A fisher can start at any water cell (r, c) and can do the following operations any number of times:

    Catch all the fish at cell (r, c), or
    Move to any adjacent water cell.

Return the maximum number of fish the fisher can catch if he chooses his starting cell optimally, or 0 if no water cell exists.

An adjacent cell of the cell (r, c), is one of the cells (r, c + 1), (r, c - 1), (r + 1, c) or (r - 1, c) if it exists.

 

Example 1:

Input: grid = [[0,2,1,0],[4,0,0,3],[1,0,0,4],[0,3,2,0]]
Output: 7
Explanation: The fisher can start at cell (1,3) and collect 3 fish, then move to cell (2,3) and collect 4 fish.

Example 2:

Input: grid = [[1,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,1]]
Output: 1
Explanation: The fisher can start at cells (0,0) or (3,3) and collect a single fish. 

 

Constraints:

    m == grid.length
    n == grid[i].length
    1 <= m, n <= 10
    0 <= grid[i][j] <= 100

*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function(grid) {

    const m = grid.length, n = grid[0].length, disjoinSet = [];

    const find = (i) =>  disjoinSet[i] < 0 ?  i : find(disjoinSet[i]);

    const union = (i, j) => {

        const rootI = find(i), rootJ = find(j);

        if(rootI === rootJ) return;

        if(disjoinSet[rootI] < disjoinSet[rootJ]) {
            disjoinSet[rootI] += disjoinSet[rootJ];
            disjoinSet[rootJ] = rootI;
        } else {
            disjoinSet[rootJ] += disjoinSet[rootI];
            disjoinSet[rootI] = rootJ;
        }
    };

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {

            if(grid[i][j] === 0) continue;

            disjoinSet.push(-1 * grid[i][j]);
            grid[i][j] = -1 * disjoinSet.length;
        }
    }

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {

            if(grid[i][j] === 0) continue;

            for(const [r, c] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {

                const dy = i + r, dx = j + c, cell = -1 * (grid[i][j] + 1);

                if(dy < 0 || dy >= m || dx < 0 || dx >= n || grid[dy][dx] === 0) continue;

                union(cell, -1 * (grid[dy][dx] + 1));
            }
        }
    }
    
    return -1 * Math.min(0, ...disjoinSet);
};
