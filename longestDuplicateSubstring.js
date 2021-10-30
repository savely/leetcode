/*
#1044. Longest Duplicate Substring

Given a string s, consider all duplicated substrings: (contiguous) substrings of s 
that occur 2 or more times. The occurrences may overlap.

Return any duplicated substring that has the longest possible length. 
If s does not have a duplicated substring, the answer is "".

 

Example 1:

Input: s = "banana"
Output: "ana"

Example 2:

Input: s = "abcd"
Output: ""

 

Constraints:

    2 <= s.length <= 3 * 104
    s consists of lowercase English letters.

*/

/**
 * @param {string} S
 * @return {string}
 */
 var longestDupSubstring = function(S) {

    const cmp = (i, j, len) => {

        for(let k = 0; k < len; k++) {
            if(S[i + k] !== S[j + k]) return false;
        }

        return true;
    };

    const rollingHash = (hash, next, length, remove = '') => {

        const prime = 31n, mod = BigInt(1e9 + 9);

        hash *= prime;
        hash %= mod;
        hash += BigInt(next.charCodeAt(0) - 96);

        if(!remove) return hash % mod;

        const n = BigInt(remove.charCodeAt(0) - 96), rem = n * (prime ** BigInt(length) % mod);

        return (hash - rem) % mod;
    };

    const check = (length) => {

        if(length <= 0 || length >= S.length) return '';

        let hash = 0n;

        for(let i = 0; i < length; i++) {
            hash = rollingHash(hash, S[i]);
        }

        const hashes = {};
        hashes[hash] = 0;

        for(let i = length; i < S.length; i++) {
            hash = rollingHash(hash, S[i], length, S[i - length]);

            if(hashes[hash] !== undefined && cmp(hashes[hash], i - length + 1, length)) return S.slice(i - length + 1, i + 1);

            hashes[hash] = i - length + 1;
        }
        return '';
    };

    let lo = 0, hi  = S.length - 1;

    while(hi >= lo) {

        const mid = (hi + lo) / 2 >> 0;
        const str = check(mid);

        if(mid > 0 && !str.length) {
            const str2 = check(mid - 1);
            if(str2) return str2;

            hi = mid - 1;
        } else {
            const str2 = check(mid + 1);

            if(!str2.length) return str;
            
            lo = mid + 1;
        }
    } 
    return '';
};

let s = "banana";

//s = "a".repeat(30000)
s = "abcdbcad";
s = "banacabanaca";
s = "ananananan";
//"anananan"
s = "aa";


console.log(longestDupSubstring(s));