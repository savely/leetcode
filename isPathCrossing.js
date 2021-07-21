/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let point = [0,0]
    const visited = new Set([point.toString()])
    
    for(let i =0; i < path.length; i++) {
        const dir = path[i]
        switch (dir) {
            case 'N': 
                point[1]++
                break
            case 'S' :    
                point[1]--
                break
            case 'W': 
                point[0]++
                break
            case 'E' :    
                point[0]--
                break
                
        }
        const pt = point.toString()
        if(visited.has(pt)) return true
        visited.add(pt)
    }
    return false
};

console.log(isPathCrossing('NESWW'))