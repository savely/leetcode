/*
#352. Data Stream as Disjoint Intervals

Given a data stream input of non-negative integers a1, a2, ..., an, summarize the numbers seen so far as a list of disjoint intervals.

Implement the SummaryRanges class:

    SummaryRanges() Initializes the object with an empty stream.
    void addNum(int value) Adds the integer value to the stream.
    int[][] getIntervals() Returns a summary of the integers in the stream currently as a list of disjoint intervals [starti, endi]. The answer should be sorted by starti.

 

Example 1:

Input
["SummaryRanges", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals"]
[[], [1], [], [3], [], [7], [], [2], [], [6], []]
Output
[null, null, [[1, 1]], null, [[1, 1], [3, 3]], null, [[1, 1], [3, 3], [7, 7]], null, [[1, 3], [7, 7]], null, [[1, 3], [6, 7]]]

Explanation
SummaryRanges summaryRanges = new SummaryRanges();
summaryRanges.addNum(1);      // arr = [1]
summaryRanges.getIntervals(); // return [[1, 1]]
summaryRanges.addNum(3);      // arr = [1, 3]
summaryRanges.getIntervals(); // return [[1, 1], [3, 3]]
summaryRanges.addNum(7);      // arr = [1, 3, 7]
summaryRanges.getIntervals(); // return [[1, 1], [3, 3], [7, 7]]
summaryRanges.addNum(2);      // arr = [1, 2, 3, 7]
summaryRanges.getIntervals(); // return [[1, 3], [7, 7]]
summaryRanges.addNum(6);      // arr = [1, 2, 3, 6, 7]
summaryRanges.getIntervals(); // return [[1, 3], [6, 7]]

 

Constraints:

    0 <= value <= 104
    At most 3 * 104 calls will be made to addNum and getIntervals.


*/


var SummaryRanges = function() {
    
    this.nums = new Array(10001).fill(0);
    this.min = 10001;
    this.max = 0;
};

/** 
 * @param {number} value
 * @return {void}
 */
SummaryRanges.prototype.addNum = function(value) {

    this.nums[value] = 1;
    this.min = Math.min(this.min, value);
    this.max = Math.max(this.max, value);
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function() {

    const intervals = [];

    let i = this.min, start = -1;

    while(i <= this.max) {

        if(this.nums[i] && start < 0) start = i;

        if(this.nums[i] && !this.nums[i + 1]) {
            intervals.push([start, i]);
            start = -1;
        }
    }
   return intervals; 
};

/** 
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(value)
 * var param_2 = obj.getIntervals()
 */


let calls = [ "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals"];
let params = [ [1], [], [3], [], [7], [], [2], [], [6], []]

const ranges = new SummaryRanges();

const res = []

for (let i = 0; i < calls.length; i++) {

    res.push(ranges[calls[i]].call(ranges, params[i]));
}

console.dir(res);