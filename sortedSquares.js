/*
#977. Squares of a Sorted Array

Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.
*/

var sortedSquares = function(A) {
    
    if(A.length === 0) return A

    if(A[0] >= 0) return A.map(x => x*x)

    if(A[A.length-1] <= 0) return A.reverse().map(x => x*x)
    
    let pos = 0
    
    while(A[pos] < 0 && pos < A.length) {
        pos++
    }
   
    const res = []
    let neg = pos - 1
    
    while(neg >= 0 || pos < A.length) {
       
        let n = A[neg] * A[neg]
        let p = A[pos] * A[pos]

        if(isNaN(p)) {
            res.push(n)
            neg--
            continue
        }
        
        if(isNaN(n)) {
            res.push(p)
            pos++
            continue
        }

        if(n <= p) {
            res.push(n)
            neg--
            continue
        }
        
        res.push(p)
        pos++
    }
    
    return res
};