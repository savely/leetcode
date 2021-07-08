/*
#718. Maximum Length of Repeated Subarray

Given two integer arrays nums1 and nums2, return the maximum length of a subarray that appears 
in both arrays.

Example 1:

Input: nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
Output: 3
Explanation: The repeated subarray with maximum length is [3,2,1].

Example 2:

Input: nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
Output: 5

 

Constraints:

    1 <= nums1.length, nums2.length <= 1000
    0 <= nums1[i], nums2[i] <= 100

*/

var RollingHash = function (prime = 107, mod = (10 ** 9 + 7)) {

    this.hash = 0n;
    this.length = 0;
    this.prime = BigInt(prime);
    this.mod = BigInt(mod);
};

RollingHash.prototype.get = function () {
    return this.hash;
};

RollingHash.prototype.add = function (n) {
    this.hash *= this.prime;
    this.hash += BigInt(n);
    this.hash %= this.mod;
    this.length++;
}

RollingHash.prototype.rem = function (n) {
    const prev = (BigInt(n) * (this.prime ** BigInt(--this.length)) % this.mod) % this.mod;
    this.hash -= prev;
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findLength = function(nums1, nums2) {

    const check = function (length) {
        
        const hashes = {};

        let j = 0, hash = new RollingHash();

        while(j < nums1.length) {

            hash.add(nums1[j++]);

            if(hash.length === length) {
                const n = hash.get();
                hashes[n] = j - length;
                hash.rem(nums1[j - length])
            }

 
        }

        j = 0, hash = new RollingHash();

        while(j < nums2.length) {

            hash.add(nums2[j++]);

            if(hash.length === length) {
                const n = hash.get();
                if(hashes[n] !== undefined)  {
                  
                    const from = hashes[n];

                    for(let k = 0; k < length; k++) {
                    if(nums2[j - length + k] !== nums1[from + k]) return false;
                    }

                    return true;
                }
                hash.rem(nums2[j - length])
            }


        }   
        return false;  
    };

    let lo = 1, hi = Math.min(nums1.length, nums2.length);

    if(check(hi)) return hi;

    while(hi > lo) {

        const mid = ((hi + lo) / 2) >> 0;

        if(check(mid)) {
            if(!check(mid + 1)) return mid;

            lo = mid  + 1;
        } else  {
            if(check(mid - 1)) return mid - 1;

            hi = mid - 1;
        }
    }
    return 0;
};

let nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7];
//nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0];
//nums1 = [0,0,0,0,0,0,1,0,0,0];
//nums2 = [0,0,0,0,0,0,0,1,0,0];
nums1 = [83,79,64,67,90,29,8,11,70,19];
nums2 = [74,66,27,16,22,79,64,67,90,29];
nums1 = [1,0,0,0,0,0,0,0,0,0];
nums2 = [0,0,0,0,0,0,0,0,0,1];



console.log(findLength(nums1, nums2));