/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} x, y
 *     @return {integer}
 *     this.get = function(x, y) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function(binaryMatrix) {

    const [rows, cols] = binaryMatrix.dimensions()

    let i = 0, j = cols-1

    while(i < rows && j >= 0) {
        if(binaryMatrix.get(i,j) == 0) {
            i++
        } else {
            j--
        }
    }

    return (j === cols-1) ? -1 : j + 1
};