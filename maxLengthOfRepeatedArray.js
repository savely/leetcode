/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findLength = function(nums1, nums2) {
    
    const dp = new Array(nums1.length + 1).fill(0).map(_ => new Array(nums2.length + 1).fill(0))

    let max = 0

    for(let i = 1; i < dp.length; i++) {
        for (let j = 0; j < dp[0].length; j++) {
            if(nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = dp[i-1][j-1] + 1
                max = Math.max(max, dp[i][j])
            }
        }
    }

    return max
};

let nums1 = [1,2,3,2,1]
let nums2 = [3,2,1,4,7]
nums1 = [0,0,0,0,0]
nums2 = [0,0,0,0,0]
nums1 = [0,0,0,0,1]
nums2 = [1,0,0,0,0]
nums1 = [0,0,0,0,0,0,1,0,0,0]
nums2 = [0,0,0,0,0,0,0,1,0,0]
nums1 = [0,1,0,0]
nums2 = [0,0,1,0]



console.log(findLength(nums1, nums2))