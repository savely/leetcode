/*
#2251. Number of Flowers in Full Bloom

You are given a 0-indexed 2D integer array flowers, where flowers[i] = [starti, endi] means the ith flower will be in full bloom from starti to endi (inclusive). You are also given a 0-indexed integer array people of size n, where people[i] is the time that the ith person will arrive to see the flowers.

Return an integer array answer of size n, where answer[i] is the number of flowers that are in full bloom when the ith person arrives.

 

Example 1:

Input: flowers = [[1,6],[3,7],[9,12],[4,13]], poeple = [2,3,7,11]
Output: [1,2,2,2]
Explanation: The figure above shows the times when the flowers are in full bloom and when the people arrive.
For each person, we return the number of flowers in full bloom during their arrival.

Example 2:

Input: flowers = [[1,10],[3,3]], poeple = [3,3,2]
Output: [2,2,1]
Explanation: The figure above shows the times when the flowers are in full bloom and when the people arrive.
For each person, we return the number of flowers in full bloom during their arrival.

 

Constraints:

    1 <= flowers.length <= 5 * 104
    flowers[i].length == 2
    1 <= starti <= endi <= 109
    1 <= people.length <= 5 * 104
    1 <= people[i] <= 109

*/

const { PriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * @param {number[][]} flowers
 * @param {number[]} people
 * @return {number[]}
 */
var fullBloomFlowers = function(flowers, people) {
    
    const queue = new PriorityQueue({compare : ([start1, end1], [start2, end2]) => end1 - end2});

    const res = new Array(people.length).fill(0);

    people = people.map((time, i) => [time, i]);

    people.sort((a, b) => a[0] - b[0]);
    flowers.sort((a, b) => a[0] - b[0]);

    let i = 0;

    for(const [arriveTime, pos] of people) {

        while(i < flowers.length && flowers[i][0] <= arriveTime) {

            queue.enqueue(flowers[i++]);
        }

        while(queue.size() && queue.front()[1] < arriveTime) {

            queue.dequeue();
        }

        res[pos] = queue.size();
    }

    return res;
};

let flowers = [[1,6],[3,7],[9,12],[4,13]], people = [2,3,7,11];
//flowers = [[1,10],[3,3]], people = [3,3,2];

console.dir(fullBloomFlowers(flowers, people));