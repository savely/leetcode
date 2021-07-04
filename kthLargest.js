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
    
    res =  quickSelect(nums, 0, nums.length - 1, nums.length - k);

    console.table(nums);

    return res;
};

const swap  = (arr, i, j) => {

   if(i === j) return;

    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
};

const quickSelect = (arr, from, to, k) => {

    if(from === to) return arr[to];

    const idx = Math.floor(Math.random() * (to - from)) + from;
    swap(arr, idx, to);
    let pivot = arr[to];
    let left = from;

    for(let i = from; i < to; i++) {

        if(arr[i] < pivot) {
            swap(arr, i, left++);
        }
    }
    
    swap(arr, left, to);
    if(left === k) return arr[left];

    if(left < k) return quickSelect(arr, left + 1, to, k);

    return quickSelect(arr, from, left - 1, k);
}

let nums = [3,2,1,5,6,4], k = 2;
nums = [3,2,3,1,2,4,5,5,6], k = 4;

console.log(findKthLargest(nums, k));