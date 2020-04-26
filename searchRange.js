var searchRange = function(nums, target) {
    
    if(nums.length === 0) return [-1,-1]

    if(nums.length < 2) return nums[0] === target ? [0,0] : [-1,-1]
    
    const searchLeft = function() {
        let lo = 0
        let hi = nums.length-1


       
        while(hi>lo) {

            if(hi - lo < 2) return (nums[lo] === target ? lo :nums[hi] === target ? hi : -1)
            
            let mid = Math.trunc((hi+lo)/2)
            
            if(nums[mid] === target && (mid === 0 || nums[mid-1] < target)) return mid
          
            if(nums[mid] < target) {
                lo = mid
                continue
            }
            hi = mid
        }
        

        return -1
    }

    const searchRight = function(start) {
        let hi = nums.length-1
        let lo = start+1

        if(lo > hi || nums[lo] > target) return start
        if(lo === hi) return lo

        while(hi > lo) {
            let mid = Math.trunc((hi+lo)/2)

            if(hi - lo < 2) return (nums[hi] === target) ? hi : lo

            if(nums[mid] === target && (mid >= nums.length-1 || nums[mid+1] > target)) return mid
    
        if(nums[mid] === target) {
            lo = mid
            continue
        }
        hi = mid
    }
        
    }

    const left = searchLeft()
    
    if(left < 0) return [-1,-1]
    
    return [left, searchRight(left)]
};


console.log(searchRange([4,4,4,4,5,5,5],5))