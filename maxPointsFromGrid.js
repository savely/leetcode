/*
#2503. Maximum Number of Points From Grid Queries

You are given an m x n integer matrix grid and an array queries of size k.

Find an array answer of size k such that for each integer queries[i] you start in the top left cell of the matrix and repeat the following process:

    If queries[i] is strictly greater than the value of the current cell that you are in, then you get one point if it is your first time visiting this cell, and you can move to any adjacent cell in all 4 directions: up, down, left, and right.
    Otherwise, you do not get any points, and you end this process.

After the process, answer[i] is the maximum number of points you can get. Note that for each query you are allowed to visit the same cell multiple times.

Return the resulting array answer.

 

Example 1:

Input: grid = [[1,2,3],[2,5,7],[3,5,1]], queries = [5,6,2]
Output: [5,8,1]
Explanation: The diagrams above show which cells we visit to get points for each query.

Example 2:

Input: grid = [[5,2,1],[1,1,2]], queries = [3]
Output: [0]
Explanation: We can not get any points because the value of the top left cell is already greater than or equal to 3.

 

Constraints:

    m == grid.length
    n == grid[i].length
    2 <= m, n <= 1000
    4 <= m * n <= 105
    k == queries.length
    1 <= k <= 104
    1 <= grid[i][j], queries[i] <= 106


*/

const { PriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * @param {number[][]} grid
 * @param {number[]} queries
 * @return {number[]}
 */
var maxPoints = function(grid, queries) {

    const queriesOrder = Array.from(queries, (_, i) => i), m = grid.length, n = grid[0].length;
    queriesOrder.sort((a, b) => queries[a] - queries[b]);

    const disjointSet = Array.from({ length: m * n }, (_, i) => Infinity);

    const find = (a) => {
        if(!isFinite(disjointSet[a])) return Infinity;

        if(disjointSet[a] < 0) return a;

        return find(disjointSet[a]);
    };

    const union = (a, b) => {

        const pa = find(a), pb = find(b);

        if(pa === pb || !isFinite(pa) || !isFinite(pb)) return;

        if(pa < pb) {
            disjointSet[pa] += disjointSet[pb];
            disjointSet[pb] = pa;
        }
        else {
            disjointSet[pb] += disjointSet[pa];
            disjointSet[pa] = pb;
        }
    };

    const getIdx = (i, j) => i * n + j;

    const queue = new PriorityQueue({ compare: ([x1, y1], [x2, y2]) => grid[x1][y1] - grid[x2][y2] });

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            queue.enqueue([i, j]);
        }
    }

    const ans = Array.from(queries, () => 0);

    for(const queryId of queriesOrder) {

        const query = queries[queryId];

        while(queue.size() && query > grid[queue.front()[0]][queue.front()[1]]) {
            const [i, j] = queue.dequeue();
            disjointSet[getIdx(i, j)] = -1;

            if(i > 0) union(getIdx(i, j), getIdx(i - 1, j));
            if(i < m - 1) union(getIdx(i, j), getIdx(i + 1, j));
            if(j > 0) union(getIdx(i, j), getIdx(i, j - 1));
            if(j < n - 1 ) union(getIdx(i, j), getIdx(i, j + 1));
        }

        const rank = disjointSet[find(0)];
        ans[queryId] = !isFinite(rank) ? 0 : -rank;
    }

    return ans;
};

let grid = [[1,2,3],[2,5,7],[3,5,1]], queries = [5,6,2]; // [5,8,1];
grid = [[5,2,1],[1,1,2]], queries = [3]; // [0];

console.log(maxPoints(grid, queries));