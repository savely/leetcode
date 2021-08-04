/*
#826. Most Profit Assigning Work

You have n jobs and m workers. You are given three arrays: difficulty, profit, and worker where:

difficulty[i] and profit[i] are the difficulty and the profit of the ith job, and
worker[j] is the ability of jth worker (i.e., the jth worker can only complete a job with difficulty at most worker[j]).
Every worker can be assigned at most one job, but one job can be completed multiple times.

For example, if three workers attempt the same job that pays $1, then the total profit will be $3. If a worker cannot complete any job, their profit is $0.
Return the maximum profit we can achieve after assigning the workers to the jobs.

 

Example 1:

Input: difficulty = [2,4,6,8,10], profit = [10,20,30,40,50], worker = [4,5,6,7]
Output: 100
Explanation: Workers are assigned jobs of difficulty [4,4,6,6] and they get a profit of [20,20,30,30] separately.
Example 2:

Input: difficulty = [85,47,57], profit = [24,66,99], worker = [40,25,25]
Output: 0
 

Constraints:

n == difficulty.length
n == profit.length
m == worker.length
1 <= n, m <= 104
1 <= difficulty[i], profit[i], worker[i] <= 105
*/

/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
 var maxProfitAssignment = function(difficulty, profit, worker) {

    let map = {};

    for(let i = 0; i < profit.length; i++) {

        const pr = profit[i], dif = difficulty[i];

        if(map[pr] === undefined) map[pr] = Infinity;

        map[pr] = Math.min(map[pr], dif);
    }

    const prio = [];

    for(const pr in map) {
        prio.push([+pr, +map[pr]]);
    }

    map = null;

    const search = (dif, to) => {

        let lo = 0, hi = to;


        while(hi >= lo) {

            const mid = (lo + hi) / 2 >> 0;

            if(worker[mid] >= dif) {
                hi = mid - 1;
            } else {
                lo = mid + 1;
            }

        }
        return lo;
    } ;

    prio.sort((a, b) => b[0] - a[0]); //sort by profit
    worker.sort((a, b) => a - b);

    let ans = 0, to = worker.length - 1;

    for(let i = 0; i < prio.length; i ++) {

        const [pr, dif] = prio[i];

        if(dif > worker[to]) continue;

        let pos = search(dif, to);

        ans += pr * (to - pos + 1);
        to = pos - 1;

        if(to < 0) break;
    }

    return ans;
};

let difficulty = [2,4,6], profit = [10,20,30], worker = [4,5,6,7];
//difficulty = [85,47,57], profit = [24,66,99], worker = [40,25,25];

difficulty = [2,4,6,3], profit = [10,20,30,22], worker = [4,5,6,7,2,1,3];//136

//difficulty = [13,37,58], profit = [4,90,96], worker = [34,73,45];//190

console.log(maxProfitAssignment(difficulty, profit, worker));