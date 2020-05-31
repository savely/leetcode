/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {

    if(word1.length === 0) return word2.length

    if(word2.length === 0) return word1.length
    
    const dp = new Array(word1.length + 1).fill(0).map(_ => new Array(word2.length + 1).fill(0))

    for(let i = 0; i < dp.length; i++) {
        dp[i][0] = i
    }

    for(let i = 0; i < dp[0].length; i++) {
        dp[0][i] = i
    }

    for (let i = 0; i < word1.length; i++) {
        for(let j = 0; j < word2.length; j++) {
            if(word1[i] === word2[j]) {
                dp[i+1][j+1] = dp[i][j]
                continue
            } 
            dp[i+1][j+1] = Math.min(dp[i][j], dp[i][j+1], dp[i+1][j]) + 1
        }
    }

   return dp[word1.length][word2.length]
};