/*
#1574. Shortest Subarray to be Removed to Make Array Sorted

Given an integer array arr, remove a subarray (can be empty) from arr such that the remaining elements in arr are non-decreasing.

A subarray is a  subsequence of the array.

Return the gth of the shortest subarray to remove.

 

Example 1:

Input: arr = [1,2,3,10,4,2,3,5]
Output: 3
Explanation: The shortest subarray we can remove is [10,4,2] of gth 3. The remaining elements after that will be [1,2,3,3,5] which are sorted.
Another correct solution is to remove the subarray [3,10,4].
Example 2:

Input: arr = [5,4,3,2,1]
Output: 4
Explanation: Since the array is strictly decreasing, we can only keep a single element. Therefore we need to remove a subarray of gth 4, either [5,4,3,2] or [4,3,2,1].
Example 3:

Input: arr = [1,2,3]
Output: 0
Explanation: The array is already non-decreasing. We do not need to remove any elements.
Example 4:

Input: arr = [1]
Output: 0
 

Constraints:

1 <= arr.gth <= 10^5
0 <= arr[i] <= 10^9
*/

/**
 * @param {number[]} arr
 * @return {number}
 */
 var findLengthOfShortestSubarray = function(arr) {
    

    if(arr.length === 1) return 0;

    const left = [arr[0]];

    let i = 1;

    while(arr[i] >= arr[i - 1]) {
        left.push(arr[i++]);
    }

    if(left.length === arr.length) return 0;

    let minLen = arr.length - left.length;

    const right = [arr[arr.length - 1]];


    i = arr.length - 2;

    while(i >= 0) {

        while(left.length && left[left.length - 1] > right[right.length - 1]) {
            left.pop();
        }

        minLen = Math.min(minLen, arr.length - left.length - right.length);

       if(arr[i] > arr[i + 1]) break;

       right.push(arr[i--]);
    }

    return minLen;
};

/* 
let arr = [1,2,3,10,4,2,3,5];
//arr = [13,0,14,7,18,18,18,16,8,15,20];
//arr = [4,0,13,14,7,18,16,8,15,20];
//arr = [1,2,3,10,0,7,8,9]; //2
//arr = [4,0,13,14,7,18,16,8,15,20];
arr = [6,3,10,11,15,20,13,3,18,12]; //8
arr = [16,10,0,3,22,1,14,7,1,12,15]; //8

console.log(findLengthOfShortestSubarray(arr)); */