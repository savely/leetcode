/*
#948
You have an initial power of P, an initial score of 0, and a bag of tokens where tokens[i] is the value of the ith token (0-indexed).

Your goal is to maximize your total score by potentially playing each token in one of two ways:

If your current power is at least tokens[i], you may play the ith token face up, losing tokens[i] power and gaining 1 score.
If your current score is at least 1, you may play the ith token face down, gaining tokens[i] power and losing 1 score.
Each token may be played at most once and in any order. You do not have to play all the tokens.

Return the largest possible score you can achieve after playing any number of tokens.
*/

/**
 * @param {number[]} tokens
 * @param {number} P
 * @return {number}
 */
var bagOfTokensScore = function(tokens, P) {
    
    tokens = tokens.sort((a,b) => a - b)
    
    let i = 0, j = tokens.length - 1, score = 0, maxScore = 0
    
     while (j >= i) {
         
         while (j >= i && P >= tokens[i]) {
             P -= tokens[i++]
             score++
             maxScore = Math.max(score, maxScore)
         }
         
         while (j >= i && P <= tokens[i]) {
             P += tokens[j--]
             score--
         }
         
     }
    
    return Math.max(0, maxScore)
};

//console.log(bagOfTokensScore([100,200,300,400],200))
//console.log(bagOfTokensScore([26],51))
console.log(bagOfTokensScore([71,55,82],54))