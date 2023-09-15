/*
#1584. Min Cost to Connect All Points

You are given an array points representing integer coordinates of some points on a 2D-plane, where points[i] = [xi, yi].

The cost of connecting two points [xi, yi] and [xj, yj] is the manhattan distance between them: |xi - xj| + |yi - yj|, where |val| denotes the absolute value of val.

Return the minimum cost to make all points connected. All points are connected if there is exactly one simple path between any two points.

 

Example 1:

Input: points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
Output: 20
Explanation: 

We can connect the points as shown above to get the minimum cost of 20.
Notice that there is a unique path between every pair of points.

Example 2:

Input: points = [[3,12],[-2,5],[-4,1]]
Output: 18

 

Constraints:

    1 <= points.length <= 1000
    -106 <= xi, yi <= 106
    All pairs (xi, yi) are distinct.

*/

var minCostConnectPoints = function(points) {

    const arr = new Array(points.length).fill(-1);

    const find = (x) => arr[x] < 0 ? x : find(arr[x]);

    const union = (x, y) => {

        const px = find(x), py = find(y);

        if(px === py) return -1;

        const rx = arr[px], ry = arr[py];

        if(rx <= ry) {
            arr[px] += ry;
            arr[py] = px;
        } else {
            arr[py] += rx;
            arr[px] = py;
        }

        return 1;
    };

    const dist = (p1, p2) => {
       return Math.abs(p2[0] - p1[0]) + Math.abs(p2[1] - p1[1]);
    };
    
    const edges = [];

    for(let i = 0; i < points.length - 1; i++) {

        for(let j = i + 1; j < points.length; j++) {


            edges.push([i, j, dist(points[i], points[j])]);
        }
    }

    edges.sort((a, b) => a[2] - b[2]);

    let totalDistance = 0, usedEdges = 0;

    for(const [i, j, dist] of edges) {

        if(union(i, j) < 0) continue;

        totalDistance += dist;
        usedEdges++;

        if(usedEdges === points.length - 1) break;
    }

    return totalDistance;
}

points = [[0,0],[2,2],[3,10],[5,2],[7,0]];
points = [[3,12],[-2,5],[-4,1]];
points = [[0,0],[2,2],[3,10],[5,2],[7,0],[3,12],[-2,5],[-4,1]];

console.log(minCostConnectPoints(points));