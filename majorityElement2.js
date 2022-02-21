/*
#229. Majority Element II

Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

 

Example 1:

Input: nums = [3,2,3]
Output: [3]
Example 2:

Input: nums = [1]
Output: [1]
Example 3:

Input: nums = [1,2]
Output: [1,2]
 

Constraints:

1 <= nums.length <= 5 * 104
-109 <= nums[i] <= 109

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var majorityElement = function(nums) {
    
    let fst = 0, countFst = 1, i = 1;

    while(nums[i] === nums[fst]) {
        i++;
        countFst++;
    }

    if(i >= nums.length) return [nums[fst]];

    let snd = i, countSnd = 1;
    
    for(j = i + 1; j < nums.length; j++) {

        if(nums[j] === nums[fst]) {
            countFst++;
            continue;
        }

        if(nums[j] === nums[snd]) {
            countSnd++;
            continue;
        }

        if(countFst <= 0) {
            fst = j;
            countFst = 1;
            continue;
        }
        
        if (countSnd <= 0) {
            snd = j;
            countSnd = 1;
            continue;
        }

        countFst--;
        countSnd--;        

    }

    countFst = 0, countSnd = 0;

    for(let i = 0; i < nums.length; i++) {
        countFst += nums[i] === nums[fst] ? 1 : 0;
        countSnd += nums[i] === nums[snd] ? 1 : 0;
    }

    const third = Math.floor(nums.length / 3), res = [];

    if(countFst > third) res.push(nums[fst]);
    if(countSnd > third) res.push(nums[snd]);

    return res;
};

let nums = [3,2,3];
//nums = [1];
//nums = [1,2];
//nums = [1,2];
//nums = [1,1,1,2,3,3];
//nums = [1,1,2,3,4,1,1,5,6,7,1,1,8,9,10,1,11,12,13,14]; //[1]
//nums = [4,2,1,1]; //[1]
//nums = [2,1,1,3,1,4,5,6];//[1]
nums = [1,1,2,2,7,7,8,8,9,3,9,3,9,3,9,3,9,3,9,3,9,3,9,3,9,3,9,3,9,3,9,3,9,3,9,3,9,3];//[9,3]

console.table(majorityElement(nums));