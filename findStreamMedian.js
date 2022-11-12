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

//TODO : implenment two heaps approach



/**
 * initialize your data structure here.
 */

 const { MinPriorityQueue, MaxPriorityQueue}  = require('@datastructures-js/priority-queue');

 var MedianFinder = function() {
    
    this.minQueue  = new MinPriorityQueue();
    this.maxQueue = new MaxPriorityQueue();
    this.length = 0;
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {

  this.length++;

  if(this.maxQueue.size() && num > this.maxQueue.front()["element"]) {
      this.minQueue.enqueue(num);
  } else {
      this.maxQueue.enqueue(num);  
  }


  while(this.maxQueue.size() - this.minQueue.size() > (this.length % 2)) {

    const {element} = this.maxQueue.dequeue();
    this.minQueue.enqueue(element);
  }

  while(this.minQueue.size() - this.maxQueue.size() > ((this.length + 1) % 2)) {

    const {element} = this.minQueue.dequeue();
    this.maxQueue.enqueue(element);
  }

};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {

 const left = this.maxQueue.front()["element"];

 if(this.length % 2) return left;

 const right = this.minQueue.front()["element"];

 return (left + right) / 2;
};


/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

const finder = new MedianFinder();

finder.addNum(6);
finder.addNum(10);
finder.addNum(2);
finder.addNum(6);
finder.addNum(5);


//["MedianFinder","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian"]
//[[],[6],[],[10],[],[2],[],[6],[],[5],[],[0],[],[6],[],[3],[],[1],[],[0],[],[0],[]]

console.log(finder.findMedian());