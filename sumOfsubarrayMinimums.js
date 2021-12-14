/*
#907. Sum of Subarray Minimums

Given an array of integers arr, find the sum of min(b), where b ranges over every (contiguous) subarray of arr. 
Since the answer may be large, return the answer modulo 109 + 7.

 

Example 1:

Input: arr = [3,1,2,4]
Output: 17
Explanation: 
Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4]. 
Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
Sum is 17.
Example 2:

Input: arr = [11,81,94,43,3]
Output: 444
 

Constraints:

1 <= arr.length <= 3 * 104
1 <= arr[i] <= 3 * 104

*/

/**
 * @param {number[]} arr
 * @return {number}
 */
 var sumSubarrayMins = function(arr) {

    const  leftStack = [], rightStack = [];

    let sum = 0;

    for(let i = 0; i < arr.length; i++) {

        const right = arr.length - 1 - i;

        while(leftStack.length && arr[ leftStack[leftStack.length - 1] ] >= arr[i]) leftStack.pop();

        const  distLeft = leftStack.length ? i - leftStack[leftStack.length - 1] - 1 : i;

        leftStack.push(i);

        while(rightStack.length && arr[ rightStack[rightStack.length - 1] ] >= arr[right]) rightStack.pop();

        const distRight = rightStack.length ? rightStack[rightStack.length - 1] - right -  1: arr.length - 1 - right;

        rightStack.push(right);

        sum +=  distLeft * arr[i] + distRight * arr[right];        
    }

    return sum;
};

let arr = [3,1,2,4];
//arr = [11,81,94,43,3];

console.log(sumSubarrayMins(arr));