/*
#2009. Minimum Number of Operations to Make Array Continuous

You are given an integer array nums. In one operation, you can replace any element in nums with any integer.

nums is considered continuous if both of the following conditions are fulfilled:

    All elements in nums are unique.
    The difference between the maximum element and the minimum element in nums equals nums.length - 1.

For example, nums = [4, 2, 5, 3] is continuous, but nums = [1, 2, 3, 5, 6] is not continuous.

Return the minimum number of operations to make nums continuous.

 

Example 1:

Input: nums = [4,2,5,3]
Output: 0
Explanation: nums is already continuous.

Example 2:

Input: nums = [1,2,3,5,6]
Output: 1
Explanation: One possible solution is to change the last element to 4.
The resulting array is [1,2,3,5,4], which is continuous.

Example 3:

Input: nums = [1,10,100,1000]
Output: 3
Explanation: One possible solution is to:
- Change the second element to 2.
- Change the third element to 3.
- Change the fourth element to 4.
The resulting array is [1,2,3,4], which is continuous.

 

Constraints:

    1 <= nums.length <= 105
    1 <= nums[i] <= 109

*/

var minOperations = function(nums) {

    const n = nums.length;

    nums = [... new Set(nums)];
    
    nums.sort((a, b) => a - b);
    
    const search = (from) => {

        target = nums[from] + n - 1;
        
        let lo = from, hi = nums.length - 1;
        
        while(hi >= lo) {
            
            const mid = Math.floor((hi + lo) / 2);
            
            if(nums[mid] <= target) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
        return lo;
    };
    
    let ans = nums.length;
    
for(let i = 0; i < nums.length; i++) {

    let range = search(i) - i;
    ans = Math.min(ans, n - range);
}
    
    return ans;
};

let nums = [4,2,5,3];
//nums = [1,2,3,5,6];
nums = [1,2,10,100,1000,11];
nums = [8,5,9,9,8,4];
nums = [41,33,29,33,35,26,47,24,18,28];


console.log(minOperations(nums));