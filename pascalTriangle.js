/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    const nextRow = function (row) {
        let nr = [1];
        for (let i = 0; i < (row.length - 1); i++) {
            nr.push(row[i] + row[i + 1]);
        }
        nr.push(1);
        return nr;
    };
    if (numRows === 0)
        return [];
    let res = [[1]];
    for (let i = 1; i <= numRows; i++) {
        res[i] = nextRow(res[i - 1]);
    }
    return res;
};
var generate2 = function (numRows) {
    const triangle = [];
    triangle[numRows - 1] = [];
    const pas = function (i, j) {
        if (typeof triangle[i] === 'undefined') {
            triangle[i] = [];
        }
        if (typeof triangle[i][j] !== 'undefined')
            return triangle[i][j];
        if (i === 0 || j === 0 || j === i - 1) {
            triangle[i][j] = 1;
        }
        else {
            triangle[i][j] = pas(i - 1, j - 1) + pas(i - 1, j);
        }
    };
    for (let k = 0; k < numRows; k++) {
        triangle[numRows - 1][k] = pas(numRows - 1, k);
    }
    return triangle;
};
console.log(generate(3));
//# sourceMappingURL=pascalTriangle.js.map