/*
Given an array A of integers, for each integer A[i] we need to choose either x = -K or x = K, and add x to A[i] (only once).

After this process, we have some array B.

Return the smallest possible difference between the maximum value of B and the minimum value of B.
*/
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeII = function(A, K) {
    
    if(A.length === 1) return 0
    
    const mins = [Infinity, Infinity], maxes = [-Infinity, -Infinity]


    for (let i = 0; i < A.length; i++) {
        const el = A[i]
        mins[0] = Math.min(mins[0], el - K)
        mins[1] = Math.min(mins[1], el + K)
        maxes[0] = Math.max(maxes[0], el - K)
        maxes[1] = Math.max(maxes[1], el - K)
    }
 
    return Math.min(maxes[0] - mins[0], maxes[1] - mins[0], maxes[0] - mins[1], maxes[1] - mins[1])
};

console.log(smallestRangeII([1,3,6], 3))