/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {

    if(nums.length)
   
    const dp = Array(nums.length).fill(1)

    let max = 1

    for(let i = nums.length-2; i >= 0; i--) {

        for(let j = i+1; j < nums.length; j++) {
            if(nums[j] <= nums[i]) continue

            dp[i] = Math.max(dp[i], dp[j] + 1)

            max = Math.max(max, dp[i])
        }
    }

    return max
};

let arr = [10,9,2,5,3,7,101,18]

console.log(lengthOfLIS(arr))