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
    
    forbidden = new Set(forbidden)
    
    if(forbidden.has(0)) return -1
    
    const dp = [[a,1,true]]
    
    while(dp.length) {
        
            const nextDp = []
            
        while(dp.length) {

        const [pos, jumps, canJumpBack]  = dp.pop()

        if(pos === x) return jumps
        
        if(forbidden.has(pos) || !canJumpBack && pos >x || pos > 6000) continue;
        
        if(!forbidden.has(pos+a)){
           nextDp.push([pos+a, jumps+1, true])    
        }
        
        if(canJumpBack && pos - b > 0 && !forbidden.has(pos - b)) {
            nextDp.push([pos-b, jumps+1, false])
        }
            
        forbidden.add(pos);           
      }
        dp.push(...nextDp)
    }
    
    return -1
};

let forbidden = [162,118,178,152,167,100,40,74,199,186,26,73,200,127,30,124,193,84,184,36,103,149,153,9,54,154,133,95,45,198,79,157,64,122,59,71,48,177,82,35,14,176,16,108,111,6,168,31,134,164,136,72,98]
let a = 29
let b = 98
let x = 80

console.log(minimumJumps([], a, b, x))