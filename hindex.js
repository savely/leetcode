var hIndex = function(citations) {
    
   if(citations.length === 0) return 0

   citations.sort((x1,x2) => x2 - x1)

   let idx = citations[0]

   for (let i = 1; i < citations.length; i++) {
        
     if(citations[i] >= i) {
         idx = citations[i]
         continue
     }

     return idx
   }

   return idx
};

var hammingDistance = function(x, y) {
  
    let diff = x ^ y
    let dist = 0
    
    while(diff > 0) {
        dist += diff % 2
        diff  = diff >> 1
    }
    return dist
};


//console.log(hammingDistance(1,4))

var intersection = function(nums1, nums2) {
    
    const hash = {}
    const res =  []
    

    
    for(let i = 0; i < nums1.length; i++) {
        
       if(hash[nums1[i]] === undefined) {
              hash[nums1[i]] = 0  
         }
    }
    
    for(let i = 0; i < nums2.length; i++) {
        
       if(hash[nums2[i]] !== undefined) {
              res.push(nums2[i])
              delete(hash[nums2[i]])
         }
    }
    
    return res

};

console.log(intersection([1,2,2,1],[2,2]))