/*
#56. Merge Intervals

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, 
and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

Constraints:

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104

*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {


    if(intervals.length < 2) return intervals;

    intervals.sort(([s1, e1], [s2, e2]) => s1 - s2 || e2 - e1);

    const res = [ intervals[0] ];

    for(let i = 1; i < intervals.length; i++) {

        const [si, ei] = intervals[i], [s, e] = res[res.length - 1];

        if(si > e ) {
            res.push([si, ei]);
        } else {
            res[res.length - 1] = [s, Math.max(e, ei)];
        }

    }
    
    return res;
};
