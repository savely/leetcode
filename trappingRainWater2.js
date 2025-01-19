/*
#407. Trapping Rain Water II

Given an m x n integer matrix heightMap representing the height of each unit cell in a 2D elevation map, return the volume of water it can trap after raining.

 

Example 1:

Input: heightMap = [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]
Output: 4
Explanation: After the rain, water is trapped between the blocks.
We have two small ponds 1 and 3 units trapped.
The total volume of water trapped is 4.

Example 2:

Input: heightMap = [[3,3,3,3,3],[3,2,2,2,3],[3,2,1,2,3],[3,2,2,2,3],[3,3,3,3,3]]
Output: 10

 

Constraints:

    m == heightMap.length
    n == heightMap[i].length
    1 <= m, n <= 200
    0 <= heightMap[i][j] <= 2 * 104


*/

/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function(heightMap) {
    
    const heights = Array.from(heightMap, (row) => Array.from(row, () => 0));

    for(let i = 0; i < heights.length; i++) {

        const row = heights[i], n = row.length - 1;

        let leftMax = heightMap[i][0];

        for(let j = 1; j <  n; j++) {
            heights[i][j] = leftMax;
            leftMax = Math.max(leftMax, heightMap[i][j]);
        }

        let rightMax = heightMap[i][n];

        for(let j = n - 1; j >= 1; j--) {
            heights[i][j] = Math.min(heights[i][j], rightMax);
            rightMax = Math.max(rightMax, heightMap[i][j]);
        }
    }


    for(let j = 0; j < heights[0].length; j++) {

        let topMax = heightMap[0][j];

        for(i = 1; i < heights.length - 1; i++) {
            heights[i][j] = Math.min(heights[i][j], topMax);
            topMax = Math.max(topMax, heightMap[i][j]);
        }

        let bottomMax = heightMap[heightMap.length - 1][j];

        for(i = heights.length - 1; i >= 1; i--) {
            heights[i][j] = Math.min(heights[i][j], bottomMax);
            bottomMax  = Math.max(bottomMax, heightMap[i][j]);
        }
    }


    console.dir(heights);

    let water = 0;

    for(let i = 0; i < heights.length; i++) {
        for(let j = 0; j < heights[i].length; j++) {
            water += Math.max(0, heights[i][j] - heightMap[i][j]);
        }
    }

    return water;
};

let heightMap = [[1,4,3,1,3,2],
                 [3,2,1,3,2,4],
                 [2,3,3,2,3,1]];

console.log(trapRainWater(heightMap)); // 4