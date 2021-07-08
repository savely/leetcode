/*
#718. Maximum Length of Repeated Subarray

Given two integer arrays nums1 and nums2, return the maximum length of a subarray that appears 
in both arrays.

Example 1:

Input: nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
Output: 3
Explanation: The repeated subarray with maximum length is [3,2,1].

Example 2:

Input: nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
Output: 5

 

Constraints:

    1 <= nums1.length, nums2.length <= 1000
    0 <= nums1[i], nums2[i] <= 100

*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findLength = function(nums1, nums2) {

    const positions = new Array(101).fill(0).map(_ => new Set());

    let maxLength = 0;

    for(let i = 0; i < nums1.length; i++) {
        positions[nums1[i]].add(i);
    }

    for(let i = 0; i < nums2.length && i + maxLength < nums2.length; i++) {

        for(const pos of positions[nums2[i]]) {

            let length = 1, n = nums2[i + length];

            while(i + length < nums2.length && pos + length < nums1.length && positions[n].has(pos + length)) {
                length++;
                n = nums2[i + length];
            }

            maxLength = Math.max(maxLength, length);
        }
    }
    return maxLength;
};

let nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7];
//nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0];
nums1 = [0,0,0,0,0,0,1,0,0,0];
nums2 = [0,0,0,0,0,0,0,1,0,0];

console.log(findLength(nums1, nums2));