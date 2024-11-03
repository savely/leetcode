/*
#3341. Find Minimum Time to Reach Last Room I

There is a dungeon with n x m rooms arranged as a grid.

You are given a 2D array moveTime of size n x m, where moveTime[i][j] represents the minimum time in seconds when you can start moving to that room. You start from the room (0, 0) at time t = 0 and can move to an adjacent room. Moving between adjacent rooms takes exactly one second.

Return the minimum time to reach the room (n - 1, m - 1).

Two rooms are adjacent if they share a common wall, either horizontally or vertically.

 

Example 1:

Input: moveTime = [[0,4],[4,4]]

Output: 6

Explanation:

The minimum time required is 6 seconds.

    At time t == 4, move from room (0, 0) to room (1, 0) in one second.
    At time t == 5, move from room (1, 0) to room (1, 1) in one second.

Example 2:

Input: moveTime = [[0,0,0],[0,0,0]]

Output: 3

Explanation:

The minimum time required is 3 seconds.

    At time t == 0, move from room (0, 0) to room (1, 0) in one second.
    At time t == 1, move from room (1, 0) to room (1, 1) in one second.
    At time t == 2, move from room (1, 1) to room (1, 2) in one second.

Example 3:

Input: moveTime = [[0,1],[1,2]]

Output: 3

 

Constraints:

    2 <= n == moveTime.length <= 50
    2 <= m == moveTime[i].length <= 50
    0 <= moveTime[i][j] <= 109


*/

const { PriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * @param {number[][]} moveTime
 * @return {number}
 */
var minTimeToReach = function(moveTime) {

    const time = Array.from(moveTime,() => new Array(moveTime[0].length).fill(Infinity));

    queue = new PriorityQueue({compare : ([x1, y1, t1], [x2, y2, t2]) => t1 - t2});

    queue.enqueue([0,0,0]);

    while(queue.size()) {

        const [x, y, t] = queue.dequeue();

        if (t >= time[x][y]) continue;

        time[x][y] = t;

        for(const [dx, dy] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {

            const nextX = x + dx, nextY = y + dy;

            if(nextX < 0 || nextX === time.length) continue;
            if(nextY < 0 || nextY === time[0].length) continue;

            const nextTime = Math.max(t, moveTime[nextX][nextY]) + 1;

            if(nextTime >= time[nextX][nextY]) continue;

            queue.enqueue([nextX, nextY, nextTime]);
        }
    }

    console.dir(time);

    return time[time.length - 1][time[0].length - 1];
}
