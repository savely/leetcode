
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    
    if(nums.length == 0) return [[]]
    if(nums.length == 1) return [[nums[0]]]
    
    const res = []
    
     for (let i = 0; i < nums.length; i++) {
         
         const rest = nums.slice(0, i).concat(nums.slice(i + 1, nums.length));

         const restPerm = permute(rest)

         for(const perm of restPerm) {
             res.push([nums[i], ...perm])
         }

     }
    
    return res;               
};

console.log(permute([1,2,3]))