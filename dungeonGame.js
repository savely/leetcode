/*
#174. Dungeon Game

The demons had captured the princess and imprisoned her in the bottom-right corner of a dungeon. The dungeon consists of m x n rooms laid out in a 2D grid. Our valiant knight was initially positioned in the top-left room and must fight his way through dungeon to rescue the princess.

The knight has an initial health point represented by a positive integer. If at any point his health point drops to 0 or below, he dies immediately.

Some of the rooms are guarded by demons (represented by negative integers), so the knight loses health upon entering these rooms; other rooms are either empty (represented as 0) or contain magic orbs that increase the knight's health (represented by positive integers).

To reach the princess as quickly as possible, the knight decides to move only rightward or downward in each step.

Return the knight's minimum initial health so that he can rescue the princess.

Note that any room can contain threats or power-ups, even the first room the knight enters and the bottom-right room where the princess is imprisoned.

 

Example 1:

Input: dungeon = [[-2,-3,3],[-5,-10,1],[10,30,-5]]
Output: 7
Explanation: The initial health of the knight must be at least 7 if he follows the optimal path: RIGHT-> RIGHT -> DOWN -> DOWN.

Example 2:

Input: dungeon = [[0]]
Output: 1

 

Constraints:

    m == dungeon.length
    n == dungeon[i].length
    1 <= m, n <= 200
    -1000 <= dungeon[i][j] <= 1000

*/

/**
 * @param {number[][]} dungeon
 * @return {number}
 */
 var calculateMinimumHP = function(dungeon) {

    const r = dungeon.length - 1, c = dungeon[0].length - 1;

    const dp = new Array(r + 1).fill(0).map(_ => new Array(c + 1).fill(0));

    dp[r][c] = Math.min(0, dungeon[r][c]);

    for(let i =  c - 1;i >= 0; i--) {
        dp[r][i] = Math.min(0, dp[r][i + 1] + dungeon[r][i]);
    }

    for(let i =  r - 1;i >= 0; i--) {
        dp[i][c] += Math.min(0, dp[i + 1][c] + dungeon[i][c]);
    }


    for(let i = r - 1; i >= 0; i--) {
        for(let j =  c - 1; j >= 0; j--) {

            dp[i][j] = Math.min(0, dungeon[i][j] + Math.max(dp[i + 1][j], dp[i][j + 1]));   
        }
    }
    
    return -1 * dp[0][0] + 1;
};