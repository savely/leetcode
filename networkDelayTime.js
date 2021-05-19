/*
#743 Network Delay Time

You are given a network of n nodes, labeled from 1 to n. 
You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), 
where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.

We will send a signal from a given node k. Return the time it takes for all the n nodes to receive the signal. 
If it is impossible for all the n nodes to receive the signal, return -1.

Example 1:

Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
Output: 2
Example 2:

Input: times = [[1,2,1]], n = 2, k = 1
Output: 1
Example 3:

Input: times = [[1,2,1]], n = 2, k = 2
Output: -1
*/

/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
 var networkDelayTime = function(times, N, K) {
    
    const distances = new Array(N).fill(Infinity), adj = {}
    distances[K-1] = 0

    for(let i = 0; i < times.length; i++) {
         const [begin, end, time] = times[i]

         if(adj[begin - 1] === undefined) {
             adj[begin - 1] = []
         }
         adj[begin - 1].push([end-1, time])
    }

    if(adj[K-1] === undefined) return -1

    const  visited = new Set() 
    let node = K-1, minDist = 0


    while(minDist !== Infinity) {

        const  nodes = adj[node]

        if(nodes !== undefined) {
        for(let i = 0; i < nodes.length; i++) {

            const [end, dist] = nodes[i]

            if(visited.has(end)) continue;

            if(distances[end] > dist + distances[node]) {
                distances[end]  = dist + distances[node]
            }
          }
        }

        visited.add(node)

        minDist = Infinity;

        for(let i = 0; i < distances.length; i++) {

            const dist = distances[i]

            if(visited.has(i)) continue;

            if(minDist > dist) {
                minDist = dist
                node    = i
            }
        }


    }
    
    let ans = 0

    for(let i = 0; i < distances.length; i++) {
        const dist = distances[i]

        if(!isFinite(dist)) return -1

        ans = Math.max(ans, dist)
    }
    return ans
};