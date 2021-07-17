/**
 * @param {number[][]} grid
 * @return {number}
 */
 var getMaximumGold = function(grid) {
    
    const height = grid.length, width = grid[0].length
    
    const collect = (x, y) => {
        
        if(grid[x][y] === 0) return 0
        
        let gold = grid[x][y]
        
        grid[x][y] = 0
        
        for(const [i,j] of [[x-1, y], [x+1, y], [x, y - 1], [x, y + 1]]) {
            
            if(i < 0 || i >= height) continue
            if(j < 0 || j >= width)  continue
            if(grid[i][j] === 0)    continue
            
            gold += collect(i , j)
        }
        return gold
    }
    
    let maxGold = 0
    
    for(let i = 0; i < height; i++) {
        for(let j = 0; j < width; j++) {
            maxGold = Math.max(maxGold, collect(i, j))
        }
    }
    
    return maxGold
};