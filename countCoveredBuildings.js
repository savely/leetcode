/*
#3531. Count Covered Buildings

You are given a positive integer n, representing an n x n city. You are also given a 2D grid buildings, where buildings[i] = [x, y] denotes a unique building located at coordinates [x, y].

A building is covered if there is at least one building in all four directions: left, right, above, and below.

Return the number of covered buildings.

 

Example 1:

Input: n = 3, buildings = [[1,2],[2,2],[3,2],[2,1],[2,3]]

Output: 1

Explanation:

    Only building [2,2] is covered as it has at least one building:
        above ([1,2])
        below ([3,2])
        left ([2,1])
        right ([2,3])
    Thus, the count of covered buildings is 1.

Example 2:

Input: n = 3, buildings = [[1,1],[1,2],[2,1],[2,2]]

Output: 0

Explanation:

    No building has at least one building in all four directions.

Example 3:

Input: n = 5, buildings = [[1,3],[3,2],[3,3],[3,5],[5,3]]

Output: 1

Explanation:

    Only building [3,3] is covered as it has at least one building:
        above ([1,3])
        below ([5,3])
        left ([3,2])
        right ([3,5])
    Thus, the count of covered buildings is 1.

 

Constraints:

    2 <= n <= 105
    1 <= buildings.length <= 105 
    buildings[i] = [x, y]
    1 <= x, y <= n
    All coordinates of buildings are unique.


*/

var countCoveredBuildings = function(n, buildings) {

    const xRanges = new Map(), yRanges = new Map();

    for(const [x, y] of buildings) {
        const xRange = xRanges.get(y) || [n, 0];
        xRanges.set(y, [Math.min(xRange[0], x), Math.max(xRange[1], x)]);

        const yRange = yRanges.get(x) || [n, 0];
        yRanges.set(x, [Math.min(yRange[0], y), Math.max(yRange[1], y)]);
    }
    
    let covered = 0;

    for(const [x, y] of buildings) {
        const [xMin, xMax] = xRanges.get(y), [yMin, yMax] = yRanges.get(x);
        
        covered += x > xMin && x < xMax && y > yMin && y < yMax ? 1 : 0;
    }

    return covered;
};