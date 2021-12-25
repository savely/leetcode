/*
#1262. Greatest Sum Divisible by Three

Given an array nums of integers, we need to find the maximum possible sum of elements of the array such that it is divisible by three.

 

Example 1:

Input: nums = [3,6,5,1,8]
Output: 18
Explanation: Pick numbers 3, 6, 1 and 8 their sum is 18 (maximum sum divisible by 3).
Example 2:

Input: nums = [4]
Output: 0
Explanation: Since 4 is not divisible by 3, do not pick any number.
Example 3:

Input: nums = [1,2,3,4,4]
Output: 12
Explanation: Pick numbers 1, 3, 4 and 4 their sum is 12 (maximum sum divisible by 3).
 

Constraints:

1 <= nums.length <= 4 * 10^4
1 <= nums[i] <= 10^4
*/

var maxSumDivThree = function(nums) {
    
    let sum = 0, fst1 = Infinity, snd1 = Infinity, fst2 = Infinity, snd2 = Infinity;

    for(let i = 0; i < nums.length; i++) {

        let el = nums[i];

        sum += el;

        if(el % 3 === 1) {
            if(el < fst1) {
                snd1 = fst1;
                fst1 = el;
            } else if(el < snd1) {
                snd1 = el;
            }
        }

        if(el % 3 === 2) {
            if(el < fst2) {
                snd2 = fst2;
                fst2 = el;
            } else if(el < snd2) {
                snd2= el;
            }
        }        
    }
    
    if(sum % 3 === 0) return sum;

    if(sum % 3 === 1) {
        return Math.max(sum - fst1, sum - fst2 - snd2, 0);
    } 

    return Math.max(sum - fst2, sum - fst1 - snd1, 0);
};
