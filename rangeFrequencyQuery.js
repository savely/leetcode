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

    this.array = arr;
    this.subRangeSize = Math.sqrt(this.array.length) >> 0;
    this.partials = [];
    this.partials[0] = {};

    const freq = {};

    for(let i = 0; i < arr.length; i++) {

        const num = arr[i];
        freq[num] = freq[num] || 0;
    
        if(i >= this.subRangeSize && i % this.subRangeSize === 0) {
            this.partials.push(Object.assign({}, freq));
        }

        freq[num]++;        
    }

    this.partials.push(freq);

};

/** 
 * @param {number} left 
 * @param {number} right 
 * @param {number} value
 * @return {number}
 */
RangeFreqQuery.prototype.query = function(left, right, value) {

    let fr = 0;

    if(right - left <= this.subRangeSize) {
        
        for(let i = left; i <= right; i++) {
            fr += this.array[i] === value ? 1 : 0;
        }

        return fr;
    }
    const leftIdx = left / this.subRangeSize >> 0, rightIdx = right / this.subRangeSize >> 0 + 1;

    const leftVal = this.partials[leftIdx][value] || 0, rightVal = this.partials[rightIdx][value] || 0;

    fr = rightVal - leftVal;

    for(let i = leftIdx * this.subRangeSize; i < left; i++) {
        fr -= this.array[i] === value ? 1 : 0;
    }

    for(let i = rightIdx * this.subRangeSize; i <= right; i++) {
        fr += this.array[i] === value ? 1 : 0;
    }
    return fr;
};

/** 
 * Your RangeFreqQuery object will be instantiated and called as such:
 * var obj = new RangeFreqQuery(arr)
 * var param_1 = obj.query(left,right,value)
 */

const Runner = function(testcase) {

    const [ [nums],...calls] = testcase;
    this.rangeFreqQuery = new RangeFreqQuery(nums);
    this.calls = calls;
};

Runner.prototype.run = function() {
    const res = [];

    for(const [left, right, value] of this.calls) {
        res.push([left, right, value, this.rangeFreqQuery.query(left, right, value)])
    }

    return res;
}

let testcase  = [[[12, 22, 4, 33, 4, 56, 22, 2, 34, 33, 4, 22, 12, 34, 56]], [1, 10, 4], [0, 11, 33], [1, 11, 22]];

testcase = [[[5,1,7,10,7,8,6,3,9,1,1,4,10,9,1,9,5,9,4,3]],[9,11,1],[10,12,2],[14,17,4],[3,16,3],[3,11,2],[4,12,3],[6,16,1],[0,14,3],[4,15,7],[14,14,4]];
testcase = [[[5,1,7,10,7,8,6,3,9,1,1,4,10,9,1,9,5,9,4,3]],[4,15,7]];
//[null,2,0,0,1,0,1,3,1,1,0]
//testcase = [[[12, 22, 4, 33, 4, 56, 22, 2, 34, 33, 4, 22, 12, 34, 56]],[0,11,33]]
//testcase = [[[12,33,22,4,33,4,56,22,2,34,33,4,22,12,34,56]],[1,13,22],[4, 14, 56],[0,1,33]]; // 3,1,1

const runner = new Runner(testcase);

console.table(runner.run());