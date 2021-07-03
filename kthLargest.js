/*
#215. Kth Largest Element in an Array

Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

 

Example 1:

Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
Example 2:

Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
 

Constraints:

1 <= k <= nums.length <= 104
-104 <= nums[i] <= 104
*/

var findKthLargest = function(nums, k) {

    if(nums.length < 2) return nums[0];
    
    const i = quickSelect(nums, 0, nums.length - 1, nums.length - k - 1);

    return nums[i];
};

const quickSelect = (arr, from, to, k) => {

    if(from > to) return undefined;

    if(from === to) return k === 1 ? arr[to] : undefined;

    let pivot = from;

    for(let i = from + 1; i <= to; i++) {

        if(arr[i] < arr[pivot]) {
            const tmp = arr[i];
            arr[i] = arr[pivot];
            arr[pivot] = tmp;
            pivot = i;
        }
    }

    if(pivot === k) return pivot;
    
    if(pivot < k) return quickSelect(arr, pivot + 1, to, k - pivot);

    return quickSelect(arr, from, pivot - 1, k);
}

let nums = [3,2,1,5,6,4], k = 2;

console.log(findKthLargest(nums, k));