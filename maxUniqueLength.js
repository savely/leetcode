/*
#1239. Maximum Length of a Concatenated String with Unique Characters

Given an array of strings arr. String s is a concatenation of a sub-sequence of arr which have unique characters.

Return the maximum possible length of s.

 

Example 1:

Input: arr = ["un","iq","ue"]
Output: 4
Explanation: All possible concatenations are "","un","iq","ue","uniq" and "ique".
Maximum length is 4.
Example 2:

Input: arr = ["cha","r","act","ers"]
Output: 6
Explanation: Possible solutions are "chaers" and "acters".
Example 3:

Input: arr = ["abcdefghijklmnopqrstuvwxyz"]
Output: 26
 

Constraints:

1 <= arr.length <= 16
1 <= arr[i].length <= 26
arr[i] contains only lower case English letters.

*/

/**
 * @param {string[]} arr
 * @return {number}
 */
 var maxLength = function(arr) {

    arr = arr.map(str => {
        let b = 0;

        for(const ch of str) {

            const code = 1 << (ch.charCodeAt(0) - 97);

            if((b & code) !== 0) return [0, 0];

            b |= 1 << (ch.charCodeAt(0) - 97);
        }
        return [str.length, b];
    }).filter(([length, _]) => length > 0);

    const f = (idx, mask) => {

        if(idx >= arr.length) return 0;

        const [len , currMask] = arr[idx];

        let curr = 0;

        if((currMask & mask) === 0) {
            curr = len + f(idx + 1, mask | currMask);
        }

        return Math.max(curr, f(idx + 1, mask));
    }

    return f(0, 0);
};