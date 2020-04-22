var uniquePaths = function(m, n) {
    const dp = Array(m).fill(0).map(_ => {return Array(n).fill(0)})

    for(let i = 1; i < m; i++) {
        dp[i][0] = 1
       }

    for(let i = 1; i < n; i++) {
        dp[0][i] = 1
    } 

    for(let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1]  
        }
    }
    
    return dp[m-1][n-1]

};

const uniquePathsOpt = function(m, n) {
    const dp = Array(n).fill(1)
}  

var uniquePathsWithObstacles = function(obstacleGrid) {
    const dp = obstacleGrid
    
    const m = dp.length
    const n = dp[0].length
    
    if(dp[0][0] === 1 ||  dp[m-1][n-1] === 1) return 0
    
    if(m === 1 && n === 1) return 1

    let dist = 1

    for(let i = 1; i < m; i++) {
        if(dp[i][0] === 1) {
           dist = 0
        }

        dp[i][0] = dist
       }
    
    dist = 1

    for(let i = 1; i < n; i++) {
        if(dp[0][i] === 1) {
           dist = 0 
         }
        dp[0][i] = dist
    } 

    for(let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if(dp[i][j] === 1) {
                dp[i][j] = 0
                continue 
            }
            dp[i][j] = dp[i-1][j] + dp[i][j-1]  
        }
    }
    return dp[m-1][n-1]
};

const grid = [
    [0,0,0],
    [0,1,0],
    [0,0,0]
  ]

  const grid2 = [
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [1,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [1,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,1],
  [0,0],
  [0,0],
  [1,0],
  [0,0],
  [0,0],
  [0,1],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,1],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [1,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0]];

  const grid3 = [[0,1],
                 [0,0]]


//console.log(uniquePaths(3,3))

console.log(uniquePathsWithObstacles(grid3))