/*
#834. Sum of Distances in Tree

here is an undirected connected tree with n nodes labeled from 0 to n - 1 and n - 1 edges.

You are given the integer n and the array edges where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the tree.

Return an array answer of length n where answer[i] is the sum of the distances between the ith node in the tree and all other nodes.

 

Example 1:

Input: n = 6, edges = [[0,1],[0,2],[2,3],[2,4],[2,5]]
Output: [8,12,6,10,10,10]
Explanation: The tree is shown above.
We can see that dist(0,1) + dist(0,2) + dist(0,3) + dist(0,4) + dist(0,5)
equals 1 + 1 + 2 + 2 + 2 = 8.
Hence, answer[0] = 8, and so on.

Example 2:

Input: n = 1, edges = []
Output: [0]

Example 3:

Input: n = 2, edges = [[1,0]]
Output: [1,1]

 

Constraints:

    1 <= n <= 3 * 104
    edges.length == n - 1
    edges[i].length == 2
    0 <= ai, bi < n
    ai != bi
    The given input represents a valid tree.
*/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
 var sumOfDistancesInTree = function(n, edges) {

    adj = {};

    for(let [s, e] of edges) {

        adj[s] = adj[s] || new Set();
        adj[e] = adj[e] || new Set();

        adj[s].add(e);
        adj[e].add(s);
    }

    const dist = new Array(n).fill(-1);
    const childs  = new Array(n).fill(0);

    const visited = new Set();
     
     const empty = new Set();
     

    const dfs = node =>  {

        let sumDist = 0, count = 0;

        if(visited.has(node)) return 0;

        visited.add(node);

        for(const child of (adj[node] || empty)) {

            if(visited.has(child)) continue;

            sumDist +=  dfs(child);

            count += 1 + childs[child];
        }

        childs[node] = count;
        dist[node] = sumDist + count;

        return dist[node];
    };

    dfs(0);

    visited.clear();


    const dfs2 = node => {

        if(visited.has(node)) return 0;

        visited.add(node);

        for(const child of (adj[node] || empty)) {

            if(visited.has(child)) continue;

            dist[child] = dist[node] + n - 2 * (childs[child] + 1);

            dfs2(child);
        }
        
    };

    dfs2(0);

    return dist;
};

let n = 6, edges = [[0,1],[0,2],[2,3],[2,4],[2,5]];

n = 9, edges = [[0,1],[0,2],[2,3],[2,4],[2,5],[1,6],[1,7],[6,8]];

n = 2, edges = [[1,0]];

n = 8, edges = [[1,2],[1,0],[3,5],[6,7],[7,3],[4,1],[6,4]];


console.table(sumOfDistancesInTree(n, edges));