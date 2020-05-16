/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    
    const oldColor = image[sr][sc]

    if(oldColor === newColor) return image
    
    const stack    = [[sr,sc]]
    const width    = image.length-1
    const height   = image[0].length-1
    
    while(stack.length > 0) {
        let [x, y] = stack.pop()
        
        if(x < 0 || x > width) continue
        if(y < 0 || y > height) continue
        if(image[x][y] !== oldColor) continue
        
        image[x][y] = newColor
        
        stack.push([x-1,y], [x+1,y],[x,y-1], [x,y+1])
    }
    
    return image
};