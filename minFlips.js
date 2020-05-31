/**
 * @param {string} S
 * @return {number}
 */
var minFlipsMonoIncr = function(S) {

    let leftOnes = Array.from(S).reduce((acc, b) => b === '0' ? acc : acc+1, 0), rightZeros = 0
    let minFlips = leftOnes

    for(let i = S.length-1; i >= 0; i--) {
        if(S[i] === '1') {
            leftOnes--
        } else {
            rightZeros++
        }
        minFlips = Math.min(minFlips, leftOnes + rightZeros)
    }

    return minFlips
};