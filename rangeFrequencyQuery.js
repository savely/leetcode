/*
#2080. Range Frequency Queries

Design a data structure to find the frequency of a given value in a given subarray.

The frequency of a value in a subarray is the number of occurrences of that value in the subarray.

Implement the RangeFreqQuery class:

RangeFreqQuery(int[] arr) Constructs an instance of the class with the given 0-indexed integer array arr.
int query(int left, int right, int value) Returns the frequency of value in the subarray arr[left...right].
A subarray is a contiguous sequence of elements within an array. arr[left...right] denotes the subarray that contains the elements of nums between indices left and right (inclusive).

 

Example 1:

Input
["RangeFreqQuery", "query", "query"]
[[[12, 33, 4, 56, 22, 2, 34, 33, 22, 12, 34, 56]], [1, 2, 4], [0, 11, 33]]
Output
[null, 1, 2]

Explanation
RangeFreqQuery rangeFreqQuery = new RangeFreqQuery([12, 33, 4, 56, 22, 2, 34, 33, 22, 12, 34, 56]);
rangeFreqQuery.query(1, 2, 4); // return 1. The value 4 occurs 1 time in the subarray [33, 4]
rangeFreqQuery.query(0, 11, 33); // return 2. The value 33 occurs 2 times in the whole array.
 

Constraints:

1 <= arr.length <= 105
1 <= arr[i], value <= 104
0 <= left <= right < arr.length
At most 105 calls will be made to query
*/

/**
 * @param {number[]} arr
 */
 var RangeFreqQuery = function(arr) {

    this.freq = {};
    this.arr = arr;

    for(let i = 0; i < arr.length; i++) {

        const num = arr[i];

        this.freq[num] = this.freq[num] || [];
        this.freq[num].push(i);      
    }

};

/** 
 * @param {number} left 
 * @param {number} right 
 * @param {number} value
 * @return {number}
 */
 var RangeFreqQuery = function(arr) {

    this.freq = {};

    for(let i = 0; i < arr.length; i++) {

        const num = arr[i];

        this.freq[num] = this.freq[num] || [];
        this.freq[num].push(i);      
    }

};

/** 
 * @param {number} left 
 * @param {number} right 
 * @param {number} value
 * @return {number}
 */

RangeFreqQuery.prototype.query = function(left, right, value) {

    const fst = this.search(value, left);

    if(fst < 0) return 0;

    const lst = this.search(value, right, false, fst);

    if(lst < 0) return 0;

    return lst - fst + 1;
};

RangeFreqQuery.prototype.search = function(val, idx, bigger = true, from = 0) {

    const arr = this.freq[val];

    if(arr === undefined || arr.length === 0) return -1;

    if(bigger && arr[arr.length - 1] < idx) return -1;

    if(!bigger && arr[0] > idx) return -1;

    if(arr.length === 1) return 0;

    let lo = from, hi = arr.length - 1;

    while(hi >= lo) {

        const mid = (hi + lo) >> 1;

        if(arr[mid] === idx) return mid;

        if(arr[mid] > idx) {

            const prev = mid > 0 ? arr[mid - 1] : -1;

            if(prev < idx && bigger) return mid;
            hi = mid - 1;
        } else {

            const next = mid >= arr.length - 1 ? Infinity : arr[mid + 1];
            if(next > idx && !bigger) return mid;
            lo = mid + 1;
        }
    }

    return -1;
};



/** 
 * Your RangeFreqQuery object will be instantiated and called as such:
 * var obj = new RangeFreqQuery(arr)
 * var param_1 = obj.query(left,right,value)
 */
