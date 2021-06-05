/*
#57. Insert Interval

Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

 

Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
Example 3:

Input: intervals = [], newInterval = [5,7]
Output: [[5,7]]
Example 4:

Input: intervals = [[1,5]], newInterval = [2,3]
Output: [[1,5]]
Example 5:

Input: intervals = [[1,5]], newInterval = [2,7]
Output: [[1,7]]
 

Constraints:

0 <= intervals.length <= 104
intervals[i].length == 2
0 <= intervals[i][0] <= intervals[i][1] <= 105
intervals is sorted by intervals[i][0] in ascending order.
newInterval.length == 2
0 <= newInterval[0] <= newInterval[1] <= 105

*/

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
 var insert = function(intervals, newInterval) {

    if(intervals.length === 0) return [newInterval];
    
        const search = (n, from = 0) => {
            
            let lo = from, hi = intervals.length - 1;
            
            while (hi >= lo){
                
                const mid = Math.floor((hi + lo) / 2), [start, end] = intervals[mid];
                
                if(start <= n && n <= end)   return [mid,mid];
                
                if(n < start) {
                    hi = mid -1;
                } else {
                    lo = mid + 1;
                }
            }
          return [hi,lo];
        }
        
        const [start, end] = newInterval;

        if(start <= intervals[0][0] && end >= intervals[intervals.length - 1][1]) {
          return [[start, end]];
        }

        if(start <= intervals[0][0]) {
            const [lo,hi] = search(end);

            const newEnd = (lo === hi) ? intervals[lo][1] : end;
            const right = intervals.slice(lo === hi ? lo + 1 : hi);

            return [[start, newEnd], ...right];
        }

        if(end  >=  [intervals.length - 1][1]) {
            const [lo,hi] = search(start);

            const newStart = (lo === hi) ? intervals[lo][0] : start;
            const left = intervals.slice(hi);

            return [...left, [newStart, end]];
        }
        
        const [loStart, loEnd] = search(start), [hiStart, hiEnd] = search(end, loEnd);

        if(loStart === hiStart === loEnd === hiEnd) return intervals; //new interval covered by existing interval

    const newStart = (loStart === loEnd) ? intervals[loStart][0] : start;
    const left     =  intervals.slice(0, (loStart === loEnd) ? loStart : loEnd);

    const newEnd = (hiStart === hiEnd) ? intervals[hiEnd][1] : end;
    const right  = intervals.slice((hiStart === hiEnd) ? hiEnd + 1 : hiStart + 1);
  
    return [...left, [newStart, newEnd], ...right];
};

let intervals = [[1,3],[5,9]], newInterval = [0,12];
intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [5,6];
intervals = [], newInterval = [5,7];
intervals = [[1,5]], newInterval = [2,7]

console.log(insert(intervals, newInterval));