/*
#632. Smallest Range Covering Elements from K Lists

You have k lists of sorted integers in non-decreasing order. Find the smallest range that includes at least one number from each of the k lists.

We define the range [a, b] is smaller than range [c, d] if b - a < d - c or a < c if b - a == d - c.

 

Example 1:

Input: nums = [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]
Output: [20,24]
Explanation: 
List 1: [4, 10, 15, 24,26], 24 is in range [20,24].
List 2: [0, 9, 12, 20], 20 is in range [20,24].
List 3: [5, 18, 22, 30], 22 is in range [20,24].

Example 2:

Input: nums = [[1,2,3],[1,2,3],[1,2,3]]
Output: [1,1]

 

Constraints:

    nums.length == k
    1 <= k <= 3500
    1 <= nums[i].length <= 50
    -105 <= nums[i][j] <= 105
    nums[i] is sorted in non-decreasing order.

*/

const { PriorityQueue } = require('@datastructures-js/priority-queue');

var smallestRange = function(nums) {

    const queue = new PriorityQueue({compare : ([list1, idx1], [list2, idx2]) => nums[list1][idx1] - nums[list2][idx2]}), k = nums.length;

    let maxEl = -Infinity, minRange = Infinity;

    for(let i = 0; i < k; i++) {
        queue.enqueue([i, 0]);
        maxEl = Math.max(maxEl, nums[i][0]);
    }

    let ans = [-1, -1];

    while(true) {

        const [list, idx] = queue.dequeue(), el = nums[list][idx], nextIdx = idx + 1;

        if(minRange > maxEl - el) {
            ans = [el, maxEl];
            minRange = maxEl - el;
        }

        if(nextIdx === nums[list].length) return ans;

        maxEl = Math.max(maxEl, nums[list][nextIdx]);
        queue.enqueue([list, nextIdx]);
    }
    
    return ans;
};

let nums = [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]; //[20,24]
nums = [[1,2,3],[1,2,3],[1,2,3]];
nums = [[1,2,3],[1,2,3],[1,2,3]];

console.log(smallestRange(nums));