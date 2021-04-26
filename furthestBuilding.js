/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
 var furthestBuilding = function(heights, bricks, ladders) {
    
    let dp = [[bricks,ladders]]
    
    for(let i = 1; i < heights.length; i++) {
        
        const prev = heights[i - 1], curr = heights[i]
        
        if(prev >= curr) continue;
        
        const newDp = [], diff = curr - prev, set = new Set()
        
        let hash
        
        for(const [bricks, ladders] of dp) {
            
            
            if(bricks >= diff) {
                hash = `${bricks - diff}|${ladders}`
                if(!set.has(hash)) {
                    set.add(hash)
                    newDp.push([bricks - diff, ladders])    
                }
                   
                
            }
            
            if(ladders > 0) {
              hash = `${bricks}|${ladders - 1}`
              
              if(!set.has(hash))
                  set.add(hash)
                   newDp.push([bricks, ladders - 1])
            }
        }
        
        if(!newDp.length) return i - 1
        dp = newDp
    }
    
    return heights.length - 1
};