/*
#493. Reverse Pairs

Given an integer array nums, return the number of reverse pairs in the array.

A reverse pair is a pair (i, j) where 0 <= i < j < nums.length and nums[i] > 2 * nums[j].

 

Example 1:

Input: nums = [1,3,2,3,1]
Output: 2
Example 2:

Input: nums = [2,4,3,5,1]
Output: 3
 

Constraints:

1 <= nums.length <= 5 * 104
-231 <= nums[i] <= 231 - 1
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var reversePairs = function(nums) {

    if(nums.length < 2) return 0;

    const positions = {};

    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        positions[num] = positions[num] || [];
        positions[num].push(i);
    }

    const keys = Object.keys(positions).map(n => +n);

    keys.sort((a, b) => a - b);


    const findKey = (idx) => {

        let lo = 0, hi = keys.length - 1;

        while (hi >= lo) {

            const mid = (hi + lo) >> 1;

            if(nums[idx] <= keys[mid] * 2) {
                if(nums[idx] > keys[mid - 1] * 2) return mid - 1;
                hi = mid - 1;
            } else {
                lo = mid + 1;
            }
        }

        return -1;
    };
    
    const findBiggerIdx = (idxs, idx) => {

        if(idxs.length === 0 || idxs[idxs.length - 1] <= idx) return 0;

        if(idx < idxs[0]) return idxs.length;

        let lo = 0, hi = idxs.length - 1;

        while(hi >= lo) {

            const mid = (hi + lo) >> 1;

            if(idxs[mid] > idx) {
                if(idxs[mid - 1] <= idx) return idxs.length - mid;
                hi = mid + 1;
            } else {
                lo = mid + 1;
            }
        }
        return idxs.length - lo;
    };

    let pairs = 0;

    for(let i = 0; i < nums.length; i++) {
       
        const key = findKey(i);

        if(key < 0) continue;

        for(let j = 0; j <= key; j++) {

           pairs += findBiggerIdx(positions[ keys[j] ] , i);
        }

    }    
    
    return pairs;
};

let nums = [1,3,2,3,1];
nums = [2,4,3,5,1];

console.log(reversePairs(nums));