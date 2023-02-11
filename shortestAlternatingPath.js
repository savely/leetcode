/*
#1129. Shortest Path with Alternating Colors

You are given an integer n, the number of nodes in a directed graph where the nodes are labeled from 0 to n - 1. Each edge is red or blue in this graph, and there could be self-edges and parallel edges.

You are given two arrays redEdges and blueEdges where:

    redEdges[i] = [ai, bi] indicates that there is a directed red edge from node ai to node bi in the graph, and
    blueEdges[j] = [uj, vj] indicates that there is a directed blue edge from node uj to node vj in the graph.

Return an array answer of length n, where each answer[x] is the length of the shortest path from node 0 to node x such that the edge colors alternate along the path, or -1 if such a path does not exist.

 

Example 1:

Input: n = 3, redEdges = [[0,1],[1,2]], blueEdges = []
Output: [0,1,-1]

Example 2:

Input: n = 3, redEdges = [[0,1]], blueEdges = [[2,1]]
Output: [0,1,-1]

 

Constraints:

    1 <= n <= 100
    0 <= redEdges.length, blueEdges.length <= 400
    redEdges[i].length == blueEdges[j].length == 2
    0 <= ai, bi, uj, vj < n

*/

/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function(n, redEdges, blueEdges) {

    const adj = new Array(n).fill(0).map(_ => [[],[]]);

    for(const [from, to] of redEdges) {
        adj[from][0].push(to);
    }

    for(const [from, to] of blueEdges) {
        adj[from][1].push(to);
    }

    const ans = new Array(n).fill(-1), visited = [new Set([0]), new Set([0])];

    ans[0] = 0;

    let q = [...adj[0][0].map(v => [v, 0])];
    q.push(...adj[0][1].map(v => [v, 1]));

    let depth = 1;

    while(q.length) {

        const next = [];

        for(const [node, color] of q) {

            if(visited[color].has(node)) continue;

            visited[color].add(node);

            if(ans[node] < 0 || ans[node] > depth) ans[node] = depth;

            const nextColor = color ? 0 : 1;

            for(const nextNode of adj[node][nextColor]) {
                if(visited[nextColor].has(nextNode)) continue;
                next.push([nextNode, nextColor]);
            }
        }
        q = next;
        depth++;
    }
    
    return ans;
};

//let n = 3, redEdges = [[0,1],[1,2]], blueEdges = [];
n = 3, redEdges = [[0,1]], blueEdges = [[2,1]];
n= 3, redEdges = [[0,1],[0,2]], blueEdges = [[1,0]];

 n = 5, redEdges = [[3,2],[4,1],[1,4],[2,4]], blueEdges = [[2,3],[0,4],[4,3],[4,4],[4,0],[1,0]];
//[0,2,-1,-1,1]


console.dir(shortestAlternatingPaths(n, redEdges, blueEdges));