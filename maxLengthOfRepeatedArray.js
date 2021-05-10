/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findLength = function(nums1, nums2) {
    
    
    const map = {}
    
    for(let i = 0; i < nums1.length; i++) {
        
        const num = nums1[i]
        
        if(!map[num]) {
            map[num] = new Set()
        }
        map[num].add(i)
    }
    
    let length = 0, maxLength = 0, candidates = []
    
    for(let i = 0; i < nums2.length; i++) {
        
        const num = nums2[i]
        
        if(!map[num]) {
           maxLength = Math.max(maxLength, length)
            length = 0
            candidates.length = 0
            continue
        }
        
        if(!candidates.length) {
            candidates.push(...map[num])
            length = 1
            continue
        }
        
        const nextSet = map[num], nextCandidates = []
        
        for(const idx of candidates) {
            if(nextSet.has(idx + 1)){
                nextCandidates.push(idx + 1) 
            }
        }
        
        candidates.length = 0

        if(nextCandidates.length) {
            length++
            candidates.push(...nextCandidates)
        } else {
            candidates.push(...nextSet)
        }
        maxLength = Math.max(maxLength, length)
    }
    
    return maxLength
};

let nums1 = [1,2,3,2,1]
let nums2 = [3,2,1,4,7]
nums1 = [0,0,0,0,0]
nums2 = [0,0,0,0,0]
nums1 = [0,0,0,0,1]
nums2 = [1,0,0,0,0]
nums1 = [0,0,0,0,0,0,1,0,0,0]
nums2 = [0,0,0,0,0,0,0,1,0,0]
nums1 = [0,1,0,0]
nums2 = [0,0,1,0]



console.log(findLength(nums1, nums2))