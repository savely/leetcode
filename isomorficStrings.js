var isIsomorphic = function(s, t) {
    
    if(s.length !== t.length) return false
    
    const toPos = function(str) {
        
        const hash = new Map()
        const pos  = []
        
        for(let i = 0; i < str.length; i++) {
             if(hash.has(str[i])) {
                 pos.push(hash.get(str[i]))
             } else {
                hash.set(str[i], i)
                pos.push(i)
             }
        }
        return pos
    }

    const posT = toPos(t)
    const posS = toPos(s)

    for(let i=0; i < t.length; i++) {
        if(posT[i] !== posS[i]) return false
    }
    return true
};

//console.log(isIsomorphic('bbaa','aabb'))

var removeElement = function(nums, val) {
    let lo = 0, hi = nums.length-1
    
    const swap = function(i,j) {
        const t = nums[i]
        nums[i] = nums[j]
        nums[j] = t
    }
    
    while(hi > lo) {
       if(nums[lo] === val) {
           swap(lo,hi)
           hi--
           continue
       }
        lo++
    }
    return hi+1
};

console.log(removeElement([3,2,2,3],3))