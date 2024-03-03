/*
#1531. String Compression II

Run-length encoding is a string compression method that works by replacing consecutive identical characters (repeated 2 or more times) with the concatenation of the character and the number marking the count of the characters (length of the run). For example, to compress the string "aabccc" we replace "aa" by "a2" and replace "ccc" by "c3". Thus the compressed string becomes "a2bc3".

Notice that in this problem, we are not adding '1' after single characters.

Given a string s and an integer k. You need to delete at most k characters from s such that the run-length encoded version of s has minimum length.

Find the minimum length of the run-length encoded version of s after deleting at most k characters.

 

Example 1:

Input: s = "aaabcccd", k = 2
Output: 4
Explanation: Compressing s without deleting anything will give us "a3bc3d" of length 6. Deleting any of the characters 'a' or 'c' would at most decrease the length of the compressed string to 5, for instance delete 2 'a' then we will have s = "abcccd" which compressed is abc3d. Therefore, the optimal way is to delete 'b' and 'd', then the compressed version of s will be "a3c3" of length 4.

Example 2:

Input: s = "aabbaa", k = 2
Output: 2
Explanation: If we delete both 'b' characters, the resulting compressed string would be "a4" of length 2.

Example 3:

Input: s = "aaaaaaaaaaa", k = 0
Output: 3
Explanation: Since k is zero, we cannot delete anything. The compressed string is "a11" of length 3.

 

Constraints:

    1 <= s.length <= 100
    0 <= k <= s.length
    s contains only lowercase English letters.


*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLengthOfOptimalCompression = function(s, k) {

    const toStr = (arr) => {
        let res = '';

        for(const [ch, count] of arr) res += count === 0 ? '' : `${ch}${count > 1 ? count : ''}`;

        return res;
    }

    const copy = (arr) => {

        const res = [];

        for(const [ch, cnt] of arr) res.push([ch, cnt]);

        return res;
    };
          
    const arr = [];
    
    let curr = 1;
    
    for(let i = 0; i < s.length; i++) {
        
        if(s[i] === s[i+1]){
            curr++;
            continue;
        }
        arr.push([s[i], curr]);
        curr = 1;
    }

    let min = toStr(s).length;

    const dp = new Set();

    const f = (arr, i, n) => {

        if(n < 0 || i < 0 || i >= arr.length) return;

        const hash = `${toStr(arr)}|${i}|${n}`;

        if(dp.has(hash)) return;

        dp.add(hash);

        f(copy(arr), i + 1, n);

        const [ch, count] = arr[i];

        const cpy = copy(arr);

        if(count > n) {
            //finalize search
            cpy[i][1] -= n;
            min = Math.min(min, toStr(cpy).length);
            return;
        }

        if(arr[i - 1] && arr[i + 1] && arr[i -1][0] === arr[i + 1][0]) {
            cpy[i - 1][1] += cpy[i + 1][1];

            cpy.splice(i, 2);
        } else {
            cpy.splice(i, 1);
        } 

        min = Math.min(min, toStr(cpy).length);

        f(cpy, i - 1, n - count);
    }
    
    f(arr, 0, k);

    console.dir(dp);

    return min;
};

let  s = "aaabcccd", k = 2;
s = "aabbaa", k = 2;
s = "aaaaaaaaaaa", k = 9;
s = "aaaaabbbbbtttttttttbbbbbgbbbbbbbbaaaccaaayyyyyyyyeysjkgjeffffffjefddffffffffeyyey", k = 23 //7

console.log(getLengthOfOptimalCompression(s, k));