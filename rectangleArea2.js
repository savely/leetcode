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

    let prevX = 0, area = 0n;

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

rectangles = [[0,0,2,2],[1,0,2,3],[1,0,3,1]];
rectangles = [[0,0,1000000000,1000000000]];
rectangles = [[0,0,1,1],[2,2,3,3]];//2
rectangles = [[224386961,128668997,546647847,318900555],[852286866,238086790,992627088,949888275],[160239672,137108804,398130330,944807066],
              [431047948,462092719,870611028,856851714],[736895365,511285772,906155231,721626624],[289309389,607009433,558359552,883664714],
              [780746435,397872372,931219192,863727103],[573523994,124874359,889018012,471879750],[619886375,149607927,727026507,446976526],
              [51739879,716225241,115331335,785850603],[171077223,267051983,548436248,349498903],[314437215,169054168,950814572,481179241],
              [64126215,646689712,595562376,829164135],[926011655,481539702,982179297,832455610],[40370235,231510218,770233582,851797196],
              [292546319,45032676,413358795,783606009],[424366277,369838051,453541063,777456024],[211837048,142665527,217366958,952362711],
              [228416869,402115549,672143142,644930626],[755018294,194555696,846854520,939022548],[192890972,586071668,992336688,759060552],
              [127869582,392855032,338983665,954245205],[665603955,208757599,767586006,276627875],[260384651,10960359,736299693,761411808],
              [46440611,559601039,911666265,904518674],[54013763,90331595,332153447,106222561],[73093292,378586103,423488105,826750366],
              [327100855,516514806,676134763,653520887],[930781786,407609872,960671631,510621750],[35479655,449171431,931212840,617916927]];//862275791

//rectangles = [[224386961,128668997,546647847,318900555]];

console.log(rectangleArea(rectangles));