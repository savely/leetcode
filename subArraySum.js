/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var checkSubarraySum = function(nums, k) {
    
    const sums = new Map()
    let sum = 0
    let res = 0

    for(let i = 0; i < nums.length; i++) {
        sum += nums[i]
        sums.set(sum, i)
    }

    for(let [subSum,i] of sums) {
        if(sums.has(sum - subSum + k)) {
            res++
        }
    }

    return res
};

console.log(checkSubarraySum([1,1,2,1,1],2))