/*
#2187. Minimum Time to Complete Trips

You are given an array time where time[i] denotes the time taken by the ith bus to complete one trip.

Each bus can make multiple trips successively; that is, the next trip can start immediately after completing the current trip. Also, each bus operates independently; that is, the trips of one bus do not influence the trips of any other bus.

You are also given an integer totalTrips, which denotes the number of trips all buses should make in total. Return the minimum time required for all buses to complete at least totalTrips trips.

 

Example 1:

Input: time = [1,2,3], totalTrips = 5
Output: 3
Explanation:
- At time t = 1, the number of trips completed by each bus are [1,0,0]. 
  The total number of trips completed is 1 + 0 + 0 = 1.
- At time t = 2, the number of trips completed by each bus are [2,1,0]. 
  The total number of trips completed is 2 + 1 + 0 = 3.
- At time t = 3, the number of trips completed by each bus are [3,1,1]. 
  The total number of trips completed is 3 + 1 + 1 = 5.
So the minimum time needed for all buses to complete at least 5 trips is 3.

Example 2:

Input: time = [2], totalTrips = 1
Output: 2
Explanation:
There is only one bus, and it will complete its first trip at t = 2.
So the minimum time needed to complete 1 trip is 2.

 

Constraints:

    1 <= time.length <= 105
    1 <= time[i], totalTrips <= 107


*/

/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function(time, totalTrips) {

    time.sort((a,b) => a - b);

    const check = (tm) => {

        let trips = 0;

        for(const t of time) {
            if(t > tm) break;
            trips += Math.floor(tm / t);
        }
        return trips;
    }

    let lo = 0, hi = time[time.length - 1] * totalTrips;

    while(hi >= lo) {

        const mid = Math.floor((lo + hi) / 2), trips = check(mid);

        if(trips === totalTrips && check(mid - 1) < totalTrips) return mid;

        if(trips >= totalTrips) {
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }

    }
    
    return lo;
};

time = [1,2,3], totalTrips = 5;
//time = [2], totalTrips = 1;
time = [5,10,10], totalTrips = 9; //25
console.log(minimumTime(time, totalTrips));