/*
#1296. Divide Array in Sets of K Consecutive Numbers

Given an array of integers nums and a positive integer k, find whether it's possible to divide this array into sets of k consecutive numbers
Return True if it is possible. Otherwise, return False.

 

Example 1:

Input: nums = [1,2,3,3,4,4,5,6], k = 4
Output: true
Explanation: Array can be divided into [1,2,3,4] and [3,4,5,6].

Example 2:

Input: nums = [3,2,1,2,3,4,3,4,5,9,10,11], k = 3
Output: true
Explanation: Array can be divided into [1,2,3] , [2,3,4] , [3,4,5] and [9,10,11].

Example 3:

Input: nums = [3,3,2,2,1,1], k = 3
Output: true

Example 4:

Input: nums = [1,2,3,4], k = 3
Output: false
Explanation: Each array should be divided in subarrays of size 3.

 

Constraints:

    1 <= k <= nums.length <= 105
    1 <= nums[i] <= 109


*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var isPossibleDivide = function(nums, k) {
    
    const map = {};
    
    for(let i = 0; i < nums.length; i ++) {
        
        const el = nums[i];
        
        if(map[el] === undefined) {
            map[el] = 0;
        }
        map[el] ++;
    }
    
    const elems = [];
    
    for(const el in map) {
        elems.push([+el, map[el]])
    }
    
    elems.sort(([el1, c1], [el2, c2]) => el1 - el2);
    
    for(let i = 0; i < elems.length; i ++) {
        
        const [el, count] = elems[i];
        elems[i][1] = 0;

        if(i > elems.length - k) {
            if(count > 0) return false;
            continue;
        }
        
        if(count === 0) continue;
        
        for(let j = i + 1; j < i + k; j++) {
            
            const [nextEl , nextCount] = elems[j];
            
            if(nextEl !== el + (j - i) || count > nextCount) return false;
            
            elems[j][1] -= count;
        }
    }
    
    return true;
};

nums = [1,2,3,3,4,4,5,6,6], k = 4

console.log(isPossibleDivide(nums, k));