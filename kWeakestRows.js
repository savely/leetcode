/*

# 1337. The K Weakest Rows in a Matrix

You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row.

A row i is weaker than a row j if one of the following is true:

    The number of soldiers in row i is less than the number of soldiers in row j.
    Both rows have the same number of soldiers and i < j.

Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.

 

Example 1:

Input: mat = 
[[1,1,0,0,0],
 [1,1,1,1,0],
 [1,0,0,0,0],
 [1,1,0,0,0],
 [1,1,1,1,1]], 
k = 3
Output: [2,0,3]
Explanation: 
The number of soldiers in each row is: 
- Row 0: 2 
- Row 1: 4 
- Row 2: 1 
- Row 3: 2 
- Row 4: 5 
The rows ordered from weakest to strongest are [2,0,3,1,4].

Example 2:

Input: mat = 
[[1,0,0,0],
 [1,1,1,1],
 [1,0,0,0],
 [1,0,0,0]], 
k = 2
Output: [0,2]
Explanation: 
The number of soldiers in each row is: 
- Row 0: 1 
- Row 1: 4 
- Row 2: 1 
- Row 3: 1 
The rows ordered from weakest to strongest are [0,2,3,1].

 

Constraints:

    m == mat.length
    n == mat[i].length
    2 <= n, m <= 100
    1 <= k <= m
    matrix[i][j] is either 0 or 1.

*/


/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
 var kWeakestRows = function(mat, k) {
    
    const ones = mat.map(row => row.reduce((acc, n) => acc + n), 0);
   
    const check = (n) => ones.reduce((acc, count) => {
       return count > n ? acc : acc + 1;
    }, 0);
   
    let lo = 0, hi = mat[0].length;
   
    while(hi > lo) {
   
        const mid = (hi + lo) / 2 >> 0,count = check(mid);
   
       if(count === k) {
           lo = mid;
           break;
       }
   
       if(count > k) {
   
           if(mid === 0 || check(mid - 1) < k) {
               lo = mid;
             break;
           }
   
           hi = mid - 1;
       } else {
           lo = mid + 1;
       }
    }
   
    let res = [], eq = [];
   
    for(let i = 0; i < ones.length; i++) {
        if(ones[i] < lo) res.push(i);
   
        if(ones[i] === lo) eq.push(i);
    }
   
    for(let i = 0;  i < eq.length && res.length < k; i++) {
        res.push(eq[i]);
    }
       
    res.sort((a, b) => ones[a] - ones[b] || a - b);
   
    return res;
};

let mat = 
[[1,1,0,0,0],
 [1,1,1,1,0],
 [1,0,0,0,0],
 [1,1,0,0,0],
 [1,1,1,1,1]]

//mat = [[1,0],[0,0],[1,0]]

//mat = [[1,1,0],[1,0,0],[1,0,0],[1,1,1],[1,1,0],[0,0,0]]

/*mat = [[1,1,1,1,1],
       [1,0,0,0,0],
       [1,1,0,0,0],
       [1,1,1,1,0],
       [1,1,1,1,1]];*/

mat = [[1,1,1,1,0,0],[1,0,0,0,0,0],[1,1,1,1,1,1]];

mat = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,1,1,0],[0,0,0,0]];
 
console.log(kWeakestRows(mat, 3));