var maxAreaOfIsland = function(grid) {
    
    if(grid.length === 0) return 0
    
    const h = grid.length - 1, w = grid[0].length - 1;

    let maxArea = 0
    
    const neighbors = (i, j) => {

        return [[i-1, j], [i+1,j],[i,j-1],[i,j+1]].filter(([x,y]) => {
           
            if(x < 0 || x > h) return false;
            if(y < 0 || y > w) return false;
            if(grid[x][y] !== 1) return false;

            return true;
        })
    };

    for(let i = 0; i <= h; i++) {
        for(let j = 0; j <= w;  j++) {

            if(grid[i][j] !== 1) continue;

            const stack = [[i,j]]

            let currArea = 0

            while(stack.length) {

                const [x,y] = stack.shift();

                if(grid[x][y] !== 1) continue;

                grid[x][y]  = 9;
                currArea++;
                stack.push(...neighbors(x,y))
            }

            maxArea = Math.max(maxArea, currArea)            
        }
    }

    return maxArea
};