/*
#1005. Maximize Sum Of Array After K Negations

Given an array nums of integers, we must modify the array in the following way: we choose an i and replace nums[i] with -nums[i], and we repeat this process k times in total.  (We may choose the same index i multiple times.)

Return the largest possible sum of the array after modifying it in this way.

 

Example 1:

Input: nums = [4,2,3], k = 1
Output: 5
Explanation: Choose indices (1,) and nums becomes [4,-2,3].
Example 2:

Input: nums = [3,-1,0,2], k = 3
Output: 6
Explanation: Choose indices (1, 2, 2) and nums becomes [3,1,0,2].
Example 3:

Input: nums = [2,-3,-1,5,-4], k = 2
Output: 13
Explanation: Choose indices (1, 4) and nums becomes [2,3,-1,5,4].
 

Note:

1 <= nums.length <= 10000
1 <= k <= 10000
-100 <= nums[i] <= 100
*/

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
 var largestSumAfterKNegations = function(A, K) {
    
    A.sort((a,b) => a - b);
    
    let i = 0, minPositive = Infinity, sum = 0; 
    
    while(A[i] < 0 && K > 0 && i < A.length) {
        sum -= A[i];
        minPositive = Math.min(minPositive, -A[i])
        K--;
        i++;
    }
    
    while(i < A.length) {
      sum += A[i];
      if(A[i] >= 0) minPositive = Math.min(minPositive, A[i]);
      i++;  
   }
    
  
    return sum + (K % 2 ? -  2 * minPositive : 0);
};

 let A = [2,-3,-1,5,-4], K = 2;

 console.log(largestSumAfterKNegations(A,K));