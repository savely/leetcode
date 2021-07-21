/*
    #565

A zero-indexed array A of length N contains all integers from 0 to N-1. Find and return the longest length of set S, where S[i] = {A[i], A[A[i]], A[A[A[i]]], ... } subjected to the rule below.

Suppose the first element in S starts with the selection of element A[i] of index = i, the next element in S should be A[A[i]], and then A[A[A[i]]]… By that analogy, we stop adding right before a duplicate element occurs in S.

 

Example 1:

Input: A = [5,4,0,3,1,6,2]
Output: 4
Explanation: 
A[0] = 5, A[1] = 4, A[2] = 0, A[3] = 3, A[4] = 1, A[5] = 6, A[6] = 2.

One of the longest S[K]:
S[0] = {A[0], A[5], A[6], A[2]} = {5, 6, 2, 0}
 

Note:

N is an integer within the range [1, 20,000].
The elements of A are all distinct.
Each element of A is an integer within the range [0, N-1].    
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var arrayNesting = function(nums) {
 
    let max = 0
    
    for(let i = 0; i < nums.length; i++) {

        
        if(nums[i] === -1) continue;
        
       let count = 1, idx = nums[i] 
       
       nums[i] = -1
       
        while(nums[idx] > -1) {
            count++
            const next = nums[idx]            
            nums[idx] = -1
            idx = next
        }
        
        max = Math.max(max, count)
        
    }
    
    return max
};

let arr =  [5,4,0,3,1,6,2]

//console.log(arrayNesting(arr))


const sum = a => {
    return b => { 
        if(b) return sum(a + b)

        return a
       }
} 

const calc = (f, ...params) => {
    return (...args) => {
        if(params.length + args.length >= f.length) {
            return f.apply(this, params.concat(args))
        }
        return calc(f, ...params, ...args)
    }
}

const curry = (f, ..._) => {
      if(typeof f !== "function") {
          throw new Error("curry() must accept function as a first parameter")
      }  
       
    const params = [], func = f

    const curried =  (arg, ...rest) => {

        params.push(arg)
        
        if(params.length === f.length) {
              return func.apply(this, params)
        }

        return curried
    }

    return curried
}

const sum3 = (a,b,c) => a + b + c
const mul3  = (a,b,c) => a * b * c
const f = curry(sum3)
const g = curry(mul3)

console.log(g(11)(4)(2))
