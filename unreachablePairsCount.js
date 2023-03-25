/*
#2316. Count Unreachable Pairs of Nodes in an Undirected Graph

You are given an integer n. There is an undirected graph with n nodes, numbered from 0 to n - 1. You are given a 2D integer array edges where edges[i] = [ai, bi] denotes that there exists an undirected edge connecting nodes ai and bi.

Return the number of pairs of different nodes that are unreachable from each other.

 

Example 1:

Input: n = 3, edges = [[0,1],[0,2],[1,2]]
Output: 0
Explanation: There are no pairs of nodes that are unreachable from each other. Therefore, we return 0.

Example 2:

Input: n = 7, edges = [[0,2],[0,5],[2,4],[1,6],[5,4]]
Output: 14
Explanation: There are 14 pairs of nodes that are unreachable from each other:
[[0,1],[0,3],[0,6],[1,2],[1,3],[1,4],[1,5],[2,3],[2,6],[3,4],[3,5],[3,6],[4,6],[5,6]].
Therefore, we return 14.

 

Constraints:

    1 <= n <= 105
    0 <= edges.length <= 2 * 105
    edges[i].length == 2
    0 <= ai, bi < n
    ai != bi
    There are no repeated edges.

*/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPairs = function(n, edges) {

    const arr = new Array(n).fill(-1);

    const find = (a) => {
        return(arr[a] < 0) ? a : find(arr[a]);
    };

    const union = (a, b) => {
        const pa = find(a), pb = find(b);

        if(pa === pb) return;

        if(arr[pa] <= arr[pb]) {
            arr[pa] += arr[pb];
            arr[pb] = pa;
        } else {
            arr[pb] += arr[pa];
            arr[pa] = pb;   
        }
    }

    for(const [a,b] of edges) {
        union(a,b);
    }

    let count = 0, ans = 0;
    
    for(const connected of arr) {

        if(connected > -1) continue;
        const countConnected = -1 * connected;

        ans += count * countConnected ;
        count += countConnected;
    }

    return ans;
};

let n = 3, edges = [[0,1],[0,2],[1,2]];
n = 7, edges = [[0,2],[0,5],[2,4],[1,6],[5,4]];

console.log(countPairs(n, edges));