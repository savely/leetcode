/*
#847. Shortest Path Visiting All Nodes

You have an undirected, connected graph of n nodes labeled from 0 to n - 1. You are given an array graph where graph[i] is a list of all the nodes connected with node i by an edge.

Return the length of the shortest path that visits every node. You may start and stop at any node, you may revisit nodes multiple times, and you may reuse edges.

 

Example 1:

Input: graph = [[1,2,3],[0],[0],[0]]
Output: 4
Explanation: One possible path is [1,0,2,0,3]

Example 2:

Input: graph = [[1],[0,2,4],[1,3,4],[2],[1,2]]
Output: 4
Explanation: One possible path is [0,1,4,2,3]

 

Constraints:

    n == graph.length
    1 <= n <= 12
    0 <= graph[i].length < n
    graph[i] does not contain i.
    If graph[a] contains b, then graph[b] contains a.
    The input graph is always connected.

*/

/**
 * @param {number[][]} graph
 * @return {number}
 */
var shortestPathLength = function(graph) {
    const n = graph.length;
    const allVisited = (1 << n) - 1;
    const queue = [];
    const visited = new Set();

    for (let i = 0; i < n; i++) {
        queue.push([1 << i, i, 0]);
        visited.add((1 << i) * 16 + i);
    }

    while (queue.length > 0) {
        const [mask, node, dist] = queue.shift();

        if (mask === allVisited) {
            return dist;
        }

        for (const neighbor of graph[node]) {
            const newMask = mask | (1 << neighbor);
            const hashValue = newMask * 16 + neighbor;

            if (!visited.has(hashValue)) {
                visited.add(hashValue);
                queue.push([newMask, neighbor, dist + 1]);
            }
        }
    }

    return -1;
}

graph = [[1,2,3],[0],[0],[0]];

graph = [[1],[0,2,4],[1,3,4],[2],[1,2]];

console.log(shortestPathLength(graph));