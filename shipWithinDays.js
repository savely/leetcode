/*
#1011. Capacity To Ship Packages Within D Days

A conveyor belt has packages that must be shipped from one port to another within days days.

The ith package on the conveyor belt has a weight of weights[i]. Each day, we load the ship with packages on the conveyor belt (in the order given by weights). We may not load more weight than the maximum weight capacity of the ship.

Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within days days.

 

Example 1:

Input: weights = [1,2,3,4,5,6,7,8,9,10], days = 5
Output: 15
Explanation: A ship capacity of 15 is the minimum to ship all the packages in 5 days like this:
1st day: 1, 2, 3, 4, 5
2nd day: 6, 7
3rd day: 8
4th day: 9
5th day: 10

Note that the cargo must be shipped in the order given, so using a ship of capacity 14 and splitting the packages into parts like (2, 3, 4, 5), (1, 6, 7), (8), (9), (10) is not allowed.
Example 2:

Input: weights = [3,2,2,4,1,4], days = 3
Output: 6
Explanation: A ship capacity of 6 is the minimum to ship all the packages in 3 days like this:
1st day: 3, 2
2nd day: 2, 4
3rd day: 1, 4
Example 3:

Input: weights = [1,2,3,1,1], days = 4
Output: 3
Explanation:
1st day: 1
2nd day: 2
3rd day: 3
4th day: 1, 1
 

Constraints:

1 <= days <= weights.length <= 5 * 104
1 <= weights[i] <= 500
*/

/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
 var shipWithinDays = function(weights, days) {
    
    const check = (capacity) => {
        
        let numDays = 0, load = 0;
        
        for(let i = 0; i < weights.length; i++) {
            
            const w = weights[i];
            
            if(w > capacity) return Infinity;
            
            if(load + w > capacity) {
                load = w;
                numDays++;
            } else {
              load += w;
            }
        }        
       
        return load === 0 ? numDays : numDays + 1;
    };
    
   let maxCapacity = 0, minCapacity = 0;
    
    for(let i = 0; i < weights.length; i++) {
        
        maxCapacity += weights[i];
        minCapacity = Math.max(minCapacity, weights[i]);
    }
    
    let lo = minCapacity, hi = maxCapacity, ans = 0;
    
    while(hi >= lo) {
        
        const mid = (hi + lo) / 2 >> 0, numDays = check(mid);
        
        if(numDays <= days) {
            ans = mid;            
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
        
    }
    
    return ans;
};

let weights = [10,50,100,100,50,100,100,100], days = 5; // 160;

console.log(shipWithinDays(weights, days)); 