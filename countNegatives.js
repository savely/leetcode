var countNegatives = function(grid) {
    
    let count = 0
    let width = grid[0].length-1
    let right = width
    let i = 0
    
     while(i < grid.length){
        
        for(let j = right; j >= 0; j--) {
            if(grid[i][j] >= 0) {
                count += width - right
                break
            }
            right--
        }

        if(right < 0)  {
            count += grid[0].length * (grid.length - i)
            break
        }
        i++
    }

    return count
};