/*
#1319. Number of Operations to Make Network Connected

There are n computers numbered from 0 to n-1 connected by ethernet cables connections forming a network where connections[i] = [a, b] represents a connection between computers a and b. Any computer can reach any other computer directly or indirectly through the network.

Given an initial computer network connections. You can extract certain cables between two directly connected computers, and place them between any pair of disconnected computers to make them directly connected. Return the minimum number of times you need to do this in order to make all the computers connected. If it's not possible, return -1. 

 

Example 1:

Input: n = 4, connections = [[0,1],[0,2],[1,2]]
Output: 1
Explanation: Remove cable between computer 1 and 2 and place between computers 1 and 3.

Example 2:

Input: n = 6, connections = [[0,1],[0,2],[0,3],[1,2],[1,3]]
Output: 2

Example 3:

Input: n = 6, connections = [[0,1],[0,2],[0,3],[1,2]]
Output: -1
Explanation: There are not enough cables.

Example 4:

Input: n = 5, connections = [[0,1],[0,2],[3,4],[2,3]]
Output: 0

 

Constraints:

    1 <= n <= 10^5
    1 <= connections.length <= min(n*(n-1)/2, 10^5)
    connections[i].length == 2
    0 <= connections[i][0], connections[i][1] < n
    connections[i][0] != connections[i][1]
    There are no repeated connections.
    No two computers are connected by more than one cable.

*/

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
 var makeConnected = function(n, connections) {
    
    const dSet = new Array(n).fill(-1);
    
    const find = (node) => {
        
        if(dSet[node] < 0) return node;
        
        const p = find(dSet[node]);

        dSet[node] = p;

        return p;
    }
    
    const union = (node1, node2) => {
        
        const p1 = find(node1), p2 = find(node2);
        
        if(p1 === p2) return 1;

        if(dSet[p1] <= dSet[p2]) {
            dSet[p2] = p1;
            dSet[p1]--;
        } else {
            dSet[p1] = p2;
            dSet[p2]--;            
        }    
        
        return 0;
    }
    
    let numCables = 0;
    
    for(const [s, e] of connections) {
       numCables += union(s, e);
    }
    
    let disconnected = -1;
    
    //console.log(numCables);
    
    //console.table(dSet);
    
    for(const p of dSet) {
        disconnected += p < 0 ? 1 : 0;
        
        if(disconnected > numCables) return -1;
    }
    
    return disconnected;
};

let n = 6, connections = [[0,1],[0,2],[0,3],[1,2],[1,3]];

n = 5, connections = [[0,1],[0,2],[3,4],[2,3]];

n = 12, connections = [[1,5],[1,7],[1,2],[1,4],[3,7],[4,7],[3,5],[0,6],[0,1],[0,4],[2,6],[0,3],[0,2]]; //4

console.log(makeConnected(n, connections));