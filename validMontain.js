var validMountainArray = function(A) {
    
    if(A.length < 3) return false
    
    let pivot = 0

    let prev = 0
    let next = 1
    
    while(A[next] > A[prev] && next < A.length) {
        pivot = next
        prev++
        next++
    }
    
    if(pivot === 0 || pivot >= A.length -1) return false
    
    for(i = pivot+1; i < A.length; i++) {
        if(A[i] >= A[i-1]) return false
    }
    
    return true
};

console.log(validMountainArray([3,5,5]))