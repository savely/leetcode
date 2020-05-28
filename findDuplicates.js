/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {

    const res = []

    for(let i = 0 ; i < nums.length; i++) {
        const idx = Math.abs(nums[i]) -1
        if(nums[idx] < 0 ) {
            res.push(Math.abs(nums[i]))
        } else {
            nums[idx] *= -1
        }
    }
    return res
};