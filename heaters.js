/*
#475. Heaters

Winter is coming! During the contest, your first job is to design a standard heater with a fixed warm radius to warm all the houses.

Every house can be warmed, as long as the house is within the heater's warm radius range. 

Given the positions of houses and heaters on a horizontal line, return the minimum radius standard of heaters so that those heaters could cover all houses.

Notice that all the heaters follow your radius standard, and the warm radius will the same.

 

Example 1:

Input: houses = [1,2,3], heaters = [2]
Output: 1
Explanation: The only heater was placed in the position 2, and if we use the radius 1 standard, then all the houses can be warmed.
Example 2:

Input: houses = [1,2,3,4], heaters = [1,4]
Output: 1
Explanation: The two heater was placed in the position 1 and 4. We need to use radius 1 standard, then all the houses can be warmed.
Example 3:

Input: houses = [1,5], heaters = [2]
Output: 3
 

Constraints:

1 <= houses.length, heaters.length <= 3 * 104
1 <= houses[i], heaters[i] <= 109
*/

/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
 var findRadius = function(houses, heaters) {

    let i = 0, j = 0, maxRadius = -Infinity;

    const f = (a,b) => a - b;

    houses.sort(f);
    heaters.sort(f);

    const dist = new Array(houses.length).fill(Infinity);

    while(i < houses.length) {

        if(houses[i] > heaters[j]) {
            j++;
            continue;
        }
        const minDist = Math.min((heaters[j] || Infinity) - houses[i], houses[i] - (heaters[j-1] || -Infinity));

        dist[i] = minDist;

        maxRadius = Math.max(maxRadius, minDist);

        i++;
    }

    console.table(dist);
    return maxRadius;
};