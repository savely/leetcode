    var containsNearbyAlmostDuplicate = function(nums, k, t) {
        const hash = {}
     for(let i =0; i< nums.length; i++) {
        hash[nums[i]] = i

         if(hash[nums[i]] !== undefined) {
             if(i - hash[nums[i]] <= k
                && Math.abs(nums[i] - nums[hash[nums[i]]]) <= t) return true
         }

     }
      return  false
    };


console.log(containsNearbyAlmostDuplicate([2,1],1,1))