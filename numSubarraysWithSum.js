/*
#
 */

/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
 var numSubarraysWithSum = function(nums, goal) {

  
    let start = 0, end = 0, count = 0

    if(goal === 0) {

        while (end < nums.length) {

            if(nums[start] === 1) {
                start++
                end = start
                continue;
            }

            if(nums[end] === 0) {
                end++
                continue
            }

            count += (end - start) * (end - start + 1) /2

            end++
            start = end
        }
        count += (end - start) * (end - start + 1) /2

        return count
    }
    
    let zeroesBefore = 0,  sum = 0
    
    while(end < nums.length) {

        if(sum === goal) {

            while(start < end && nums[start] === 0) {
                zeroesBefore++
                start++
            }
            count += 1 + zeroesBefore

            sum += nums[end++]
            continue
        }

        if(sum > goal) {
            zeroesBefore = 0
            sum -= nums[start++]
            continue
        }
        
        sum += nums[end++]
    }
        
    while(start < nums.length) {
        count += sum === goal ? 1 + zeroesBefore : 0 
        if(nums[start] === 1) zeroesBefore = 0;
        sum -= nums[start++]  
    }
    
   return count

};

let nums = [1,0,1,0,1], k =2;
nums = [0,0], k = 0;
nums = [0,1,1,1,1], k = 3;
nums = [0,0,0,0,0,0,1,0,0,0], k = 0;

console.log(numSubarraysWithSum(nums, k))