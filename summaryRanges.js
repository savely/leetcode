/*
# 228 Summary Ranges

 are given a sorted unique integer array nums.

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:

    "a->b" if a != b
    "a" if a == b

*/

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    
    if (nums.length < 2) return nums.map(n => n.toString())
    
    const res = [], last = nums.length-1
    let start = nums[0], end = nums[0]
    
    for(let i = 1; i < nums.length; i++) {
        const num = nums[i]
        
        if(num === end) continue
        
        if(num === end+1) {
            end++
            continue
        }
        
        const range = (start === end) ? `${start}` : `${start}->${end}`
        res.push(range)
        start = num
        end = num
    }
    
    const range = (start === end) ? `${start}` : `${start}->${end}`
    res.push(range)

    return res
};

let arr = [0,1,2,4,5,7]
console.log(summaryRanges(arr))
