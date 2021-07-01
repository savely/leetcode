/*
#1202. Smallest String With Swaps

You are given a string s, and an array of pairs of indices in the string pairs where pairs[i] = [a, b] indicates 2 indices(0-indexed) of the string.

You can swap the characters at any pair of indices in the given pairs any number of times.

Return the lexicographically smallest string that s can be changed to after using the swaps.

 

Example 1:

Input: s = "dcab", pairs = [[0,3],[1,2]]
Output: "bacd"
Explaination: 
Swap s[0] and s[3], s = "bcad"
Swap s[1] and s[2], s = "bacd"
Example 2:

Input: s = "dcab", pairs = [[0,3],[1,2],[0,2]]
Output: "abcd"
Explaination: 
Swap s[0] and s[3], s = "bcad"
Swap s[0] and s[2], s = "acbd"
Swap s[1] and s[2], s = "abcd"
Example 3:

Input: s = "cba", pairs = [[0,1],[1,2]]
Output: "abc"
Explaination: 
Swap s[0] and s[1], s = "bca"
Swap s[1] and s[2], s = "bac"
Swap s[0] and s[1], s = "abc"
 

Constraints:

1 <= s.length <= 10^5
0 <= pairs.length <= 10^5
0 <= pairs[i][0], pairs[i][1] < s.length
s only contains lower case English letters.

*/

/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
 var smallestStringWithSwaps = function(s, pairs) {
    
    const ranks = new Array(s.length).fill(-1);

    const find = (i) => {
  
        if(ranks[i] < 0) return i;

        const p = find(ranks[i]);

        ranks[i] = p;
   
        return ranks[i];
    }

    const union = (i, j) => {

        const pi = find(i), ri = ranks[pi], pj = find(j), rj = ranks[j];

        if(pi === pj) return;

        if(ri < rj || (ri === rj && s[j] < s[i])) {
            ranks[j] = pi;
            ranks[pi] += rj;
        } else {
            ranks[i] = pj;
            ranks[pj] += ri;  
        }
    }

    for(const [i, j] of pairs) {
        union(i,j);
    }

    const sorted = {};    

    for(let i = 0; i < s.length; i++) {
        const p = find(i);
        sorted[p] = sorted[p] || [];
        sorted[p].push(i);
    }

    for(const p in sorted) {
        sorted[p].sort((i, j) => s.charCodeAt(j) - s.charCodeAt(i));
    }

    let res = '';

    for(let i = 0; i < s.length; i++) {
        
        const p = find(i);

        res += s.charAt(sorted[p].pop());
    }    

    console.log(ranks);
   return res;
};



let s = "dcab", pairs = [[0,3],[1,2]];
s = "dcab", pairs = [[0,3],[1,2],[0,2]];
s = "cba", pairs = [[0,1],[1,2]];
s = "qdwyt", pairs = [[2,3],[3,2],[0,1],[4,0],[3,2]]; //qdwyt

console.log(smallestStringWithSwaps(s,pairs));
