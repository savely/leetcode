
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    
    
    if(graph.length === 1) return true
     
     const visited = new Set(), colours
     let isRed = true
     
     for(let i =0; i < graph.length; i++) {
         
         const node = i, nodes = graph[i]
          
         if(visited.has(node)) continue

                 
         
         for(const adjNode of nodes) {
         }
         
        visited.add(node) 
     }
     
     return true
 };


 let graph = /*[[1,3],[0,2],[1,3],[0,2]]*/
 graph = [[1],[0,3],[3],[1,2]]

 console.log(isBipartite(graph))