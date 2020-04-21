var pivotIndex = function(nums) {
    
    if(nums.length < 2) return nums.length - 1
    
    const sums = Array(nums.length).fill(0)
    let sum = 0
    let len = nums.length-1
    sums[0] = nums[len]
    
    
    for(let i = nums.length-2; i >= 0; i--) {
        sums[len-i] = sums[len-i-1] + nums[i]
    }
    
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i]
        
        if(sum === sums[len-i]) return i
    }
    
    return -1
};


//console.log(pivotIndex([1, 7, 3, 6, 5, 6]))
//console.log(pivotIndex([1, 2, 3, 1, 2]))
console.log(pivotIndex([-1,-1,0,0,-1,-1]))