/*
#939. Minimum Area Rectangle

Given a set of points in the xy-plane, determine the minimum area of a rectangle formed from these points, with sides parallel to the x and y axes.

If there isn't any rectangle, return 0.

 

Example 1:

Input: [[1,1],[1,3],[3,1],[3,3],[2,2]]
Output: 4
Example 2:

Input: [[1,1],[1,3],[3,1],[3,3],[4,1],[4,3]]
Output: 2
 

Note:

1 <= points.length <= 500
0 <= points[i][0] <= 40000
0 <= points[i][1] <= 40000
All points are distinct.

*/

/**
 * @param {number[][]} points
 * @return {number}
 */
 var minAreaRect = function(points) {
    
    const set = new Set()
    let minArea = 40001 ** 2
    
    for(const [x,y] of points) {
        set.add(`${x}|${y}`)
    }
    
    while(points.length) {
        
        const [x1,y1] = points.pop()
        
        for(const [x2,y2] of points) {

            if(x1 === x2 || y1 === y2) continue; //should not be on the same horisontal or vertical line
            
            if(set.has(`${x1}|${y2}`) && set.has(`${x2}|${y1}`)) {
                
                minArea = Math.min(minArea, Math.abs((x2-x1) * (y2-y1)))
            }
        }
    }
    
    return minArea > 40000 ** 2 ? 0 : minArea
};

let points = [[1,1],[1,3],[3,1],[3,3],[2,2]]

console.log(minAreaRect(points))