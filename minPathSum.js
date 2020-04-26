var minPathSum = function(grid) {
    
    const m = grid.length
    const n = grid[0].length

    for(let i = 1; i < m; i++) {
        grid[i][0] += grid[i-1][0]
       }

    for(let i = 1; i < n; i++) {
        grid[0][i] += grid[0][i-1]
    }  
    
    for(let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            grid[i][j] += Math.min(grid[i-1][j], grid[i][j-1])  
        }
    }    
      return grid[m-1][n-1]
};

const grid = [
    [1,3,10,3],
    [1,5,1,34],
    [4,2,8,1]
  ];

console.log(minPathSum(grid))