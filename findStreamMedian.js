/*
295. Find Median from Data Stream

The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value and the median is the mean of the two middle values.

For example, for arr = [2,3,4], the median is 3.
For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
Implement the MedianFinder class:

MedianFinder() initializes the MedianFinder object.
void addNum(int num) adds the integer num from the data stream to the data structure.
double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.
 

Example 1:

Input
["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
[[], [1], [2], [], [3], []]
Output
[null, null, null, 1.5, null, 2.0]

Explanation
MedianFinder medianFinder = new MedianFinder();
medianFinder.addNum(1);    // arr = [1]
medianFinder.addNum(2);    // arr = [1, 2]
medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3);    // arr[1, 2, 3]
medianFinder.findMedian(); // return 2.0
 

Constraints:

-105 <= num <= 105
There will be at least one element in the data structure before calling findMedian.
At most 5 * 104 calls will be made to addNum and findMedian.
*/

/**
 * initialize your data structure here.
 */
 var MedianFinder = function() {
    
    this.arr  = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {

  this.arr.push(num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {

    const len = this.arr.length - 1;

    if(this.arr.length === 1) return this.arr[0];

    if(this.arr.length === 2) return (this.arr[0] + this.arr[1]) / 2;

    if(this.arr.length % 2) return this.quickSelect(0, len, (this.arr.length - 1) / 2);

    const mid = this.arr.length / 2 >> 0, el1 = this.quickSelect(0, len, mid), el2 = this.quickSelect(0, len, mid - 1);
    
    return (el1 + el2) / 2;
};

MedianFinder.prototype.quickSelect = function(from, to, k) {

    let idx  = Math.floor(Math.random() * (to - from)) + from;
    this.swap(idx, to);
    let pivot = this.arr[to], left = from;

    for(let i = from; i < to; i++) {
        if(this.arr[i] < pivot) {
            this.swap(i, left++);
        }
    }

    this.swap(left, to);

    if(left === k) return this.arr[left];

    if(left < k) return this.quickSelect( left + 1, to, k);

    return this.quickSelect(from, left - 1, k);    
}

MedianFinder.prototype.swap = function(i,j) {
    [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];
}

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

const finder = new MedianFinder();

finder.addNum(5);
finder.addNum(1);
finder.addNum(2);
finder.addNum(6);
finder.addNum(3);
finder.addNum(4);
finder.addNum(0);

console.log(finder.findMedian());