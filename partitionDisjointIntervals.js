/*
#915. Partition Array into Disjoint Intervals

Given an array nums, partition it into two (contiguous) subarrays left and right so that:

Every element in left is less than or equal to every element in right.
left and right are non-empty.
left has the smallest possible size.
Return the length of left after such a partitioning.  It is guaranteed that such a partitioning exists.

 

Example 1:

Input: nums = [5,0,3,8,6]
Output: 3
Explanation: left = [5,0,3], right = [8,6]
Example 2:

Input: nums = [1,1,1,0,6,12]
Output: 4
Explanation: left = [1,1,1,0], right = [6,12]
 

Note:

2 <= nums.length <= 30000
0 <= nums[i] <= 106
It is guaranteed there is at least one way to partition nums as described.
*/

/**
 * @param {number[]} A
 * @return {number}
 */
 var partitionDisjoint = function(A) {
    

    const maxes = new Array(A.length).fill(-1);

    maxes[0] = A[0];

    for(let i = 1; i < A.length; i++) {
        maxes[i] = Math.max(A[i], maxes[i-1]);
    }

    const mins = new Array(A.length).fill(10 ** 6 + 1);

    mins[mins.length - 1] = A[A.length - 1];

    for(let i = A.length - 2; i >= 0; i--) {

        mins[i] = Math.min(A[i], mins[i + 1]);        
    }

    for(let i = 1; i < A.length; i++) {
         if(maxes[i - 1] <= mins[i]) return i;
    }

    return 0;
};

let nums = [5,0,3,8,6];
//nums = [1,1,1,0,6,12];

console.log(partitionDisjoint(nums));