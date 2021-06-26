/*
#1007 Minimum Domino Rotations

In a row of dominoes, A[i] and B[i] represent the top and bottom halves of the ith domino.  (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)

We may rotate the ith domino, so that A[i] and B[i] swap values.

Return the minimum number of rotations so that all the values in A are the same, or all the values in B are the same.

If it cannot be done, return -1.
*/

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minDominoRotations = function(A, B) {
    
    let swaps = new Array(6).fill(0) 
    
    for (let i = 0; i < 6; i++) {
        
        const val = i + 1
        let swapsA = 0, swapsB = 0, matches = true
         
        for(let j = 0; j < A.length; j++) {
            
            if(A[j] === val && B[j] === val) continue
            
            if(A[j] !== val && B[j] !== val) {
               matches = false
                swaps[i] = Infinity
                break
            }
            
            (A[j] === val) ? swapsA++ : swapsB++
        }
        
        if(matches) {
            swaps[i] = Math.min(swapsA, swapsB)
        }
    }
     
     let minSwaps = Math.min(...swaps)
     
     return minSwaps > A.length ? -1 : minSwaps
 };

let A = [2,1,2,4,2,2]
let B = [5,2,6,2,3,2]

 console.log (minDominoRotations(A, B))