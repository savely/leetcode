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

    const  leftStack = [], rightStack = [], left = [], right = [];

    for(let i = 0; i < arr.length; i++) {

        while(leftStack.length && arr[  leftStack[leftStack.length - 1] ] >= arr[i]) leftStack.pop();

        left.push( leftStack.length ? i - leftStack[leftStack.length - 1] : i + 1);

        leftStack.push(i);

        const  rIdx = arr.length - 1 - i;

        while(rightStack.length && arr[  rightStack[rightStack.length - 1] ] > arr[rIdx]) rightStack.pop();

        right.push( rightStack.length ? rightStack[rightStack.length - 1] - rIdx: arr.length - rIdx);

        rightStack.push(rIdx);
    }

    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        sum = (sum + arr[i] * left[i] * right[arr.length - 1 - i]) % (10 ** 9 + 7);
    }

    return sum;
};

let arr = [3,1,2,4];
arr = [11,81,94,43,3];
//arr = [1,11,81,22,94,17,1,43,3];//462

console.log(sumSubarrayMins(arr));