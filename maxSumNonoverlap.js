/*
#1031. Maximum Sum of Two Non-Overlapping Subarrays

Given an array nums of non-negative integers, return the maximum sum of elements in two non-overlapping (contiguous) subarrays, which have lengths firstLen and secondLen.  (For clarification, the firstLen-length subarray could occur before or after the secondLen-length subarray.)

Formally, return the largest V for which V = (nums[i] + nums[i+1] + ... + nums[i+firstLen-1]) + (nums[j] + nums[j+1] + ... + nums[j+secondLen-1]) and either:

0 <= i < i + firstLen - 1 < j < j + secondLen - 1 < nums.length, or
0 <= j < j + secondLen - 1 < i < i + firstLen - 1 < nums.length.
 

Example 1:

Input: nums = [0,6,5,2,2,5,1,9,4], firstLen = 1, secondLen = 2
Output: 20
Explanation: One choice of subarrays is [9] with length 1, and [6,5] with length 2.
Example 2:

Input: nums = [3,8,1,3,2,1,8,9,0], firstLen = 3, secondLen = 2
Output: 29
Explanation: One choice of subarrays is [3,8,1] with length 3, and [8,9] with length 2.
Example 3:

Input: nums = [2,1,5,6,0,9,5,0,3,8], firstLen = 4, secondLen = 3
Output: 31
Explanation: One choice of subarrays is [5,6,0,9] with length 4, and [3,8] with length 3.
*/

const maxSubarray = (A, length, fromIdx, toIdx) => {
        
    let  sum = 0, max = 0, last = fromIdx
    
    for(let i = fromIdx; i < toIdx; i++) {

        sum += A[i]
        
        if(length >= fromIdx + i) {
            max = sum
            last = i
            continue
        }
        
        sum -= A[i - length]
        if(sum > max) {
           max = sum
            last = i
        }
    }
    
    return [max, last]
}

let A = [0,6,5,2,2,5,1,9,4]

console.log(maxSubarray(A, 1, 0, A.length))