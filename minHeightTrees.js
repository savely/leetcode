/*
310. Minimum Height Trees

A tree is an undirected graph in which any two vertices are connected by exactly one path. In other words, any connected graph without simple cycles is a tree.

Given a tree of n nodes labelled from 0 to n - 1, and an array of n - 1 edges where edges[i] = [ai, bi] indicates that there is an undirected edge between the two nodes ai and bi in the tree, you can choose any node of the tree as the root. When you select a node x as the root, the result tree has height h. Among all possible rooted trees, those with minimum height (i.e. min(h))  are called minimum height trees (MHTs).

Return a list of all MHTs' root labels. You can return the answer in any order.

The height of a rooted tree is the number of edges on the longest downward path between the root and a leaf.

 

Example 1:


Input: n = 4, edges = [[1,0],[1,2],[1,3]]
Output: [1]
Explanation: As shown, the height of the tree is 1 when the root is the node with label 1 which is the only MHT.
Example 2:


Input: n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]
Output: [3,4]
Example 3:

Input: n = 1, edges = []
Output: [0]
Example 4:

Input: n = 2, edges = [[0,1]]
Output: [0,1]
 

Constraints:

1 <= n <= 2 * 104
edges.length == n - 1
0 <= ai, bi < n
ai != bi
All the pairs (ai, bi) are distinct.
The given input is guaranteed to be a tree and there will be no repeated edges.

*/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
 var findMinHeightTrees = function(n, edges) {

    if(n < 2) return [0];

    const adj = {};

    for (const [u, v] of edges) {

        adj[u] = adj[u] || new Set();
        adj[v] = adj[v] || new Set();

        adj[u].add(v);
        adj[v].add(u);
    }

    const leafs = [];

    for(const u in adj) {

        if(adj[u].size === 1) leafs.push(u);
    }

    
    while(leafs.length) {

        n -= leafs.length;

        if(n === 0) return leafs;

        const len = leafs.length;

        for(let i = 0; i < len; i++) {

            const leaf = +leafs.shift();
 
            for(const v of adj[leaf]) {
                
                adj[v].delete(leaf);
                adj[leaf].delete(v);

                if(adj[v].size === 1) leafs.push(+v);
            }
        }
    }

    return leafs;    
};
