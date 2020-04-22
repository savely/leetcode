var findDuplicate1 = function(nums) {
   
  let slow = nums[0]
  let fast = nums[nums[0]]

  while(slow !== fast) {
      slow = nums[slow]
      fast = nums[nums[fast]]
  }

  let probe = nums[0]

  while(probe !== slow) {
      probe = nums[probe]
      slow  = nums[slow]
  }
   return probe
};

console.log(findDuplicate([1,3,4,2,2]))