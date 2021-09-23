/*
#1300. Sum of Mutated Array Closest to Target

Given an integer array arr and a target value target, return the integer value such that when we change all 
the integers larger than value in the given array to be equal to value, the sum of the array gets as close as possible 
(in absolute difference) to target.

In case of a tie, return the minimum such integer.

Notice that the answer is not neccesarilly a number from arr.

 

Example 1:

Input: arr = [4,9,3], target = 10
Output: 3
Explanation: When using 3 arr converts to [3, 3, 3] which sums 9 and that's the optimal answer.
Example 2:

Input: arr = [2,3,5], target = 10
Output: 5
Example 3:

Input: arr = [60864,25176,27249,21296,20204], target = 56803
Output: 11361
 

Constraints:

1 <= arr.length <= 104
1 <= arr[i], target <= 105

*/

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
 var findBestValue = function(arr, target) {
    
    const sums = [0];

    arr.sort((a, b) => a - b);

    for(let i = 1; i <= arr.length; i++) {
        sums[i] = sums[i - 1] + arr[i - 1];
    }

    if(sums[sums.length - 1] <= target) return arr[arr.length - 1];

    let lo = 0, hi = arr.length - 1;

    while(hi >= lo) {

        const mid = (hi + lo) / 2 >> 0, cand = sums[mid] + arr[mid] * (arr.length - mid);

        if(cand === target) return arr[mid];

        if(cand > target) {

            const prevCand = sums[mid - 1] + (arr[mid - 1] || 0) * (arr.length - (mid - 1));

            if(prevCand === target) return (arr[mid - 1] || 0);

            if(prevCand > target) {
                hi = mid - 1;
                continue;
            }
            
             return Math.ceil((target - sums[mid]) / (arr.length -  mid) - 0.5);
        } else {
            lo = mid + 1;
        }
    }
    return 0;
};