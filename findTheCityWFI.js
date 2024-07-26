/*
#1334. Find the City With the Smallest Number of Neighbors at a Threshold Distance

solving using Floyd-Warshall algorithm
*/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function(n, edges, distanceThreshold) {

    const dist = Array.from({length : n}, () => new Array(n).fill(Infinity));

    for(let i = 0; i < n; i++) {
        dist[i][i] = 0;
    }

    for(const [u, v, weight] of edges) {
        dist[u][v] = dist[v][u] = weight;
    }

    for(let k = 0; k < n; k++) {
        for(let u = 0; u < n; u++) {
            for(let v = 0; v < n; v++) {

                if(dist[u][v] > dist[u][k] + dist[k][v]) {
                    dist[u][v] = dist[u][k] + dist[k][v];
                }
            }
        }
    }

    let node = -1, minCities = Infinity;

    for(let i = 0; i < n; i++) {

        let cities = 0;

        for(let j = 0; j < n; j++) {
            cities += dist[i][j] > distanceThreshold ? 0 : 1;
        }

        if(cities <= minCities) {
            node = i;
            minCities = cities;
        }
    }

    return node;
};

let n = 4, edges = [[0,1,3],[1,2,1],[1,3,4],[2,3,1]], distanceThreshold = 4;
n = 5, edges = [[0,1,2],[0,4,8],[1,2,3],[1,4,2],[2,3,1],[3,4,1]], distanceThreshold = 2;

console.log(findTheCity(n, edges, distanceThreshold));