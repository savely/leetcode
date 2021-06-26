/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const freq = new Map()
    const deque = []

    for(let i = 0; i < tasks.length; i++) {
        let task = tasks[i]

        if(!freq.has(task)) {
            freq.set(task,0)
        }
        freq.set(task, ++task.get(task))
    }
};