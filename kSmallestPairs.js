/*
#373. Find K Pairs with Smallest Sums

You are given two integer arrays nums1 and nums2 sorted in ascending order and an integer k.

Define a pair (u, v) which consists of one element from the first array and one element from the second array.

Return the k pairs (u1, v1), (u2, v2), ..., (uk, vk) with the smallest sums.

 

Example 1:

Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
Output: [[1,2],[1,4],[1,6]]
Explanation: The first 3 pairs are returned from the sequence: [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]

Example 2:

Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
Output: [[1,1],[1,1]]
Explanation: The first 2 pairs are returned from the sequence: [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]

Example 3:

Input: nums1 = [1,2], nums2 = [3], k = 3
Output: [[1,3],[2,3]]
Explanation: All possible pairs are returned from the sequence: [1,3],[2,3]

 

Constraints:

    1 <= nums1.length, nums2.length <= 105
    -109 <= nums1[i], nums2[i] <= 109
    nums1 and nums2 both are sorted in ascending order.
    1 <= k <= 1000


*/

const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
 var kSmallestPairs = function(nums1, nums2, k) {
    
    const queue = new MinPriorityQueue(), res = [];

    queue.enqueue([0,0], nums1[0] + nums2[0]);

    const visited = new Set(['0|0']);

    while(queue.size() > 0 && k-- > 0) {
        const { element : pair, priority: diff} = queue.dequeue();
        const [fst, snd] = pair;
        res.push([ nums1[fst], nums2[snd] ]);

        if(fst + 1 < nums1.length && !visited.has(`${fst + 1}|${snd}`)) {
            queue.enqueue([fst + 1, snd], nums1[fst + 1] + nums2[snd]);
            visited.add(`${fst + 1}|${snd}`);
        }
        if(snd + 1 < nums2.length && !visited.has(`${fst}|${snd + 1}`)) {
            queue.enqueue([fst, snd + 1], nums1[fst] + nums2[snd + 1]);
            visited.add(`${fst}|${snd + 1}`);
        }
    }
    return res;
};

let nums1 = [1,7,11], nums2 = [2,4,6], k = 6;
nums1 = [1,1,2], nums2 = [1,2,3], k = 9;
//nums1 = [1,2], nums2 = [3], k = 3;

console.table(kSmallestPairs(nums1, nums2, k));