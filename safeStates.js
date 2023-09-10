/*
#802. Find Eventual Safe States

There is a directed graph of n nodes with each node labeled from 0 to n - 1. The graph is represented by a 0-indexed 2D integer array graph where graph[i] is an integer array of nodes adjacent to node i, meaning there is an edge from node i to each node in graph[i].

A node is a terminal node if there are no outgoing edges. A node is a safe node if every possible path starting from that node leads to a terminal node (or another safe node).

Return an array containing all the safe nodes of the graph. The answer should be sorted in ascending order.

 

Example 1:
Illustration of graph

Input: graph = [[1,2],[2,3],[5],[0],[5],[],[]]
Output: [2,4,5,6]
Explanation: The given graph is shown above.
Nodes 5 and 6 are terminal nodes as there are no outgoing edges from either of them.
Every path starting at nodes 2, 4, 5, and 6 all lead to either node 5 or 6.

Example 2:

Input: graph = [[1,2,3,4],[1,2],[3,4],[0,4],[]]
Output: [4]
Explanation:
Only node 4 is a terminal node, and every path starting at node 4 leads to node 4.

 

Constraints:

    n == graph.length
    1 <= n <= 104
    0 <= graph[i].length <= n
    0 <= graph[i][j] <= n - 1
    graph[i] is sorted in a strictly increasing order.
    The graph may contain self-loops.
    The number of edges in the graph will be in the range [1, 4 * 104].


*/

/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {

    const outDegree = new Array(graph.length).fill(0), adj = new Array(graph.length).fill(0).map(_ => []);

    for(let i = 0; i < graph.length; i++) {

        outDegree[i] += graph[i].length;
        
        for(let j = 0; j < graph[i].length; j++) {
            adj[graph[i][j]].push(i);
        }
    }
    let queue = [];

    for(let i = 0; i < outDegree.length; i++) {
        if(outDegree[i] === 0) queue.push(i);
    }

    const ans = [];

    while(queue.length) {
        const next = [];

        for(let i = 0; i < queue.length; i++){
            const safe = queue[i];
            ans.push(safe);

            for(const node of adj[i]) {
                outDegree[node]--;

                if(outDegree[node] === 0) {
                    next.push(node);
                }
            }

           // adj[i] = [];
        }
        queue = next;
    }
     
    return ans;
};

let graph = [[1,2],[2,3],[5],[0],[5],[],[]];
//graph = [[1,2,3,4],[1,2],[3,4],[0,4],[]];

console.dir(eventualSafeNodes(graph));