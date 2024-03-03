/*
#2709. Greatest Common Divisor Traversal

You are given a 0-indexed integer array nums, and you are allowed to traverse between its indices. You can traverse between index i and index j, i != j, if and only if gcd(nums[i], nums[j]) > 1, where gcd is the greatest common divisor.

Your task is to determine if for every pair of indices i and j in nums, where i < j, there exists a sequence of traversals that can take us from i to j.

Return true if it is possible to traverse between all such pairs of indices, or false otherwise.

 

Example 1:

Input: nums = [2,3,6]
Output: true
Explanation: In this example, there are 3 possible pairs of indices: (0, 1), (0, 2), and (1, 2).
To go from index 0 to index 1, we can use the sequence of traversals 0 -> 2 -> 1, where we move from index 0 to index 2 because gcd(nums[0], nums[2]) = gcd(2, 6) = 2 > 1, and then move from index 2 to index 1 because gcd(nums[2], nums[1]) = gcd(6, 3) = 3 > 1.
To go from index 0 to index 2, we can just go directly because gcd(nums[0], nums[2]) = gcd(2, 6) = 2 > 1. Likewise, to go from index 1 to index 2, we can just go directly because gcd(nums[1], nums[2]) = gcd(3, 6) = 3 > 1.

Example 2:

Input: nums = [3,9,5]
Output: false
Explanation: No sequence of traversals can take us from index 0 to index 2 in this example. So, we return false.

Example 3:

Input: nums = [4,3,12,8]
Output: true
Explanation: There are 6 possible pairs of indices to traverse between: (0, 1), (0, 2), (0, 3), (1, 2), (1, 3), and (2, 3). A valid sequence of traversals exists for each pair, so we return true.

 

Constraints:

    1 <= nums.length <= 105
    1 <= nums[i] <= 105

*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canTraverseAllPairs = function(nums)  {

    const connected = new Array(nums.length).fill(-1);

    const find = (i) => connected[i] < 0 ? i : find(connected[i]);
  
    const union = (i1, i2) => {
        
        const p1 = find(i1), p2 = find(i2);
        
        if(p1 === p2) return p1;
        
        const r1 = connected[p1], r2 = connected[p2];
        
        if(r1 <= r2) {
            connected[p1] += r2;
            connected[p2] = p1;
        } else {
            connected[p2] += r1;
            connected[p1] = p2;
        }
    }

    const n = Math.floor(Math.sqrt(Math.max(...nums)));

    const sieve = Array.from({length : n + 1}, () => true);
    sieve[0] = sieve[1] = false;

    for(let i = 2; i * i < sieve.length; i++) {

        if(!sieve[i]) continue;

        for(let j = i * i; j <= sieve.length; j += i) {
            sieve[j] = false;
        }
    }
    
    const primes = [];

    for(let i = 2; i <= n; i++) {
        if(sieve[i]) primes.push(i);
    }

    console.dir(primes);

    const map = {};

    for(let i = 0; i < nums.length; i++) {

        const num = nums[i];

        if(num < 2) return false;

        for(let j = 0; j < primes.length && primes[j] <= num; j++) {

            const prime = primes[j];

            if(num % prime === 0) {

                if(map[prime] !== undefined) {
                    union(i, map[prime]);
                } else {
                    map[prime] = i;
                }
            }
        }
    }
    
    let numComponents = 0;

    for(const num of connected) {
        numComponents += num < 0 ? 1 : 0;

        if(numComponents > 1) return false;
    }

    return true;
};

let nums = [2,3,6];
nums = [3,9,5,16,12];
nums = [2,2];

nums = Array.from({length : 100000}, (_, i) => 100000 - i);

console.log(canTraverseAllPairs(nums));