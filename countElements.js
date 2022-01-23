/*
#2148. Count Elements With Strictly Smaller and Greater Elements

Given an integer array nums, return the number of elements that have both a strictly smaller and a strictly greater element appear in nums.

 

Example 1:

Input: nums = [11,7,2,15]
Output: 2
Explanation: The element 7 has the element 2 strictly smaller than it and the element 11 strictly greater than it.
Element 11 has element 7 strictly smaller than it and element 15 strictly greater than it.
In total there are 2 elements having both a strictly smaller and a strictly greater element appear in nums.
Example 2:

Input: nums = [-3,3,3,90]
Output: 2
Explanation: The element 3 has the element -3 strictly smaller than it and the element 90 strictly greater than it.
Since there are two elements with the value 3, in total there are 2 elements having both a strictly smaller and a strictly greater element appear in nums.
 

Constraints:

1 <= nums.length <= 100
-105 <= nums[i] <= 105

*/

var countElements = function(nums) {

    if(nums.length < 3) return 0;
    
    nums.sort((a,b) => a - b);
    
    let ans = 0, i = 1;

    while(i < nums.length - 1) {

        let j = i + 1;

        while(nums[j] === nums[i]) j++;

        ans += (j < nums.length && nums[i - 1] < nums[i] && nums[j] > nums[i]) ? j - i : 0;

        i = j;
    }
    
    return ans;
};
