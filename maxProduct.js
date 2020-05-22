var maxProduct = function(nums) {
    
    if(nums.length === 0) return 0
    
    let localMin = nums[0], localMax = nums[0], max = nums[0]
    
    for(let i = 1; i < nums.length; i++) {
        const n = nums[i], minProd = localMin * n, maxProd = localMax * n

        localMin = Math.min(n, minProd, maxProd)
        localMax = Math.max(n, minProd, maxProd)
        max = Math.max(max, localMax)
    }
    
    return max
};