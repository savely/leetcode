/*
#3694. Distinct Points Reachable After Substring Removal

You are given a string s consisting of characters 'U', 'D', 'L', and 'R', representing moves on an infinite 2D Cartesian grid.
The moves are interpreted as follows:

    'U': Move from (x, y) to (x, y + 1).
    'D': Move from (x, y) to (x, y - 1).
    'L': Move from (x, y) to (x - 1, y).
    'R': Move from (x, y) to (x + 1, y).

You are also given a positive integer k.

You must choose and remove exactly one contiguous substring of length k from s. Then, start from coordinate (0, 0) and perform the remaining moves in order.

Return an integer denoting the number of distinct final coordinates reachable.

 

Example 1:

Input: s = "LUL", k = 1

Output: 2

Explanation:

After removing a substring of length 1, s can be "UL", "LL" or "LU". Following these moves, the final coordinates will be (-1, 1), (-2, 0) and (-1, 1) respectively. There are two distinct points (-1, 1) and (-2, 0) so the answer is 2.

Example 2:

Input: s = "UDLR", k = 4

Output: 1

Explanation:

After removing a substring of length 4, s can only be the empty string. The final coordinates will be (0, 0). There is only one distinct point (0, 0) so the answer is 1.

Example 3:

Input: s = "UU", k = 1

Output: 1

Explanation:

After removing a substring of length 1, s becomes "U", which always ends at (0, 1), so there is only one distinct final coordinate.

 

Constraints:

    1 <= s.length <= 105
    s consists of only 'U', 'D', 'L', and 'R'.
    1 <= k <= s.lengths = "UU", k = 1


*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var distinctPoints = function(s, k) {
    
    const dest = [0, 0];

    for( const c of s) {

        if(c === 'U') dest[1]++;
        if(c === 'D') dest[1]--;
        if(c === 'L') dest[0]--;
        if(c === 'R') dest[0]++;
    }

    const points = new Set(), point = [0, 0];
    k--;

    for(let i = 0; i < s.length; i++) {

        if(s[i] === 'U') point[1]--;
        if(s[i] === 'D') point[1]++;
        if(s[i] === 'L') point[0]++;
        if(s[i] === 'R') point[0]--;

        if(i >= k) {
            points.add(`${dest[0] + point[0]}:${dest[1] + point[1]}`);
            if(s[i - k] === 'U') point[1]++;
            if(s[i - k] === 'D') point[1]--;
            if(s[i - k] === 'L') point[0]--;
            if(s[i - k] === 'R') point[0]++;
        }
    }

    return points.size;
};

let s = "LUL", k = 1; // 2
//s = "UDLR", k = 4; // 1
//s = "UU", k = 1; // 1
console.log(distinctPoints(s, k)) 