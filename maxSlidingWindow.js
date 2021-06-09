/*
#239. Sliding Window Maximum

You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

 

Example 1:

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
Example 2:

Input: nums = [1], k = 1
Output: [1]
Example 3:

Input: nums = [1,-1], k = 1
Output: [1,-1]
Example 4:

Input: nums = [9,11], k = 2
Output: [11]
Example 5:

Input: nums = [4,-2], k = 2
Output: [4]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
1 <= k <= nums.length
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {
    
    const maxHeap = new Heap(([v1, p1],[v2,p2]) => v2 - v1);
    
    let res = [];

    for(let i = 0; i < nums.length; i++) {

        maxHeap.push([nums[i], i]);
        
        if(i < k -1) {
            continue;
        }  
        
        while(maxHeap.top()[1] < i - k + 1) {
            maxHeap.pop();
        }
        
        res.push(maxHeap.top()[0]);
    }
    
    return res;

};


function Heap(compareFunc) {
    this.arr = []
    this.compareFunc = compareFunc
}

Heap.prototype.pop = function() {

  if(this.size() === 0) return undefined
  
  const val = this.arr[0]

  const last = this.arr.pop()

  if(this.arr.length === 0) return val

  this.arr[0] = last
  this.sinkDown(0)

  return val
}

Heap.prototype.top = function() {
    return this.size() ? this.arr[0] : undefined
}

Heap.prototype.push = function(val) {
this.arr.push(val)
this.bubbleUp(this.arr.length-1)
}

Heap.prototype.size = function() {
    return this.arr.length
}

Heap.prototype.bubbleUp = function(n) {
  const val = this.arr[n]

  while(n > 0) {
      const parentN = Math.floor((n+1)/2)-1
      const parent = this.arr[parentN]

      if(this.compareFunc(val,parent) > -1) break

      this._swap(n, parentN)
      n = parentN
  }
}

Heap.prototype.sinkDown = function(n) {

    const val = this.arr[n]
    const len = this.arr.length

    while(true) {
       let child2N = (n+1) * 2
       let child1N = child2N -1
       let swap  = null
       let child1 = null
       let child2 = null

       if(child1N < len) {
         child1 = this.arr[child1N]
          swap = this.compareFunc(val,child1) > -1 ? child1N : swap
       }

       if(child2N < len) {
        child2 = this.arr[child2N]
        swap = this.compareFunc(swap === null? val: child1, child2) > -1 ? child2N : swap
     }

     if(swap === null) break

    this._swap(swap, n)
    n = swap
    }
}

Heap.prototype._swap = function(m,n) {
    const tmp = this.arr[m]
    this.arr[m] = this.arr[n]
    this.arr[n] = tmp
} 

let arr = [7,2,4], k = 2;

console.table(maxSlidingWindow(arr, k));