/*
#3040. Maximum Number of Operations With the Same Score II

Given an array of integers called nums, you can perform any of the following operation while nums contains at least 2 elements:

    Choose the first two elements of nums and delete them.
    Choose the last two elements of nums and delete them.
    Choose the first and the last elements of nums and delete them.

The score of the operation is the sum of the deleted elements.

Your task is to find the maximum number of operations that can be performed, such that all operations have the same score.

Return the maximum number of operations possible that satisfy the condition mentioned above.

 

Example 1:

Input: nums = [3,2,1,2,3,4]
Output: 3
Explanation: We perform the following operations:
- Delete the first two elements, with score 3 + 2 = 5, nums = [1,2,3,4].
- Delete the first and the last elements, with score 1 + 4 = 5, nums = [2,3].
- Delete the first and the last elements, with score 2 + 3 = 5, nums = [].
We are unable to perform any more operations as nums is empty.

Example 2:

Input: nums = [3,2,6,1,4]
Output: 2
Explanation: We perform the following operations:
- Delete the first two elements, with score 3 + 2 = 5, nums = [6,1,4].
- Delete the last two elements, with score 1 + 4 = 5, nums = [6].
It can be proven that we can perform at most 2 operations.

 

Constraints:

    2 <= nums.length <= 2000
    1 <= nums[i] <= 1000

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function(nums) {

    const f = (i, j, target, dp) => {

        if(i >= j) return 0;

        if(dp[i][j] > -1) return dp[i][j];

        const arr = [0];

        if(nums[i] + nums[j] === target) {
            arr.push(1 + f(i + 1, j - 1, target, dp));
        }

        if(j - i < 2) return Math.max(...arr);


        if(nums[i] + nums[i + 1] === target) {
            arr.push(1 + f(i + 2, j, target, dp));
        }

        if(nums[j] + nums[j - 1] === target) {
            arr.push(1 + f(i, j - 2, target, dp));
        }

        dp[i][j] = Math.max(...arr);

        return dp[i][j];
    };

    const arr = [];

    const len = nums.length - 1,  args = [[1, len - 1, nums[0] + nums[len]], 
                                          [2, len, nums[0] + nums[1]],
                                          [0, len - 2, nums[len] + nums[len - 1]]
                                        ];

    for(let i = 0; i < 3; i++) {

        const dp = Array.from({length : nums.length}, () => new Array(nums.length).fill(-1));
        arr.push(f.apply(null, [...args[i], dp]));
    }
    
    const res =  1 + Math.max(...arr);

   // console.dir(dp);

    return res;
};

let nums = [3,2,1,2,3,4]; //3
nums = [3,2,6,1,4]; //2

//nums = new Array(2000).fill(1000);

console.log(maxOperations(nums));