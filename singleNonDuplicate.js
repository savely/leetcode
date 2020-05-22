/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {

    let lo = 0, hi = nums.length-1

    while(hi > lo) {
        const mid = Math.floor((hi + lo) / 2) 

        if(mid === 0 && nums[mid] < nums[mid+1]) return nums[mid]

        if(mid === nums.length-1 && nums[mid] > nums[mid-1]) return nums[mid]

        if(nums[mid-1] < nums[mid] && nums[mid] < nums[mid+1]) return nums[mid]

        const pr1 = nums[mid-1] === nums[mid] && mid % 2 === 1
        const pr2 = nums[mid] === nums[mid+1] && mid % 2 === 0    

        if(pr1 || pr2) {
            lo = mid+1
        } else {
            hi = mid
        }
    }

    if(hi === lo) return nums[lo]
};

console.log(singleNonDuplicate([1,1,2]))