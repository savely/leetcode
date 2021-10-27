/*
#75. Sort Colors

Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]
Example 3:

Input: nums = [0]
Output: [0]
Example 4:

Input: nums = [1]
Output: [1]
 

Constraints:

n == nums.length
1 <= n <= 300
nums[i] is 0, 1, or 2.

*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    
    const f = (left, right, color) => {
        
        while(right >= left) {

            if(nums[left] === color) {
                left++;
                continue;    
            }

            if(nums[right] === color) {
                const t = nums[right];
                nums[right] = nums[left];
                nums[left] = t;
            }

            right--;
        }
        return left;       
    };
    
    const len = nums.length - 1;
    
    f(f(0, len, 0), len, 1);
    
    return nums;
};


const toColors = c => c == 0 ? 'r' :(c == 1 ? 'w' : 'b');
let nums = [2,0,2,1,1,0,0,1,2];
nums = [2,0,1]
console.log(nums.map(toColors));
console.log('------------------------------');
sortColors(nums);
console.log(nums.map(toColors));