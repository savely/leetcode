/*
#78. Subsets

Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2:

Input: nums = [0]
Output: [[],[0]]
 

Constraints:

1 <= nums.length <= 10
-10 <= nums[i] <= 10
All the numbers of nums are unique.

*/


var subsets = function(nums) {

    const ans = [[]], count = 2 ** nums.length;
    
    for(let i = 1; i < count; i++) {

        let num = i;
        let j = 0;
        const arr =[];

        while(num > 0) {

            if(num % 2) arr.push(nums[j]);

            j++;
            num = num >> 1;
        }

        ans.push(arr);
    }

    return ans;
};
