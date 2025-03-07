/*
#2523. Closest Prime Numbers in Range

Given two positive integers left and right, find the two integers num1 and num2 such that:

    left <= nums1 < nums2 <= right .
    nums1 and nums2 are both prime numbers.
    nums2 - nums1 is the minimum amongst all other pairs satisfying the above conditions.

Return the positive integer array ans = [nums1, nums2]. If there are multiple pairs satisfying these conditions, return the one with the minimum nums1 value or [-1, -1] if such numbers do not exist.

A number greater than 1 is called prime if it is only divisible by 1 and itself.

 

Example 1:

Input: left = 10, right = 19
Output: [11,13]
Explanation: The prime numbers between 10 and 19 are 11, 13, 17, and 19.
The closest gap between any pair is 2, which can be achieved by [11,13] or [17,19].
Since 11 is smaller than 17, we return the first pair.

Example 2:

Input: left = 4, right = 6
Output: [-1,-1]
Explanation: There exists only one prime number in the given range, so the conditions cannot be satisfied.

 

Constraints:

    1 <= left <= right <= 106

*/

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function(left, right) {

    const sieve = Array.from({length : right + 1}, (_, i) => i % 2 ? true : false);

    sieve[0] = sieve[1] = false;
    sieve[2] = true;

    for(let i = 3; i <= Math.sqrt(right); i+= 2) {
        if (sieve[i]) {
            for(let j = i * i; j <= right; j += i) {
                sieve[j] = false;
            }
        }
    }

    let fst = -1, snd = -1, last = -1;

    for(let i = left; i <= right; i++) {

        if(!sieve[i]) continue;

        if(fst < 0) {
            fst = i;
            continue;
        }

        if(snd < 0) {
            snd = i;
            last = i;
            continue;
        }

        if(i - last < snd - fst) {
            fst = last;
            snd = i;
        }

        last = i;
    }
    
    return snd < 0 ? [-1, -1] : [fst, snd];
};

let left = 411, right = 656;
left = 1, right = 1000000;
left = 19, right = 31; //[29, 31]

console.log(closestPrimes(left, right));