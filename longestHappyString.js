/*
#1405. Longest Happy String

A string s is called happy if it satisfies the following conditions:

s only contains the letters 'a', 'b', and 'c'.
s does not contain any of "aaa", "bbb", or "ccc" as a substring.
s contains at most a occurrences of the letter 'a'.
s contains at most b occurrences of the letter 'b'.
s contains at most c occurrences of the letter 'c'.
Given three integers a, b, and c, return the longest possible happy string. If there are multiple longest happy strings, return any of them. If there is no such string, return the empty string "".

A substring is a contiguous sequence of characters within a string.

 

Example 1:

Input: a = 1, b = 1, c = 7
Output: "ccaccbcc"
Explanation: "ccbccacc" would also be a correct answer.
Example 2:

Input: a = 7, b = 1, c = 0
Output: "aabaa"
Explanation: It is the only correct answer in this case.
 

Constraints:

0 <= a, b, c <= 100
a + b + c > 0

*/

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
 var longestDiverseString = function(a, b, c) {
     
    if(a + b + c === 0) return "";     

    const f = ([k1, v1], [k2, v2]) => v1 - v2, arr = [["a", a], ["b", b], ["c", c]];

    let ans = "";

    while(true) {

        arr.sort(f);

        const len = ans.length - 1, [a1, a2, a3] = arr;

        const [k1, v1] = a1, [k2, v2] = a2, [k3, v3] = a3;

        if(v1 === 0 && v2 === 0) {
            return ans[len] === k3 ? (ans[len - 1] === k3 ? ans : ans + k3.repeat(Math.min(1, v3))) : ans + k3.repeat(Math.min(2, v3));
        }

        if(len < 1 || ans[len -  1] !== ans[len] ) {
            ans += k3;
            arr[2][1]--;
            continue;
        }
        
        for(let i = 0; i < 3; i++) {
            if(arr[i][1] === 0 || arr[i][0] === ans[len]) continue;

            ans += arr[i][0];
            arr[i][1]--;
            break;
        }        
    }

    return ans;
};
