/*
$684. Redundant Connection

In this problem, a tree is an undirected graph that is connected and has no cycles.

You are given a graph that started as a tree with n nodes labeled from 1 to n, with one additional edge added. The added edge has two different vertices chosen from 1 to n, and was not an edge that already existed. The graph is represented as an array edges of length n where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the graph.

Return an edge that can be removed so that the resulting graph is a tree of n nodes. If there are multiple answers, return the answer that occurs last in the input.

 

Example 1:

Input: edges = [[1,2],[1,3],[2,3]]
Output: [2,3]

Example 2:

Input: edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]
Output: [1,4]

 

Constraints:

    n == edges.length
    3 <= n <= 1000
    edges[i].length == 2
    1 <= ai < bi <= edges.length
    ai != bi
    There are no repeated edges.
    The given graph is connected.


*/

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
 var findRedundantConnection = function(edges) {
    
    const dset = new Array(edges.length + 1).fill(-1);

    const find = (i) => {
        if(dset[i] < 0) return i;

        return find(dset[i]);
    };

    const union = (i, j) => {
        const parentI = find(i), parentJ = find(j);

        if(parentI === parentJ) return parentI;

        const rankI = dset[parentI], rankJ = dset[parentJ];

        if(rankI < rankJ) {
            dset[parentJ] = parentI;
            dset[parentI] += rankJ;
            return parentI;
        }
        
        dset[parentI] = parentJ;
        dset[parentJ] += rankI;

        return parentJ;

    };

    for(const [start, end] of edges) {

        const pStart = find(start), pEnd = find(end);

        if(pStart === pEnd) return [start, end];

        union(pStart, pEnd);
    }
};

let edges = [[1,2],[1,3],[2,3]];
edges = [[1,2],[2,3],[3,4],[1,4],[1,5]];
edges = [[3,4],[1,2],[2,4],[3,5],[2,5]];

console.log(findRedundantConnection(edges));