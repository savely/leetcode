/*
#1029
*/
/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    const half = costs.length / 2
    return costs.sort((a,b) => {
        return (a[1]-a[0]) - (b[1] - b[0])
    }).reduce((acc, cost, i) => {
             acc += i < half ? cost[1] : cost[0]
             return acc 
    }, 0)
};