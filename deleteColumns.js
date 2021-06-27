/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
    
    if(A.length < 2) return 0
    
    const delIdxs = new Set()
    let current = A[0]
    
    for (let i = 1; i < A.length; i++) {
        
        for(let j = 0; j < current.length; j++) {
            if(current[j] > A[i][j]) {
                delIdxs.add(j)
            }
        }
     if(delIdxs.size === current.length) break

     current = A[i]
    }
    return delIdxs.size
};


console.log(minDeletionSize(["cba","daf","ghi"]))