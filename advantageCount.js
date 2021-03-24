var advantageCount = function(A, B) {
    A.sort((a,b) => a - b)
    const res = []
    
    let i = 0, j = 0
    
    while(i < B.length) {
        
        if(B[i] < A[j]){
            res.push(A[j++])
            i++
            continue
        }
        
        let k = j+1, found = false
        while(k < A.length) {
            if(A[k++] > B[i]) {
                found = true
                break
            }
        }
        
        if(found) {
            res.push(A.splice(k-1,1)[0])
        } else{
            res.push(A[j++])
        }
        i++
    }
    
    if(j < A.length) {
        res.push(...A.slice(j))
    }
    return res
};

let A = [12,24,8,32]
let B = [13,25,32,11]

console.log(advantageCount(A,B))
