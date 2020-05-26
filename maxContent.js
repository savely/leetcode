/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    
    if(g.length === 0 || s.length === 0) return 0
    
    let content = 0
    const f = (a, b) => a - b 
    const sorted = g.sort(f)
    const sortedCookies = s.sort(f)
    let i = 0, j = 0
    
    while(i < g.length && j < s.length) {
        const greed = sorted[i], cookie = sortedCookies[j++]
        if(greed <= cookie) {
            content++
            i++
        } 
    }

    return content
};

let g =  [10,9,8,7]
let s = [5,6,7,8]
console.log(findContentChildren(g,s))