/*
#1438. Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit

Given an array of integers nums and an integer limit, return the size of the longest non-empty subarray such that the absolute difference between any two elements of this subarray is less than or equal to limit.

 

Example 1:

Input: nums = [8,2,4,7], limit = 4
Output: 2 
Explanation: All subarrays are: 
[8] with maximum absolute diff |8-8| = 0 <= 4.
[8,2] with maximum absolute diff |8-2| = 6 > 4. 
[8,2,4] with maximum absolute diff |8-2| = 6 > 4.
[8,2,4,7] with maximum absolute diff |8-2| = 6 > 4.
[2] with maximum absolute diff |2-2| = 0 <= 4.
[2,4] with maximum absolute diff |2-4| = 2 <= 4.
[2,4,7] with maximum absolute diff |2-7| = 5 > 4.
[4] with maximum absolute diff |4-4| = 0 <= 4.
[4,7] with maximum absolute diff |4-7| = 3 <= 4.
[7] with maximum absolute diff |7-7| = 0 <= 4. 
Therefore, the size of the longest subarray is 2.
Example 2:

Input: nums = [10,1,2,4,7,2], limit = 5
Output: 4 
Explanation: The subarray [2,4,7,2] is the longest since the maximum absolute diff is |2-7| = 5 <= 5.
Example 3:

Input: nums = [4,2,2,2,4,4,2,2], limit = 0
Output: 3
 

Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109
0 <= limit <= 109
*/

/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
 var longestSubarray = function(nums, limit) {
    
    const mset = new Mset([nums[0]]);
    let  start = 0, end = 0, maxLen = 0;
    
    while(start < nums.length) {

        const min = mset.min(), max = mset.max();
        
       if(end < nums.length && max - min <= limit) {
           maxLen  = Math.max(maxLen, end - start + 1);
           end++;
           if(end < nums.length) mset.add(nums[end]);
           continue;
        } else {
            mset.remove(nums[start++]);
        }
    }
  return maxLen;   
};


const Mset = function(arr = []) {
      
    this._arr = [];
    this._map = {};

    for(let i = 0; i < arr.length; i++) {

        const el = arr[i];   

        if(this._map[el] === undefined) {
            this._map[el] = 0;
            this._arr.push(el);
        }
        this._map[el]++;
    }

    this._arr.sort((a,b) => a - b);
};

Mset.prototype.max = function() {
    return this._arr[this._arr.length - 1];
};

Mset.prototype.min = function() {
    return this._arr[0];
}

Mset.prototype.remove = function(n) {

    if(this._map[n] === undefined) return false;

    this._map[n]--;

    if(this._map[n] > 0) return true;

    delete this._map[n];

    let idx = this._arr.indexOf(n);

    this._arr.splice(idx, 1);

   return true;
}

Mset.prototype.add = function(n) {

    if(this._map[n] !== undefined) {
        this._map[n]++;
        return true;
    }

    this._map[n] = 1;


    if(this._arr.length === 0) {
        this._arr.push(n);
        return 0;   
    }    

    let lo = 0, top = this._arr.length - 1, hi = top;

    while(hi > lo) {

        const mid = Math.trunc((hi + lo) /2), el = this._arr[mid];

        if(el > n) {

            if(mid === 0) {
                this._arr.unshift(n);
                return 0;
            }

            if(this._arr[mid - 1] < n) {
                this._arr.splice(mid, 0, n);
                return mid;
            }
            hi = mid - 1;
        } else {

            if(mid === top) {
                this._arr.push(n);
                return top + 1;
            }

            if(this._arr[mid + 1] > n) {
                this._arr.splice(mid + 1, 0, n);
                return mid + 1;
            }
            lo = mid + 1;
        }
    }

    const el = this._arr[lo], idx = el < n ? lo + 1 : lo;

    this._arr.splice(idx, 0, n);

    return idx;
};