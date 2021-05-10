/*
#1466. Reorder Routes to Make All Paths Lead to the City Zero

There are n cities numbered from 0 to n-1 and n-1 roads such that there is only one way to travel between two different cities (this network form a tree). Last year, The ministry of transport decided to orient the roads in one direction because they are too narrow.

Roads are represented by connections where connections[i] = [a, b] represents a road from city a to b.

This year, there will be a big event in the capital (city 0), and many people want to travel to this city.

Your task consists of reorienting some roads such that each city can visit the city 0. Return the minimum number of edges changed.

It's guaranteed that each city can reach the city 0 after reorder.

*/


/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
 var minReorder = function(n, connections) {
    
    const incoming = {}, outgoing = {}
    
    for(let i = 0; i <connections.length; i++) {
        const [start, end] = connections[i]
        
        if(!incoming[end]) {
            incoming[end] = []
        }
        
        if(!outgoing[start]) {
            outgoing[start] = []
        }
        
        
        incoming[end].push(start)
        outgoing[start].push(end)
    }
    
    const visited = new Set()
    
    const stack = [0]
    
    let count = 0
    
    while(stack.length) {
        
        const node =  stack.pop()
        
        if(visited.has(node)) continue

        visited.add(node)
        
        if(incoming[node]) {
        for(const inc of incoming[node]) {
            if(!visited.has(inc)) {
                stack.push(inc)
            } 
          }
        }
        
        if(outgoing[node]) {

        for (const outg of outgoing[node]) {
            
            if(!visited.has(outg)) {
                count++
                 stack.push(outg)
            }
          }
        }


    }
    
    return count
};


let conn = [[0,1],[1,3],[2,3],[4,0],[4,5]]


console.log(minReorder(conn.length, conn))