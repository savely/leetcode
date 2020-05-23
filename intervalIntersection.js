/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function(A, B) {
  const res = []

  let i = 0, j = 0
   
  while(i < A.length && j < B.length) {
     const [aLo, aHi] = A[i], [bLo, bHi] = B[j]

     if(aHi < bLo) {
         i++
         continue
     }

     if(bHi < aLo) {
         j++
         continue
     }

     if(aHi === bHi) {
         res.push([Math.max(aLo,bLo), aHi])
         i++
         j++
         continue
     }

     res.push([Math.max(aLo,bLo), Math.min(aHi,bHi)])

     if(aHi > bHi) {
         j++
     } else {
         i++
     }

  }

  return res
};