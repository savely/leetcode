/*
#658. Find K Closest Elements

Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

An integer a is closer to x than an integer b if:

    |a - x| < |b - x|, or
    |a - x| == |b - x| and a < b

 

Example 1:

Input: arr = [1,2,3,4,5], k = 4, x = 3
Output: [1,2,3,4]

Example 2:

Input: arr = [1,2,3,4,5], k = 4, x = -1
Output: [1,2,3,4]

 

Constraints:

    1 <= k <= arr.length
    1 <= arr.length <= 104
    arr is sorted in ascending order.
    -104 <= arr[i], x <= 104
*/

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
 var findClosestElements = function(arr, k, x) {

    if(arr.length <= k) return arr;

    if(x <= arr[0]) return arr.slice(0,k);

    if(x >= arr[arr.length-1]) return arr.slice(-k);

    const findClosest = (n) => {

        let lo = 0, hi = arr.length -1;

        while (lo < hi) {

            const mid = ((lo + hi) / 2) >> 0; el = arr[mid];

            if(el === n) return mid;

            if(el > n) {
               const prev = arr[mid - 1];
               if(prev < n) return el - n >= n - prev ? mid - 1 : mid;
               hi = mid - 1;
               continue;
            }

            const next = arr[mid + 1];
            if(next > n) return next - n < n - el ? mid + 1 : mid;
            lo = mid + 1;
        }
        return lo;
    }

    let idx = findClosest(x), left = idx, right = idx;

    while (right - left < k - 1) {

        if(left === 0) return arr.slice(0, k);

        if(right === arr.length - 1) return arr.slice(-k);

        (x - arr[left - 1] > arr[right + 1] - x) ? right ++ : left--;
    }

    return arr.slice(left, right + 1); 
};