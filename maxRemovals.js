/*
#1898. Maximum Number of Removable Characters

You are given two strings s and p where p is a subsequence of s. You are also given a distinct 0-indexed integer array removable containing a subset of indices of s (s is also 0-indexed).

You want to choose an integer k (0 <= k <= removable.length) such that, after removing k characters from s using the first k indices in removable, p is still a subsequence of s. More formally, you will mark the character at s[removable[i]] for each 0 <= i < k, then remove all marked characters and check if p is still a subsequence.

Return the maximum k you can choose such that p is still a subsequence of s after the removals.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

 

Example 1:

Input: s = "abcacb", p = "ab", removable = [3,1,0]
Output: 2
Explanation: After removing the characters at indices 3 and 1, "abcacb" becomes "accb".
"ab" is a subsequence of "accb".
If we remove the characters at indices 3, 1, and 0, "abcacb" becomes "ccb", and "ab" is no longer a subsequence.
Hence, the maximum k is 2.
Example 2:

Input: s = "abcbddddd", p = "abcd", removable = [3,2,1,4,5,6]
Output: 1
Explanation: After removing the character at index 3, "abcbddddd" becomes "abcddddd".
"abcd" is a subsequence of "abcddddd".
Example 3:

Input: s = "abcab", p = "abc", removable = [0,1,2,3,4]
Output: 0
Explanation: If you remove the first index in the array removable, "abc" is no longer a subsequence.
*/

/**
 * @param {string} s
 * @param {string} p
 * @param {number[]} removable
 * @return {number}
 */
 var maximumRemovals = function(s, p, removable) {

    if(s.length === 1) return s[removable[0]] === p ? 0 : 1;

    const setP = new Set([...p]);

    const setR = new Set();

    const isSubSeq = () => {

        if(setR.size === 0) return true;

        let i = 0, j = 0;

        while(i < s.length && j < p.length) {

            if(!setR.has(i) && s[i] === p[j]) {
                i++;
                j++;
            } else {
                i++;
            }
        }
        return j === p.length;
    }

    const adjustRset = (nextPos, prevPos) => {

        if(prevPos <= nextPos) {

            let i = prevPos;

            while(i <= nextPos) {

                const idx = removable[i++], ch = s[idx];

                if(setP.has(ch)) setR.add(idx);
            }

            return;
        }

        let i = prevPos;

        while(i > nextPos) {
            setR.delete(removable[i--]);
        }
    }

    let lo = 0, hi = removable.length - 1, prevMid = 0;

    while(hi > lo) {

        const mid = (hi + lo) /2 >> 0;

        adjustRset(mid, prevMid);

        if(isSubSeq()) {

            adjustRset(mid + 1, mid);

            if(!isSubSeq()) return mid + 1;


            lo = prevMid = mid + 1;
        } else {

            adjustRset(mid - 1, mid);

            if(isSubSeq()) return mid;

            hi = prevMid = mid - 1;
        }

    }
    return isSubSeq() ? lo + 1 : lo;    
};
/*
let s = "abcacb", p = "ab", removable = [3,1,0];
s = "abcbddddd", p = "abcd", removable = [3,2,1,4,5,6];
p = "abc", removable = [0,1,2,3,4];
s = "qlevcvgzfpryiqlwy", p = "qlecfqlw", removable = [12,5]; // 2
s = "x", p = "x", removable = [0];
s = "acb", p = "b", removable = [2,1,0];

console.log(maximumRemovals(s, p, removable));
*/