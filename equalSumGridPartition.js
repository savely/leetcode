/*
#3548. Equal Sum Grid Partition II

You are given an m x n matrix grid of positive integers. Your task is to determine if it is possible to make either one horizontal or one vertical cut on the grid such that:

    Each of the two resulting sections formed by the cut is non-empty.
    The sum of elements in both sections is equal, or can be made equal by discounting at most one single cell in total (from either section).
    If a cell is discounted, the rest of the section must remain connected.

Return true if such a partition exists; otherwise, return false.

Note: A section is connected if every cell in it can be reached from any other cell by moving up, down, left, or right through other cells in the section.

 

Example 1:

Input: grid = [[1,4],[2,3]]

Output: true

    let top = 0, bottom = total;

    for(let i = 0; i < n; i++) {
        top += rows[i];
        bottom -= rows[i];
        //for row to remain connected we only allowed to delete first or last row element
        if(top === bottom || top - grid[i][0] === bottom || top - grid[i][m - 1] === bottom) return true;
    }

    top = total, bottom = 0;

    for(let i = n - 1; i >= 0; i--) {
        top -= rows[i];
        bottom += rows[i];

        if(bottom - grid[i][0] === top || bottom - grid[i][m - 1] === top) return true;
    }

    let left = 0, right = total;

    for(let i = 0; i < m; i++) {
        left += cols[i];
        right -= cols[i];
        //for column to remain connected we only allowed to delete top or bottom column element
        if(left === right || left - grid[0][i] === right || left - grid[n - 1][i]) return true;
    }

    left = total, right = 0;

    for(let i = m - 1; i >= 0; i--) {
        left -= cols[i];
        right += cols[i];

        if(right - grid[0][i] === left || right - grid[n - 1][i] === left) return true;
    }
    
    return false;


    A horizontal cut after the first row gives sums 1 + 4 = 5 and 2 + 3 = 5, which are equal. Thus, the answer is true.

Example 2:

Input: grid = [[1,2],[3,4]]

Output: true

Explanation:

    A vertical cut after the first column gives sums 1 + 3 = 4 and 2 + 4 = 6.
    By discounting 2 from the right section (6 - 2 = 4), both sections have equal sums and remain connected. Thus, the answer is true.

Example 3:

Input: grid = [[1,2,4],[2,3,5]]

Output: false

Explanation:

    A horizontal cut after the first row gives 1 + 2 + 4 = 7 and 2 + 3 + 5 = 10.
    By discounting 3 from the bottom section (10 - 3 = 7), both sections have equal sums, but they do not remain connected as it splits the bottom section into two parts ([2] and [5]). Thus, the answer is false.

Example 4:

Input: grid = [[4,1,8],[3,2,6]]

Output: false

Explanation:

No valid cut exists, so the answer is false.

 

Constraints:

    1 <= m == grid.length <= 105
    1 <= n == grid[i].length <= 105
    2 <= m * n <= 105
    1 <= grid[i][j] <= 105


*/

var canPartitionGrid = function(grid) {
    
    const n = grid.length, m = grid[0].length;
    const rows = new Uint32Array(n), cols = new Uint32Array(m);
    const leftMost = new Map(), rightMost = new Map();
    const topMost = new Map(), bottomMost = new Map();

    let total = 0;

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            rows[i] += grid[i][j];
            cols[j] += grid[i][j];
            total += grid[i][j];

            if(!leftMost.has(grid[i][j])) leftMost.set(grid[i][j], j);
            if(!topMost.has(grid[i][j])) topMost.set(grid[i][j], i);
            rightMost.set(grid[i][j], j);
            bottomMost.set(grid[i][j], i);
        }
    }

    let top = 0, bottom = total;

    for(let i = 0; i < n; i++) {
        top += rows[i];
        bottom -= rows[i];

        const diff = top - bottom;

        if(diff === 0) return true;

        if(diff > 0) {

            if (grid[0][0] === diff || grid[0][m - 1] === diff) {
                return true;
            }

            if(i > 0 && (topMost.get(diff) || Infinity) <= i) {
                return true;
            } 
        } else {

            if (grid[n - 1][0] === (-1 * diff) || grid[n - 1][m - 1] === -1 * diff) {
                return true;
            }

            if(i < n - 2 && ((bottomMost.get(-1 * diff) || -Infinity) >= i)) {
                return true;
            }
        }
    }

    let left = 0, right = total;

    for(let i = 0; i < m; i++) {
        left += cols[i];
        right -= cols[i];

        const diff = left - right;

        if(diff === 0) return true;

        if(diff > 0) {
            if (grid[0][i] === diff || grid[n - 1][i] === diff) {
                return true;
            }
            if(i > 0 && (leftMost.get(diff) || Infinity) <= i) {
                return true;
            } 
        } else {
            if (grid[0][m - 1] === (-1 * diff) || grid[n - 1][m - 1] === (-1 * diff)) {
                return true;
            }

            if(i < m - 2 && ((rightMost.get(-1 * diff) || -Infinity) >= i)) {
                return true;
            }
        }
    }

    return false;
};

let grid = [[1,4],[2,3]]; // true
//grid = [[1,2],[3,4]]; // true
grid = [[1,2,4],[2,3,5]]; // false
grid = [[4,1,8],[3,2,6]]; // false
grid = [[1,2,4],[2,5,3]]; // true

console.table(grid);
console.log(canPartitionGrid(grid));

