/*
#815. Bus Routes

You are given an array routes representing bus routes where routes[i] is a bus route that the ith bus repeats forever.

For example, if routes[0] = [1, 5, 7], this means that the 0th bus travels in the sequence 1 -> 5 -> 7 -> 1 -> 5 -> 7 -> 1 -> ... forever.
You will start at the bus stop source (You are not on any bus initially), and you want to go to the bus stop target. You can travel between bus stops by buses only.

Return the least number of buses you must take to travel from source to target. Return -1 if it is not possible.

 

Example 1:

Input: routes = [[1,2,7],[3,6,7]], source = 1, target = 6
Output: 2
Explanation: The best strategy is take the first bus to the bus stop 7, then take the second bus to the bus stop 6.
Example 2:

Input: routes = [[7,12],[4,5,15],[6],[15,19],[9,12,13]], source = 15, target = 12
Output: -1
 

Constraints:

1 <= routes.length <= 500.
1 <= routes[i].length <= 105
All the values of routes[i] are unique.
sum(routes[i].length) <= 105
0 <= routes[i][j] < 106
0 <= source, target < 106
*/

/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
 var numBusesToDestination = function(routes, source, target) {

    const graph = {};

    for(let i = 0; i < routes.length; i++) {

        let busNum = i;

        for(const stop of routes[i]) {

            if(graph[stop] === undefined) graph[stop] = new Set();

            graph[stop].add(busNum);
        }
    }

        if(graph[source] === undefined || graph[target] === undefined) return -1;
     
        if(source === target) return 0;

        const visited = new Set();

        let buses = new Set(graph[source]), distance = 1;

        while(buses.size) {

            let nextBuses = new Set();

            for(const bus of buses) {

                if(visited.has(bus)) continue;

                visited.add(bus);

                for (const stop of routes[bus]) {

                    if(stop === target) return distance;

                    for(const nextBus of graph[stop]) {

                        if(visited.has(nextBus)) continue;

                        nextBuses.add(nextBus);
                    }
                }
            }

            distance++;
            buses = nextBuses;
        }
    return -1;
};