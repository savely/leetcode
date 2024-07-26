/*
#1334. Find the City With the Smallest Number of Neighbors at a Threshold Distance

There are n cities numbered from 0 to n-1. Given the array edges where edges[i] = [fromi, toi, weighti] represents a bidirectional and weighted edge between cities fromi and toi, and given the integer distanceThreshold.

Return the city with the smallest number of cities that are reachable through some path and whose distance is at most distanceThreshold, If there are multiple such cities, return the city with the greatest number.

Notice that the distance of a path connecting cities i and j is equal to the sum of the edges' weights along that path.

 

Example 1:

Input: n = 4, edges = [[0,1,3],[1,2,1],[1,3,4],[2,3,1]], distanceThreshold = 4
Output: 3
Explanation: The figure above describes the graph. 
The neighboring cities at a distanceThreshold = 4 for each city are:
City 0 -> [City 1, City 2] 
City 1 -> [City 0, City 2, City 3] 
City 2 -> [City 0, City 1, City 3] 
City 3 -> [City 1, City 2] 
Cities 0 and 3 have 2 neighboring cities at a distanceThreshold = 4, but we have to return city 3 since it has the greatest number.

Example 2:

Input: n = 5, edges = [[0,1,2],[0,4,8],[1,2,3],[1,4,2],[2,3,1],[3,4,1]], distanceThreshold = 2
Output: 0
Explanation: The figure above describes the graph. 
The neighboring cities at a distanceThreshold = 2 for each city are:
City 0 -> [City 1] 
City 1 -> [City 0, City 4] 
City 2 -> [City 3, City 4] 
City 3 -> [City 2, City 4]
City 4 -> [City 1, City 2, City 3] 
The city 0 has 1 neighboring city at a distanceThreshold = 2.

 

Constraints:

    2 <= n <= 100
    1 <= edges.length <= n * (n - 1) / 2
    edges[i].length == 3
    0 <= fromi < toi < n
    1 <= weighti, distanceThreshold <= 10^4
    All pairs (fromi, toi) are distinct.


*/

const { PriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function(n, edges, distanceThreshold) {

    const adj = Array.from({length : n}, () => []);

    for(const [from, to, weight] of edges) {
        adj[from].push([to, weight]);
        adj[to].push([from, weight]);
    }

    const dijkstra = (start) => {

        const dist = new Array(n).fill(Infinity), visited = new Set();

        const queue = new PriorityQueue({compare : (v1, v2) => dist[v1] - dist[v2]})

        dist[start] = 0;
    
        queue.enqueue(start);

        while(queue.size()) {

            const v = queue.dequeue();

            if(visited.has(v)) continue;

            visited.add(v);

            for(const [u, w] of adj[v]) {

                if(visited.has(u)) continue;

                dist[u] = Math.min(dist[u], dist[v] + w);

                queue.enqueue(u);
            }

        }
        console.dir(dist);
        return dist;
    }

    let node = -1, minCities = Infinity;
    
    for(let i = 0; i < n; i++) {

        let cities = 0;

        for(const distance of dijkstra(i)) {
            cities += distance > distanceThreshold ? 0 : 1;
        }

        if(cities <= minCities) {
            node = i;
            minCities = cities;
        }
    }

    return node;
};

let n = 4, edges = [[0,1,3],[1,2,1],[1,3,4],[2,3,1]], distanceThreshold = 4;
n = 5, edges = [[0,1,2],[0,4,8],[1,2,3],[1,4,2],[2,3,1],[3,4,1]], distanceThreshold = 2;

console.log(findTheCity(n, edges, distanceThreshold));