/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
     
    const n = matrix.length 
    const m = matrix
    
    if(n < 2) return 
    
    const swap = function (i,j,n,k) {
        const t = m[i][j]
        m[i][j] = m[n][k]
        m[n][k] = t
    }
    
    for (let i = 0; i < Math.floor(n/2); i++) {
        for (let j =0; j < n ; j++) {
          swap(n-1-i,j,i,j)
        }
    }
    
    for(let i = 0; i < n; i++) {
        for(let j = i; j < n; j++) {
            swap(i,j,j,i);
        }
    }
};

const m = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ]

rotate(m)
console.log(m)