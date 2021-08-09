

const { MinPriorityQueue }  = require('@datastructures-js/priority-queue');

/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
  
    const queue = new MinPriorityQueue();

    for(const point of points) {

        const [x, y] = point;
        queue.enqueue([x, y], Math.sqrt(x * x + y * y));
    }

    const res = [];

    while(K-- >= 0) {

        const {element} = queue.dequeue();
        res.push(element);
    }

    return res;
};