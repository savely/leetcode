/*

*/

/**
 * @param {number[]} forbidden
 * @param {number} a
 * @param {number} b
 * @param {number} x
 * @return {number}
 */
/**
 * @param {number[]} forbidden
 * @param {number} a
 * @param {number} b
 * @param {number} x
 * @return {number}
 */
 var minimumJumps = function(forbidden, a, b, x) {
    
    if(x === 0) return 0
    
    const dp = new Array(x * 2 + 1).fill(1)

    const back = 0, fwd = 1

    dp[0] = 0 

    for(const pos of forbidden) {
        dp[pos] = -2
    }

    const visitPos = (pos, jumps, dir = fwd) => {
       
        if(pos === x) return jumps;
        
        if(dp[pos] < 0) return -1

        let  max = Math.max(-1, visitPos(pos+a, jumps+1))
        dp[pos]--

        if(dir === fwd && dp[pos] > 0)

        max = Math.max(-1, visitPos(pos-a, jumps+1))
        dp[pos]--

        return max
    }



};

let forbidden = [162,118,178,152,167,100,40,74,199,186,26,73,200,127,30,124,193,84,184,36,103,149,153,9,54,154,133,95,45,198,79,157,64,122,59,71,48,177,82,35,14,176,16,108,111,6,168,31,134,164,136,72,98]
let a = 29
let b = 98
let x = 80

console.log(minimumJumps([], a, b, x))