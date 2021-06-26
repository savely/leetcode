/*
#845
Let's call any (contiguous) subarray B (of A) a mountain if the following properties hold:

    B.length >= 3
    There exists some 0 < i < B.length - 1 such that B[0] < B[1] < ... B[i-1] < B[i] > B[i+1] > ... > B[B.length - 1]

(Note that B could be any subarray of A, including the entire array A.)

Given an array A of integers, return the length of the longest mountain. 

Return 0 if there is no mountain.
*/

/**
 * @param {number[]} A
 * @return {number}
 */
var longestMountain = function(A) {
    
    let max = 0, up = 0, down = 0, i = 1, climbing = true
    
    while(i < A.length) {
        
        if(A[i-1] === A[i]) {
            if(!climbing && up > 0 && down > 0) {
                max = Math.max(max, up + down + 1)
            }
            up = down = 0
            climbing = true
            i++
            continue
        }
        
        if(A[i-1] < A[i]) {
            if(climbing) {
                up++
                i++
                continue
            }
            climbing = true
            //we`ve finished downhill, calculating length of the montain
            
            if(up > 0) {
                max = Math.max(max, up + down + 1)
            }
            
            up = down = 0
            continue
        }
        
        climbing = false
        down++
        i++
    }
    
    if(!climbing && up > 0) {
        max = Math.max(max, up + down + 1)
    }
     
    return max
};

console.log(longestMountain([0,0,1,2,0,0]))