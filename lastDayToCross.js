/*
1970. Last Day Where You Can Still Cross

There is a 1-based binary matrix where 0 represents river and 1 represents water. You are given integers row and col representing the number of rows and columns in the matrix, respectively.

Initially on day 0, the entire matrix is river. However, each day a new cell becomes flooded with water. You are given a 1-based 2D array cells, where cells[i] = [ri, ci] represents that on the ith day, the cell on the rith row and cith column (1-based coordinates) will be covered with water (i.e., changed to 1).

You want to find the last day that it is possible to walk from the top to the bottom by only walking on river cells. You can start from any cell in the top row and end at any cell in the bottom row. You can only travel in the four cardinal directions (left, right, up, and down).

Return the last day where it is possible to walk from the top to the bottom by only walking on river cells.

 

Example 1:


Input: row = 2, col = 2, cells = [[1,1],[2,1],[1,2],[2,2]]
Output: 2
Explanation: The above image depicts how the matrix changes each day starting from day 0.
The last day where it is possible to cross from top to bottom is on day 2.
Example 2:


Input: row = 2, col = 2, cells = [[1,1],[1,2],[2,1],[2,2]]
Output: 1
Explanation: The above image depicts how the matrix changes each day starting from day 0.
The last day where it is possible to cross from top to bottom is on day 1.
Example 3:


Input: row = 3, col = 3, cells = [[1,2],[2,1],[3,3],[2,2],[1,1],[1,3],[2,3],[3,2],[3,1]]
Output: 3
Explanation: The above image depicts how the matrix changes each day starting from day 0.
The last day where it is possible to cross from top to bottom is on day 3.
 

Constraints:

2 <= row, col <= 2 * 104
4 <= row * col <= 2 * 104
cells.length == row * col
1 <= ri <= row
1 <= ci <= col
All the values of cells are unique.
*/

const createSet = () => {

    const root = { rank : 0 };

    root.parent = root;

    return root;
}

const find = (node) => {

     if(node.parent === node) return node;

     const parent = find(node.parent);

     if(node.parent !== parent) node.parent === parent;

     return parent;
}

const union = (node1, node2) => {

    const root1 = find(node1), root2 = find(node2); 

    if(root1 === root2) return;

    if(root1.rank >= root2.rank) {
        root2.parent = root1;
        root1.rank += root1.rank === root2.rank ? 1 : 0;
    } else {
        root1.parent = root2;
    }
}

/**
 * @param {number} row
 * @param {number} col
 * @param {number[][]} cells
 * @return {number}
 */
 var latestDayToCross = function(row, col, cells) {

 
    const river = new Map();

    const left = createSet(), right = createSet();

    const connect = (i, j) => {

        if(!river.has(`${i},${j}`)) {
            river.set(`${i},${j}`, createSet());
        }

        const node = river.get(`${i},${j}`);
       
        for(const [m, n] of [[i + 1, j], [i + 1, j + 1], [i + 1, j - 1],
                             [i - 1, j], [i - 1, j + 1], [i - 1, j - 1], 
                             [i, j + 1], [i, j - 1]]) {

            const hash = `${m},${n}`;

            if(river.has(hash)) {
                union(node, river.get(hash));
            }
        }

        return node;
    };


    for(let i = 0; i < cells.length; i++) {

        const [m, n] = cells[i], node = connect(m, n);

        if(n === 1) union(left, node);

        if(n === col) union(right, node);

        if(find(left) === find(right)) return i;
    }

    return cells.length;
};

let row = 2, col = 2, cells = [[1,1],[2,1],[1,2],[2,2]];
row = 2, col = 2, cells = [[1,1],[1,2],[2,1],[2,2]];
row = 3, col = 3, cells = [[1,2],[2,1],[3,3],[2,2],[1,1],[1,3],[2,3],[3,2],[3,1]];

console.log(latestDayToCross(row, col, cells));