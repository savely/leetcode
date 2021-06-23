/*
#703. Kth Largest Element in a Stream

Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Implement KthLargest class:

    KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
    int add(int val) Returns the element representing the kth largest element in the stream.

 

Example 1:

Input
["KthLargest", "add", "add", "add", "add", "add"]
[[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
Output
[null, 4, 5, 5, 8, 8]

Explanation
KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
kthLargest.add(3);   // return 4
kthLargest.add(5);   // return 5
kthLargest.add(10);  // return 5
kthLargest.add(9);   // return 8
kthLargest.add(4);   // return 8

 

Constraints:

    1 <= k <= 104
    0 <= nums.length <= 104
    -104 <= nums[i] <= 104
    -104 <= val <= 104
    At most 104 calls will be made to add.
    It is guaranteed that there will be at least k elements in the array when you search for the kth element.

*/

/**
 * @param {number} k
 * @param {number[]} nums
 */
 var KthLargest = function(k, nums) {
    
    this.k = k;
    this.nums = nums;
    this.nums.sort((a,b) => b -a);
    this.nums.length = Math.min(nums.length, k);
      
  };
  
  /** 
   * @param {number} val
   * @return {number}
   */
  KthLargest.prototype.add = function(val) {
      
      const kth = this.nums[this.nums.length -1], top = this.nums[0];
      
      if(val <= kth && this.nums.length === this.k) return kth;

      if(val <= kth) {
          this.nums.push(val);
          return val;
      }
      
      if(val >= top) {
          this.nums.unshift(val);
      } else {
        const pos = this.search(val);
        this.nums.splice(pos, 0, val);
      }

      if(this.nums.length >this.k) this.nums.pop();
      
      return this.nums[this.nums.length -1];
  };
      
  KthLargest.prototype.search = function(val) {
     
      let lo = 0, hi = this.k -1;
      
      while(hi > lo) {
          
          const mid = Math.trunc((hi + lo) / 2), el = this.nums[mid];
          
          if(el === val) return mid;
          
          if(el > val) {
              
              if(this.nums[mid + 1] <= val) return mid + 1;
              
              lo = mid + 1;
              continue;
          }
          
          if(this.nums[mid - 1] >= val) return mid;
          
          hi = mid - 1;
      }
      return lo;
  }
  
  /** 
   * Your KthLargest object will be instantiated and called as such:
   * var obj = new KthLargest(k, nums)
   * var param_1 = obj.add(val)
   */

let cmds = ["KthLargest","add","add","add","add","add"];
let params = [[3,[4,5,8,2]],[3],[5],[10],[9],[4]];
cmds = ["KthLargest","add","add","add","add","add"];
params = [[3,[5,-1]],[2],[1],[-1],[3],[4]]; //[null,-1,1,1,2,3]
cmds = ["KthLargest","add","add","add","add","add"];
params = [[2,[0]],[-1],[1],[-2],[-4],[3]];// [null,-1,0,0,0,1]

const run = function(cmds, params) {

    const obj = new KthLargest(...params[0]);

    const res = [];
    
    for(let i = 1; i < cmds.length; i++) {

        const cmdName = cmds[i], f = obj[cmdName];
      res.push((f.apply(obj, params[i])));
    }
 return res;
}

console.log(run(cmds, params));