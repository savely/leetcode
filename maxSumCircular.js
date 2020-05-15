/**
 * @param {number[]} A
 * @return {number}
 */
var maxSubarraySumCircular = function(A) {
    
     if(A.length === 0) return 0

     if(A.length  < 2) return A[0]

     const cadane = function (arr, start, end, sign ) {
    
        if(start > end) return 0
    
        let local = sign * arr[start], global = local
    
         for(let i = start+1; i < end; i++) {
             const n = sign * arr[i]
             local = Math.max(local + n, n)
             global = Math.max(global, local)
         }
      return global   
    };
    

     const S = A.reduce((acc, n) => acc+n, 0)
     const cand1 = cadane(A, 0, A.length, 1) 
     const cand2 = S + cadane(A, 1, A.length, -1) 
     const cand3 = S + cadane(A, 0, A.length-1, -1) 
    
     return Math.max(cand1, cand2, cand3) 
};



const arr = [2,12,-5,1,3,-2,6]
const arr1 = [5,-3,6]
//console.log(cadaneMaxSubArray(arr1))
console.log(maxSubarraySumCircular([-2]))