/*
#1857. Largest Color Value in a Directed Graph

There is a directed graph of n colored nodes and m edges. The nodes are numbered from 0 to n - 1.

You are given a string colors where colors[i] is a lowercase English letter representing the color of the ith node in this graph (0-indexed). You are also given a 2D array edges where edges[j] = [aj, bj] indicates that there is a directed edge from node aj to node bj.

A valid path in the graph is a sequence of nodes x1 -> x2 -> x3 -> ... -> xk such that there is a directed edge from xi to xi+1 for every 1 <= i < k. The color value of the path is the number of nodes that are colored the most frequently occurring color along that path.

Return the largest color value of any valid path in the given graph, or -1 if the graph contains a cycle.

 

Example 1:

Input: colors = "abaca", edges = [[0,1],[0,2],[2,3],[3,4]]
Output: 3
Explanation: The path 0 -> 2 -> 3 -> 4 contains 3 nodes that are colored "a" (red in the above image).

Example 2:

Input: colors = "a", edges = [[0,0]]
Output: -1
Explanation: There is a cycle from 0 to 0.

 

Constraints:

    n == colors.length
    m == edges.length
    1 <= n <= 105
    0 <= m <= 105
    colors consists of lowercase English letters.
    0 <= aj, bj < n

*/

/**
 * @param {string} colors
 * @param {number[][]} edges
 * @return {number}
 */
var largestPathValue = function(colors, edges) {
    
    const n = colors.length, m = edges.length, adj = Array.from({length : n}, () => []);

    for(const [u, v] of edges) {
        adj[u].push(v);
    }

    const dp = Array.from({length : n}, () => Array.from({length : 26}, () => 0));
    const visited = Array.from({length : n}, () => 0);
    const A = 'a'.charCodeAt(), temp = 1, permanent = 2;

    const dfs = (u) => {

        if(visited[u] === permanent) return 0;

        if(visited[u] === temp) {
            return -1; // cycle found
        }

        visited[u] = temp;

        for(const v of adj[u]) {
            const ret = dfs(v);
            if(ret < 0) {
                return -1;
            }

            for(let i = 0; i < 26; i++) {
                dp[u][i] = Math.max(dp[u][i], dp[v][i]);
            }
        }

        visited[u] = permanent;
        dp[u][colors.charCodeAt(u) - A]++;

        return Math.max(...dp[u]);
    };

    let maxColors = 0;

    for(let i = 0; i < n; i++) {
        const ret = dfs(i);

        if(ret < 0) return -1;

        maxColors = Math.max(maxColors, ret);
    }

    return maxColors;
};

let colors = "abaca", edges = [[0,1],[0,2],[2,3],[3,4]]; //3
colors = "a", edges = [[0,0]];
colors = "hhqhuqhqff";
edges = [[0,1],[0,2],[2,3],[3,4],[3,5],[5,6],[2,7],[6,7],[7,8],[3,8],[5,8],[8,9],[3,9],[6,9]];

console.log(largestPathValue(colors, edges));