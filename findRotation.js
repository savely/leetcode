/*
#1886. Determine Whether Matrix Can Be Obtained By Rotation

Given two n x n binary matrices mat and target, return true if it is possible to make mat equal to target by rotating mat in 90-degree increments, or false otherwise.

 

Example 1:


Input: mat = [[0,1],[1,0]], target = [[1,0],[0,1]]
Output: true
Explanation: We can rotate mat 90 degrees clockwise to make mat equal target.
Example 2:


Input: mat = [[0,1],[1,1]], target = [[1,0],[0,1]]
Output: false
Explanation: It is impossible to make mat equal to target by rotating mat.
Example 3:


Input: mat = [[0,0,0],[0,1,0],[1,1,1]], target = [[1,1,1],[0,1,0],[0,0,0]]
Output: true
Explanation: We can rotate mat 90 degrees clockwise two times to make mat equal target.
 

Constraints:

n == mat.length == target.length
n == mat[i].length == target[i].length
1 <= n <= 10
mat[i][j] and target[i][j] are either 0 or 1.
*/

/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
 var findRotation = function(mat, target) {
    
    const n = mat.length - 1;
    
    let turn0 = true, turn1 = true, turn2 = true, turn3 = true;
    
    
    for(let i = 0; i <= n; i++) {
        for(let j = 0; j <= n; j++) {
            
            const cell = mat[i][j];
            
            turn0 &= cell === target[i][j];
            turn1 &= cell === target[n - i][n - j];
            turn2 &= cell === target[j][n - i];
            turn3 &= cell === target[n - j][i];
            
            if(turn0 || turn1 || turn2 || turn3) continue;
            
            return false;
        }
    }
    return true;
};
let mat     = [[1,1,1],
               [1,0,0],
               [0,0,0]];
let target  = [[1,0,0],
               [1,0,0],
               [1,1,0] ];

/*mat = [[1,1],
      [0,0]];
target = [[0,1],
          [0,1]];*/
/*
mat = [[0,1],
       [0,1]];
target = [[0,0],
          [1,1]]; */         
          
console.log(findRotation(mat, target));