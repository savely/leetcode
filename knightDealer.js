/*
#
*/

/**
 * @param {number} n
 * @return {number}
 */
 var knightDialer = function(n) {
    
    const modulo = 10 ** 9 + 7
   
    const allowedJumps = [[4,6], [6,8], [7,9], 
                          [4,8], [0,3,9], [],
                          [0,1,7], [2,6], [1,3], [2,4]];

    const dp = new Array(2).fill(0).map(_ => new Array(10).fill(0))
    
    for(let j = 0; j < 10; j++) {
        dp[0][j] = 1
    }
    
    for(let i = 1; i < n; i++) {
        for(let j = 0; j < 10; j++){

            const row = i % 2, prev = row === 0 ? 1 : 0

            const jumps = allowedJumps[j]
            let moves = 0

            for(const jump of jumps) {
                moves = moves + dp[prev][jump] 
            }
            dp[row][j] = moves % modulo
        }
    }
    let ans = 0, row = n % 2 ? 0 : 1    
    
    for(let j = 0; j < 10; j++) {
        ans = (ans + dp[row][j]) 
    }

    return ans % modulo
};

console.log(knightDialer(100))

