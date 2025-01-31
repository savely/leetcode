/*
#827. Making A Large Island

You are given an n x n binary matrix grid. You are allowed to change at most one 0 to be 1.

Return the size of the largest island in grid after applying this operation.

An island is a 4-directionally connected group of 1s.

 

Example 1:

Input: grid = [[1,0],[0,1]]
Output: 3
Explanation: Change one 0 to 1 and connect two 1s, then we get an island with area = 3.
Example 2:

Input: grid = [[1,1],[1,0]]
Output: 4
Explanation: Change the 0 to 1 and make the island bigger, only one island with area = 4.
Example 3:

Input: grid = [[1,1],[1,1]]
Output: 4
Explanation: Can't change any 0 to 1, only one island with area = 4.
 

Constraints:

n == grid.length
n == grid[i].length
1 <= n <= 500
grid[i][j] is either 0 or 1.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {

    const n = grid.length, m = grid[0].length, disjointSet = [];

    const find = (i) => disjointSet[i] < 0 ? i : find(disjointSet[i]);

    const union = (i, j) => {

        const ri = find(i), rj = find(j);

        if(ri === rj) return;

        if(disjointSet[ri] < disjointSet[rj]) {
            disjointSet[ri] += disjointSet[rj];
            disjointSet[rj] = ri;
        } else {
            disjointSet[rj] += disjointSet[ri];
            disjointSet[ri] = rj;
        }
    };

    const ordinal = (i, j) => -1 * (grid[i][j] + 1);

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {

            if(grid[i][j] === 0) continue;

            disjointSet.push(-1);
            grid[i][j] = -1 * disjointSet.length;
        }
    }

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {

            if(grid[i][j] === 0) continue;

            for(const [r, c] of [[i + 1, j], [i, j + 1], [i - 1, j], [i, j - 1]]) {

                if(r < 0 || r >= n || c < 0 || c >= m || grid[r][c] === 0) continue;

                union(ordinal(i,j), ordinal(r,c));
            }
        }
    }


    let maxIsland = -1 * Math.min(...disjointSet);

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {

            if(grid[i][j] !== 0) continue;

            const set = new Set();

            for(const [r, c] of [[i + 1, j], [i, j + 1], [i - 1, j], [i, j - 1]]) {

                if(r < 0 || r >= n 
                    || c < 0 || c >= m 
                    || grid[r][c] === 0 ) continue;

                set.add(find(ordinal(r,c)));
            }

            let currIsland = 0;

            for(const component of set) {
                currIsland += -1 * disjointSet[component]
            }

            maxIsland = Math.max(maxIsland, currIsland + 1);
        }
    }

    return maxIsland;
};
