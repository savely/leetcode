/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let div = 5
    let count = 0

    while(Math.floor(n/div) > 0) {
        count += Math.floor(n/div)
        div *= 5 
    }
    return count
};