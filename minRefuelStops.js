/*
*/

/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
 var minRefuelStops = function(target, startFuel, stations) {
    
    if(startFuel >= target) return 0;
    
    if(!stations.length) return  -1;
    
    let minStops = Infinity;
    
    const dp = [[0,startFuel, 0, 0]];

    while(dp.length) {

        const  maxFuel = {};
    
        while(dp.length) {
            
            const [dist, fuel, stops, from] = dp.pop();

            if(stops >= minStops) continue;
            
            const maxDist = dist + fuel;
            
            let i = from;
            
            while(i < stations.length && stations[i][0] <= maxDist) {
                
                const [stDist, stFuel] = stations[i];


                const newFuel = fuel - (stDist - dist) + stFuel;

                if(stDist + newFuel >= target) {
                    minStops = Math.min(minStops, stops + 1);
                    i++;
                    continue;
                }

                if(maxFuel[stDist] === undefined
                   ||maxFuel[stDist][1] < newFuel) {

                   maxFuel[stDist] = [stDist, newFuel, stops + 1, i + 1];
                }
                i++;
            }
        }
        dp.push(...Object.values(maxFuel));
    }

 return isFinite(minStops) ? minStops : -1;
};
