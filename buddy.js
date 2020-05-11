/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    
    if(A.length !== B.length || A.length < 2) return false
    
    let fst = -1, snd = -1, hasDups = false

    const lettersA = new Set()
    
    for(let i=0; i < A.length; i++) {
        if(!hasDups && lettersA.has(A[i])) {
            hasDups = true
        } else if(!hasDups){
            lettersA.add(A[i])
        }

        if(A[i] === B[i]) continue
        
        if(fst < 0) {
           fst = i 
        } else {
            snd = i
            break
        }
    }
    
    if(fst < 0 && snd < 0) return hasDups

    if(fst < 0 || snd < 0) return false
    
    const arr = Array.from(A)
    const tmp = arr[fst]
    arr[fst] = arr[snd]
    arr[snd] = tmp
    
    return arr.join('') === B 
};