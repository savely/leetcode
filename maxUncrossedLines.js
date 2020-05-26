/*
Share
We write the integers of A and B (in the order they are given) on two separate horizontal lines.

Now, we may draw connecting lines: a straight line connecting two numbers A[i] and B[j] such that:

A[i] == B[j];
The line we draw does not intersect any other connecting (non-horizontal) line.
Note that a connecting lines cannot intersect even at the endpoints: each number can only belong to one connecting line.

Return the maximum number of connecting lines we can draw in this way.
*/
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var maxUncrossedLines = function(A, B) {

    if(A.length === 0 || B.length === 0) return 0
 
   const dp  = new Array(A.length+1).fill(0).map(_ => new Array(B.length+1).fill(0))

    for(let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            if(A[i] === B[j]) {
              dp[i+1][j+1] = 1 + dp[i][j] 
            } else {
                dp[i+1][j+1] = Math.max(dp[i+1][j], dp[i][j+1]) 
            }
        }
    }

    return dp[A.length][B.length]
};