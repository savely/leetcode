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

const first = function(arr, start, end) {

    if(start > end) return -1

    if(start === end) return arr[end] === 1 ? end : -1
    let lo = start
    let hi = end

    while (hi > lo) {
        let mid = Math.floor((hi+lo) / 2)

        if(arr[mid] === 1 && mid === lo) return lo 

        if(arr[mid] === 1 && arr[mid-1] === 0) return mid

        if(arr[mid] === 0) {
           lo = mid+1
        } else {
            hi = mid
        }
    }

    if(hi === lo) return arr[lo] === 1 ? lo : -1
    if(hi - lo === 1) {
        return arr[hi] === 1 && arr[lo] === 0 ? hi : -1
       }
       return -1

}

const f = leftMostColumnWithOne()

console.log(f([1,0,1,1],1,2))