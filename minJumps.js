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
    
    const dp = new Array(6001).fill(1).map((_,i) => i > b ? 1 : 0)


    const back = 0, fwd = 1



    for(const pos of forbidden) {
        dp[pos] = -2
    }

    const visitPos = (pos, jumps, dir = fwd) => {
       
        if(pos === x) return jumps;
        
        if(dp[pos] < 0 || pos >= dp.length) return -1

        dp[pos] -= 1
        let  max = Math.max(-1, visitPos(pos+a, jumps+1))


        if(dir === fwd && dp[pos] >= 0) {
        dp[pos] -= 1
        max = Math.max(max, visitPos(pos-b, jumps+1, back))
       }

        return max
    }


   return visitPos(a, 1)
};

let forbidden = [162,118,178,152,167,100,40,74,199,186,26,73,200,127,30,124,193,84,184,36,103,149,153,9,54,154,133,95,45,198,79,157,64,122,59,71,48,177,82,35,14,176,16,108,111,6,168,31,134,164,136,72,98]
let a = 29
let b = 98
let x = 80

//forbidden = [14,4,18,1,15], a = 3, b = 15, x = 9
//forbidden = [1,6,2,14,5,17,4], a = 16, b = 9, x = 7
//forbidden = [8,3,16,6,12,20], a = 15, b = 13, x = 11
//forbidden = [128,178,147,165,63,11,150,20,158,144,136], a = 61, b = 170, x = 135

console.log(minimumJumps([], a, b, x))