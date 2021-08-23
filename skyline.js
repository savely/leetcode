/*
#218. The Skyline Problem

A city's skyline is the outer contour of the silhouette formed by all the buildings in that city when viewed from a distance. Given the locations and heights of all the buildings, return the skyline formed by these buildings collectively.

The geometric information of each building is given in the array buildings where buildings[i] = [lefti, righti, heighti]:

lefti is the x coordinate of the left edge of the ith building.
righti is the x coordinate of the right edge of the ith building.
heighti is the height of the ith building.
You may assume all buildings are perfect rectangles grounded on an absolutely flat surface at height 0.

The skyline should be represented as a list of "key points" sorted by their x-coordinate in the form [[x1,y1],[x2,y2],...]. Each key point is the left endpoint of some horizontal segment in the skyline except the last point in the list, which always has a y-coordinate 0 and is used to mark the skyline's termination where the rightmost building ends. Any ground between the leftmost and rightmost buildings should be part of the skyline's contour.

Note: There must be no consecutive horizontal lines of equal height in the output skyline. For instance, [...,[2 3],[4 5],[7 5],[11 5],[12 7],...] is not acceptable; the three lines of height 5 should be merged into one in the final output as such: [...,[2 3],[4 5],[12 7],...]

 

Example 1:


Input: buildings = [[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]
Output: [[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]
Explanation:
Figure A shows the buildings of the input.
Figure B shows the skyline formed by those buildings. The red points in figure B represent the key points in the output list.
Example 2:

Input: buildings = [[0,2,3],[2,5,3]]
Output: [[0,3],[5,0]]
 

Constraints:

1 <= buildings.length <= 104
0 <= lefti < righti <= 231 - 1
1 <= heighti <= 231 - 1
buildings is sorted by lefti in non-decreasing order.

*/

const { MaxPriorityQueue }  = require('@datastructures-js/priority-queue');
/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
 var getSkyline = function(buildings) {

    const events = [];

    let start = 1, end = -1;

    for(let i = 0; i < buildings.length; i++) {

        const [l, r, h] = buildings[i];

        events.push([l, h, start++], [r, h, end--]);
    }

    events.sort(([x1, h1, t1], [x2, h2, t2]) => {

        if(x1 !== x2) return x1 - x2;

        if((t1 > 0 && t2 > 0) || (t1 < 0 && t2 < 0)) return  t1 > 0 ? h2 - h1 : h1 - h2;

        return (t1 < 0) ? 1 : -1;
    });

    const queue = new MaxPriorityQueue();

    const res = [], deleted = new Set();

    let currMax = 0;


    for(const [x, h, t] of events) {

        if(t > 0) {
            if(h > currMax) {
                currMax = h;                
                res.push([x, currMax]);
            }
            queue.enqueue([x, h, t], h);
            continue;
        }

        const {element}  = queue.front();

        if(t === -element[2]) {

            queue.dequeue();

            while(queue.size() && deleted.has( -(queue.front()['element'][2])) ) {
                 const item = queue.dequeue();
                 deleted.delete(-item["element"][2]);
            }

            const height = queue.size() ? queue.front()['element'][1] : 0;

            if(height < currMax) {
                currMax = height;                
                res.push([x, currMax]);
            }
         } else {
            deleted.add(t);
         }
    }
    return res;
};