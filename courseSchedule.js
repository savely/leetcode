/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {

    const toAdjList = function(edges, graphArr) {
        return edges.reduce((acc, edge) => {
            const [start , end] = edge
            acc[start].push(end)
            return acc
        },graphArr)
    }
    
    const visited = new Set(), visiting = new Set()
    const graph = toAdjList(prerequisites,new Array(numCourses).fill(0).map(_ => []))


    const dfs = function (vertex) {
        if(visiting.has(vertex)) return false
        if(visited.has(vertex)) return true
        
        const adjVertices = graph[vertex]

        if(adjVertices.length === 0) {
            visited.add(vertex)
            return true
        }

        visiting.add(vertex)

        for(let i = 0; i < adjVertices.length; i++) {
              if(!dfs(adjVertices[i])) return false
        }

        visiting.delete(vertex)
        visited.add(vertex)
        return true
    }

    for (let v = 0; v < graph.length; v++) {
            if(!dfs(v)) return false
    }
    return true  
};