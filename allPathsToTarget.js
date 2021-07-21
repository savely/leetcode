/*
#797. All Paths From Source to Target

Given a directed, acyclic graph of N nodes.  Find all possible paths from node 0 to node N-1, and return them in any order.

The graph is given as follows:  the nodes are 0, 1, ..., graph.length - 1.  graph[i] is a list of all nodes j for which the edge (i, j) exists.

Example:
Input: [[1,2], [3], [3], []] 
Output: [[0,1,3],[0,2,3]] 
Explanation: The graph looks like this:
0--->1
|    |
v    v
2--->3
There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.

The number of nodes in the graph will be in the range [2, 15].
You can print different paths in any order, but you should keep the order of nodes inside one path.
*/

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {

    if(graph.length === 0) return []

    const target = graph.length - 1

    const pathsFromNode  = function (node) {

        if(node === target) return [[node]]

        const nodes = graph[node], res = []

        for (let i = 0; i < nodes.length; i++) {
            const paths = pathsFromNode(nodes[i])

            for(let j = 0; j < paths.length; j++) {
                const path = paths[j]
                const set = new Set(path)

                if(!set.has(target)) continue

               res.push([node].concat(path)) 
            }
        }

        return res
    }
   
   return pathsFromNode(0)
};

let graph = [[1,2], [3], [3], []] 

console.log(allPathsSourceTarget(graph))