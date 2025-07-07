/*
#1353. Maximum Number of Events That Can Be Attended

You are given an array of events where events[i] = [startDayi, endDayi]. Every event i starts at startDayi and ends at endDayi.

You can attend an event i at any day d where startTimei <= d <= endTimei. You can only attend one event at any time d.

Return the maximum number of events you can attend.

 

Example 1:

Input: events = [[1,2],[2,3],[3,4]]
Output: 3
Explanation: You can attend all the three events.
One way to attend them all is as shown.
Attend the first event on day 1.
Attend the second event on day 2.
Attend the third event on day 3.

Example 2:

Input: events= [[1,2],[2,3],[3,4],[1,2]]
Output: 4

 

Constraints:

    1 <= events.length <= 105
    events[i].length == 2
    1 <= startDayi <= endDayi <= 105

*/

const { PriorityQueue } = require("@datastructures-js/priority-queue");

/**
 * @param {number[][]} events
 * @return {number}
 */
const maxEvents = function (events) {

	events.sort((a, b) => a[0] - b[0]);
    const queue = new PriorityQueue((a, b) => events[a][1] - events[b][1]), maxDay = 1;
    for(const [s, e] of events) maxDay = Math.max(maxDay, e);

	let i = 0, attended = 0;

	for (let day = 1; day <= maxDay; day++) {

        while (queue.size() && events[queue.front()][1] <  day) {
            queue.dequeue();
        }			

		while (i < events.length && events[i][0] === day) {
            queue.enqueue(i++);
        }
        
		if (queue.size()) {
			queue.dequeue();
			attended++;
		}
	}
    
	return attended;
};