/*
#315. Count of Smaller Numbers After Self

You are given an integer array nums and you have to return a new counts array. The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].

 

Example 1:

Input: nums = [5,2,6,1]
Output: [2,1,1,0]
Explanation:
To the right of 5 there are 2 smaller elements (2 and 1).
To the right of 2 there is only 1 smaller element (1).
To the right of 6 there is 1 smaller element (1).
To the right of 1 there is 0 smaller element.

Example 2:

Input: nums = [-1]
Output: [0]

Example 3:

Input: nums = [-1,-1]
Output: [0,0]

 

Constraints:

    1 <= nums.length <= 105
    -104 <= nums[i] <= 104
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

 var countSmaller = function(nums) {
   
    const res = new Array(nums.length).fill(0), sorted = [];

    const searchAndInsert = function(val) {

        if (sorted.length === 0 || val < sorted[0]) {
            sorted.unshift(val);
            return 0;   
        }

        if(val > sorted[sorted.length -1]) {
            sorted.push(val);
            return sorted.length -1;
        }

       
        let lo = 0, hi = sorted.length - 1;

        while(hi > lo) {

            const mid = Math.trunc((hi + lo) / 2);

            if(sorted[mid] >= val) {
                if(sorted[mid - 1] < val) {
                    sorted.splice(mid, 0, val);
                    return mid;
                }
              hi = mid -1;  
            } else {
              lo = mid + 1;
            }
        }

    sorted.splice(lo, 0, val);
    return lo;
    }

    for(let i = nums.length - 1; i >= 0; i--) {
      res[i] = searchAndInsert(nums[i]);
    }

    return res;
};

arr = [5,5,2,2,6,1,1];
arr = [5,2,2,2,6,6,6,1,1];

console.log(countSmaller(arr));