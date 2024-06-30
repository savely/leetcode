/*
#1579. Remove Max Number of Edges to Keep Graph Fully Traversable

Alice and Bob have an undirected graph of n nodes and three types of edges:

    Type 1: Can be traversed by Alice only.
    Type 2: Can be traversed by Bob only.
    Type 3: Can be traversed by both Alice and Bob.

Given an array edges where edges[i] = [typei, ui, vi] represents a bidirectional edge of type typei between nodes ui and vi, find the maximum number of edges you can remove so that after removing the edges, the graph can still be fully traversed by both Alice and Bob. The graph is fully traversed by Alice and Bob if starting from any node, they can reach all other nodes.

Return the maximum number of edges you can remove, or return -1 if Alice and Bob cannot fully traverse the graph.

 

Example 1:

Input: n = 4, edges = [[3,1,2],[3,2,3],[1,1,3],[1,2,4],[1,1,2],[2,3,4]]
Output: 2
Explanation: If we remove the 2 edges [1,1,2] and [1,1,3]. The graph will still be fully traversable by Alice and Bob. Removing any additional edge will not make it so. So the maximum number of edges we can remove is 2.

Example 2:

Input: n = 4, edges = [[3,1,2],[3,2,3],[1,1,4],[2,1,4]]
Output: 0
Explanation: Notice that removing any edge will not make the graph fully traversable by Alice and Bob.

Example 3:

Input: n = 4, edges = [[3,2,3],[1,1,2],[2,3,4]]
Output: -1
Explanation: In the current graph, Alice cannot reach node 4 from the other nodes. Likewise, Bob cannot reach 1. Therefore it's impossible to make the graph fully traversable.

 

 

Constraints:

    1 <= n <= 105
    1 <= edges.length <= min(105, 3 * n * (n - 1) / 2)
    edges[i].length == 3
    1 <= typei <= 3
    1 <= ui < vi <= n
    All tuples (typei, ui, vi) are distinct.


*/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var maxNumEdgesToRemove = function(n, edges) {

    let arr = new Array(n + 1).fill(-1);

    const find = (a) => arr[a] < 0 ? a : find(arr[a]);

    const union = (a, b) => {
        const pa = find(a), pb = find(b);

        if(pa === pb) return [0, -arr[pa]];

        if(arr[pa] <= arr[pb]) {
            arr[pa] += arr[pb];
            arr[pb] = pa;
            return [1, -arr[pa]]
        } 

        arr[pa] += arr[pb];
        arr[pb] = pa;
        return [1, -arr[pb]];
    }

    const aliceEdges = [], bobEdges = [];
    
    let count = 0;

    for(const [type, u, v] of edges) {

        if(type === 1) {
            aliceEdges.push([u, v]);
            continue;
        }

        if(type === 2) {
            bobEdges.push([u, v]);
            continue;
        }

        const[edge, connected] = union(u, v);
        count += edge;

        if(connected === n) return edges.length - count;
    }

    let bobCopy = Array.from(arr), allReachable = false;

    for(const [u, v] of aliceEdges) {

        const [edge, connected] = union(u, v);

        count += edge;

        if(connected === n) {
            allReachable = true;
            break;
        }   
    }

    if(!allReachable) return -1;

    arr = bobCopy;

    for(const [u, v] of bobEdges) {

        const [edge, connected] = union(u, v);

        count += edge;

        if(connected === n) return edges.length - count;
    }

    return -1;
};

let n = 4, edges = [[3,1,2],[3,2,3],[1,1,3],[1,2,4],[1,1,2],[2,3,4]];
n = 4, edges = [[3,1,2],[3,2,3],[1,1,4],[2,1,4]];
n = 4, edges = [[3,2,3],[1,1,2],[2,3,4]];

console.log(maxNumEdgesToRemove(n, edges));