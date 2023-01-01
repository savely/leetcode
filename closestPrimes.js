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

    const isPrime = (n) => {

        for(let i = 2; i <= Math.sqrt(n); i++) {
            if(n % i === 0) return false;
        }

        return true;
    }

    let last = -1, minDist = Infinity; 
    const ans = [-1,-1];

    for(let i = left; i <= right; i++) {

        if(isPrime(i)) {

            if(last > 0 && (i - last) < minDist) {
                minDist = i - last;
                ans[0] = last;
                ans[1] = i;

                if(minDist < 2 || (last > 2 && minDist < 3)) return ans;
            }

            last = i;
        }
    }
    return ans;
};

let left = 411, right = 656;
left = 1, right = 1000000;

console.log(closestPrimes(left, right));