/*
#2280. Minimum Lines to Represent a Line Chart

You are given a 2D integer array stockPrices where stockPrices[i] = [dayi, pricei] indicates the price of the stock on day dayi is pricei. A line chart is created from the array by plotting the points on an XY plane with the X-axis representing the day and the Y-axis representing the price and connecting adjacent points. One such example is shown below:

Return the minimum number of lines needed to represent the line chart.

 

Example 1:

Input: stockPrices = [[1,7],[2,6],[3,5],[4,4],[5,4],[6,3],[7,2],[8,1]]
Output: 3
Explanation:
The diagram above represents the input, with the X-axis representing the day and Y-axis representing the price.
The following 3 lines can be drawn to represent the line chart:
- Line 1 (in red) from (1,7) to (4,4) passing through (1,7), (2,6), (3,5), and (4,4).
- Line 2 (in blue) from (4,4) to (5,4).
- Line 3 (in green) from (5,4) to (8,1) passing through (5,4), (6,3), (7,2), and (8,1).
It can be shown that it is not possible to represent the line chart using less than 3 lines.

Example 2:

Input: stockPrices = [[3,4],[1,2],[7,8],[2,3]]
Output: 1
Explanation:
As shown in the diagram above, the line chart can be represented with a single line.

*/

/**
 * @param {number[][]} stockPrices
 * @return {number}
 */
 var minimumLines = function(stockPrices) {
    
    if(stockPrices.length < 2) return 0;
    if(stockPrices.length < 3) return 1;
    
    const dist = ([x1, y1], [x2, y2]) => Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    
    stockPrices.sort(([d1, p1], [d2, p2]) => d1 - d2);
    
    let lines = 1;
    
    for(let i = 1; i < stockPrices.length - 1; i++) {
        
        const p1 = stockPrices[i - 1], p2 = stockPrices[i], p3 = stockPrices[i + 1];
        
        const d1 = dist(p1, p2), d2 = dist(p2, p3), d3 = dist(p1, p3);
        
        lines += (d3 !== d1 + d2) ? 1 : 0;
    }
    
    return lines;
    
};

const stockPrices = [[1,1000000000],[1000000000,1000000000],[999999999,1],[2,999999999]];

console.log(minimumLines(stockPrices));