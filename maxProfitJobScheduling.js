/*
#1235. Maximum Profit in Job Scheduling

We have n jobs, where every job is scheduled to be done from startTime[i] to endTime[i], obtaining a profit of profit[i].

You're given the startTime, endTime and profit arrays, return the maximum profit you can take such that there are no two jobs in the subset with overlapping time range.

If you choose a job that ends at time X you will be able to start another job that starts at time X.

 

Example 1:



Input: startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]
Output: 120
Explanation: The subset chosen is the first and fourth job. 
Time range [1-3]+[3-6] , we get profit of 120 = 50 + 70.
Example 2:



Input: startTime = [1,2,3,4,6], endTime = [3,5,10,6,9], profit = [20,20,100,70,60]
Output: 150
Explanation: The subset chosen is the first, fourth and fifth job. 
Profit obtained 150 = 20 + 70 + 60.
Example 3:



Input: startTime = [1,1,1], endTime = [2,3,4], profit = [5,6,4]
Output: 6
 

Constraints:

1 <= startTime.length == endTime.length == profit.length <= 5 * 104
1 <= startTime[i] < endTime[i] <= 109
1 <= profit[i] <= 104
*/


/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
 var jobScheduling = function(startTime, endTime, profit) {
    

    startTime = startTime.map((st, i) => [st, endTime[i], profit[i]]);
    delete endTime;
    delete profit;

    startTime.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    const dp = new Array(startTime.length).fill(Infinity);

    const f = from => {

        if (from >= startTime.length) return 0;

        const [start ,end , profit] = startTime[from];

        if(isFinite(dp[from])) return dp[from];        

        let maxNextProfit = 0, i = from + 1;

        while(i < startTime.length && startTime[i][0] < end) {

            maxNextProfit = Math.max(maxNextProfit, f(i++));
        }

        dp[from] = Math.max(maxNextProfit, profit + f(i));

        return dp[from];
    };

    return f(0);
};

let startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70];
startTime = [1,2,3,4,6], endTime = [3,5,10,6,9], profit = [20,20,100,70,60];
startTime = [1,1,1], endTime = [2,3,4], profit = [5,6,4];

console.log(jobScheduling(startTime, endTime, profit));