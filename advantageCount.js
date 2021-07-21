var advantageCount = function(A, B) {
    
    const bSearch = (arr, start, end, target) => {
        let lo = start, hi = end
        
        while(hi > lo) {
            const mid = Math.ceil((lo + hi) / 2)
            
            if(arr[mid] > target && (mid === lo || arr[mid -1] <= target)) return mid
            
            if(arr[mid] > target) {
               hi-- 
            } else {
                lo++
            }
        }
        
        if(hi === lo) return arr[hi] > target ? hi : -1

        return -1
    }
    
    A.sort((a,b) => a - b)
    const res = []
    
    let i = 0, j = 0
    
    while(i < B.length) {
        
        if(B[i] < A[j]){
            res.push(A[j++])
            i++
            continue
        }
        
        const found = bSearch(A, j, A.length-1, B[i])
        
        if(found > 0) {
            res.push(A.splice(found,1)[0])
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

console.log(B)

console.log(advantageCount(A,B))
