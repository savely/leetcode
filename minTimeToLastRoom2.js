/*
#3342. Find Minimum Time to Reach Last Room II

There is a dungeon with n x m rooms arranged as a grid.

You are given a 2D array moveTime of size n x m, where moveTime[i][j] represents the minimum time in seconds when you can start moving to that room. You start from the room (0, 0) at time t = 0 and can move to an adjacent room. Moving between adjacent rooms takes one second for one move and two seconds for the next, alternating between the two.

Return the minimum time to reach the room (n - 1, m - 1).

Two rooms are adjacent if they share a common wall, either horizontally or vertically.

 

Example 1:

Input: moveTime = [[0,4],[4,4]]

Output: 7

Explanation:

The minimum time required is 7 seconds.

    At time t == 4, move from room (0, 0) to room (1, 0) in one second.
    At time t == 5, move from room (1, 0) to room (1, 1) in two seconds.

Example 2:

Input: moveTime = [[0,0,0,0],[0,0,0,0]]

Output: 6

Explanation:

The minimum time required is 6 seconds.

    At time t == 0, move from room (0, 0) to room (1, 0) in one second.
    At time t == 1, move from room (1, 0) to room (1, 1) in two seconds.
    At time t == 3, move from room (1, 1) to room (1, 2) in one second.
    At time t == 4, move from room (1, 2) to room (1, 3) in two seconds.

Example 3:

Input: moveTime = [[0,1],[1,2]]

Output: 4

 

Constraints:

    2 <= n == moveTime.length <= 750
    2 <= m == moveTime[i].length <= 750
    0 <= moveTime[i][j] <= 109

*/

const { PriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * @param {number[][]} moveTime
 * @return {number}
 */
var minTimeToReach = function(moveTime) {

    const time = Array.from(moveTime,() => new Array(moveTime[0].length).fill(Infinity));

    queue = new PriorityQueue({compare : ([x1, y1, isOdd1, t1], [x2, y2, isOdd2, t2]) => t1 - t2});

    queue.enqueue([0,0,true,0]);

    while(queue.size()) {

        const [x, y, isOdd, t] = queue.dequeue();

        if(x === time.length - 1 && y === time[0].length - 1) return t;

        if (t >= time[x][y]) continue;

        time[x][y] = t;

        for(const [dx, dy] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {

            const nextX = x + dx, nextY = y + dy;

            if(nextX < 0 || nextX === time.length) continue;
            if(nextY < 0 || nextY === time[0].length) continue;

            const nextTime = Math.max(t, moveTime[nextX][nextY]) + (isOdd ? 1 : 2);

            if(nextTime >= time[nextX][nextY]) continue;

            queue.enqueue([nextX, nextY, !isOdd, nextTime]);
        }
    }

    return -1;
}
