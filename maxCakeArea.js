/*
#1465 Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts

You are given a rectangular cake of size h x w and two arrays of integers horizontalCuts and verticalCuts where:

    horizontalCuts[i] is the distance from the top of the rectangular cake to the ith horizontal cut and similarly, and
    verticalCuts[j] is the distance from the left of the rectangular cake to the jth vertical cut.

Return the maximum area of a piece of cake after you cut at each horizontal and vertical position provided in the arrays horizontalCuts and verticalCuts. Since the answer can be a large number, return this modulo 109 + 7.

 

Example 1:

Input: h = 5, w = 4, horizontalCuts = [1,2,4], verticalCuts = [1,3]
Output: 4 
Explanation: The figure above represents the given rectangular cake. Red lines are the horizontal and vertical cuts. After you cut the cake, the green piece of cake has the maximum area.

Example 2:

Input: h = 5, w = 4, horizontalCuts = [3,1], verticalCuts = [1]
Output: 6
Explanation: The figure above represents the given rectangular cake. Red lines are the horizontal and vertical cuts. After you cut the cake, the green and yellow pieces of cake have the maximum area.

Example 3:

Input: h = 5, w = 4, horizontalCuts = [3], verticalCuts = [3]
Output: 9

 

Constraints:

    2 <= h, w <= 109
    1 <= horizontalCuts.length <= min(h - 1, 105)
    1 <= verticalCuts.length <= min(w - 1, 105)
    1 <= horizontalCuts[i] < h
    1 <= verticalCuts[i] < w
    All the elements in horizontalCuts are distinct.
    All the elements in verticalCuts are distinct.

*/

/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */

 var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    
    
    let prev = 0n, maxH = 0n;
    
    horizontalCuts.sort((a,b) => a - b).push(h);

    bigIntMax = (...args) => args.reduce((m, e) => e > m ? e : m);
    
    for(const cut of horizontalCuts) {

        const bCut = BigInt(cut);
        maxH = bigIntMax(maxH, bCut - prev);
        prev = bCut;
    }
    
    prev = 0n;
    let maxW = 0n;
    
    verticalCuts.sort((a,b) => a - b).push(w);
    
    for(const cut of verticalCuts) {

        const bCut = BigInt(cut);
        maxW = bigIntMax(maxW, bCut - prev);
        prev = bCut;
    }

    const modulo = BigInt(10 ** 9 + 7);
    
    return (maxH  * maxW) % modulo;
};

let h = 5, w = 4, horizontalCuts = [3,1], verticalCuts = [1];

h = 1000000000, w = 1000000000, horizontalCuts = [2], verticalCuts = [2];


console.log(maxArea(h,w,horizontalCuts, verticalCuts));