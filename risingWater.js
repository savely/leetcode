/*
#778. Swim in Rising Water
On an N x N grid, each square grid[i][j] represents the elevation at that point (i,j).

Now rain starts to fall. At time t, the depth of the water everywhere is t. You can swim from a square to another 4-directionally adjacent square if and only if the elevation of both squares individually are at most t. You can swim infinite distance in zero time. Of course, you must stay within the boundaries of the grid during your swim.

You start at the top left square (0, 0). What is the least time until you can reach the bottom right square (N-1, N-1)?

Example 1:

Input: [[0,2],[1,3]]
Output: 3
Explanation:
At time 0, you are in grid location (0, 0).
You cannot go anywhere else because 4-directionally adjacent neighbors have a higher elevation than t = 0.

You cannot reach point (1, 1) until time 3.
When the depth of water is 3, we can swim anywhere inside the grid.
Example 2:

Input: [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]
Output: 16
Explanation:
 0  1  2  3  4
24 23 22 21  5
12 13 14 15 16
11 17 18 19 20
10  9  8  7  6

The final route is marked in bold.
We need to wait until time 16 so that (0, 0) and (4, 4) are connected.
Note:

2 <= N <= 50.
grid[i][j] is a permutation of [0, ..., N*N - 1].

*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var swimInWater = function(grid) {
    
    const n = grid.length - 1;
    
    const neighbours = (i, j, lim) => {
      
      const next = [[i-1,j],[i+1,j], [i,j-1], [i,j+1]], res =[];
      
      for(const [x, y] of next) {
        if(x < 0 || x > n) continue;
        if(y < 0 || y > n) continue;  
        if(grid[x][y] > lim) continue;
        if(visited[x][y]) continue;          
         
          res.push([x,y])
      }
    
    return res;
  };

    const visited = new Array(grid.length).fill(0).map(_ => new Array(grid.length)); 

    const reachable = (lim ) => {
        
        if(grid[0][0] > lim) return false;
        
        visited.map(arr => {arr.fill(false); return arr})
        
        const stack = [[0,0]];
        
        while(stack.length) {
            
            const [i, j] = stack.pop();
            
            if(i === n && j === n) return true;
            
            if(visited[i][j]) continue;
            
            visited[i][j] = true;
            
            stack.push(...neighbours(i, j ,lim));
        }
        
      return false;  
    };

   const start = grid[0][0];
   let lo = Math.max(start, grid[n][n]), hi = (n + 1) ** 2 -1;

  while (hi > lo) {
      
      const mid = Math.trunc((hi + lo) / 2);
      
      if(reachable(mid)) {
          if(!reachable(mid - 1)) return mid;
          hi = mid - 1;
      } else {
        if(reachable(mid + 1)) return mid+1;
         lo = mid + 1;
      }
  }

    return lo;
};