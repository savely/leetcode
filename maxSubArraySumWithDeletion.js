/*
# 1186. Maximum Subarray Sum with One Deletion

ven an array of integers, return the maximum sum for a non-empty subarray (contiguous elements) with at most one element deletion. In other words, you want to choose a subarray and optionally delete one element from it so that there is still at least one element left and the sum of the remaining elements is maximum possible.

Note that the subarray needs to be non-empty after deleting one element.

 

Example 1:

Input: arr = [1,-2,0,3]
Output: 4
Explanation: Because we can choose [1, -2, 0, 3] and drop -2, thus the subarray [1, 0, 3] becomes the maximum value.
Example 2:

Input: arr = [1,-2,-2,3]
Output: 3
Explanation: We just choose [3] and it's the maximum sum.
Example 3:

Input: arr = [-1,-1,-1,-1]
Output: -1
Explanation: The final subarray needs to be non-empty. You can't choose [-1] and delete -1 from it, then get an empty subarray to make the sum equals to 0.
 

Constraints:

1 <= arr.length <= 105
-104 <= arr[i] <= 104
*/

/**
 * @param {number[]} arr
 * @return {number}
 */
 var maximumSum = function(arr) {

    if(arr.length === 1) return arr[0];

    const dpLeft = new Array(arr.length + 1), dpRight = new Array(arr.length + 1);

    dpLeft[0] = 0;
    dpLeft[1] = arr[0];
    dpRight[dpRight.length - 1] = 0;

    dpRight[dpRight.length - 2] = arr[arr.length - 1];
 
    for(let i = 2; i < dpLeft.length; i++) {
        dpLeft[i] = Math.max(arr[i - 1], arr[i - 1] + dpLeft[i - 1]);
    }

    for(let i = dpRight.length - 3; i >= 0; i--) {
        dpRight[i] = Math.max(arr[i], arr[i] + dpRight[i + 1]);
    }
    
    let max = dpLeft[dpLeft.length - 1];

    for(let i = 0; i < arr.length; i++) {
        max = Math.max(max, dpLeft[i] + dpRight[i + 1], (i > 0 ? dpLeft[i] : -Infinity), (i < arr.length ? dpRight[i] : -Infinity) );
    }

    return max;
};
