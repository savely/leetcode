/*
#850. Rectangle Area II
We are given a list of (axis-aligned) rectangles. Each rectangle[i] = [xi1, yi1, xi2, yi2] , where (xi1, yi1) are the coordinates of the bottom-left corner, and (xi2, yi2) are the coordinates of the top-right corner of the ith rectangle.

Find the total area covered by all rectangles in the plane. Since the answer may be too large, return it modulo 109 + 7.

 

Example 1:


Input: rectangles = [[0,0,2,2],[1,0,2,3],[1,0,3,1]]
Output: 6
Explanation: As illustrated in the picture.
Example 2:

Input: rectangles = [[0,0,1000000000,1000000000]]
Output: 49
Explanation: The answer is 1018 modulo (109 + 7), which is (109)2 = (-7)2 = 49.
 

Constraints:

1 <= rectangles.length <= 200
rectanges[i].length = 4
0 <= rectangles[i][j] <= 109
The total area covered by all rectangles will never exceed 263 - 1 and thus will fit in a 64-bit signed integer.
*/

/**
 * @param {number[][]} rectangles
 * @return {number}
 */
 var rectangleArea = function(rectangles) {

    const xOrder = [];
    let start = 1, end = -1;

    for(const [x1, y1, x2, y2] of rectangles) {

        xOrder.push([x1,y1,y2, start++], [x2,y1, y2, end--]);
    }

    xOrder.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    const yOrder = {};   

    let prevX = 0, area = BigInt(0);

    for(const [x, y1, y2, recEvt] of xOrder) {

        const yArr = [];

        for(const evt in yOrder) {
            const [bot, top] = yOrder[evt];
            yArr.push([bot, top]);
        }

        if(yArr.length) {

            yArr.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

            let min = yArr[0][0], max = yArr[0][1], dy = max - min;

            for(let i = 1; i < yArr.length; i++) {

                const [mn, mx] = yArr[i];

                if(mn > max) {
                    min = mn;
                    max = mx;
                    dy += max - min;
                } else if(mx > max) {
                    dy += mx - max;
                    max = mx;
                }
            }

            const dx = x - prevX;

            area += BigInt(dx) * BigInt(dy);
        }

        prevX = x;

        if(recEvt < 0) {
            delete yOrder[-recEvt];
        }        
        
        if(recEvt > 0) {
            yOrder[recEvt] = [y1,y2];
        }

    }

    return area % BigInt(10 ** 9 + 7);
};