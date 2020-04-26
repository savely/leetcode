var findMin = function(nums) {
    let left = 0
    let right = nums.length - 1
    
    //if(nums[left] === nums[right]) return nums[left]
    
    while(right > left) {
        
        if(right-left === 1) return Math.min(nums[right], nums[left], nums[0]) 
        
        let mid = Math.trunc((left+right)/2)
        const md = mid

        while(nums[mid] === nums[mid-1]) {
            mid--
        }
        
        if(mid > 0 && nums[mid-1] > nums[mid]) return nums[mid]
        
        if(mid === 0 || nums[mid] > nums[0]) {
            left = md+1
            continue
        } 
        right = mid-1
    }
  return Math.min(nums[left], nums[0])
};

console.log(findMin([2,2,2,1,1]))
console.log(findMin([3,0,1,1,1]))