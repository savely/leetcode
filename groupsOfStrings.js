/*
#2157. Groups of Strings
You are given a 0-indexed array of strings words. Each string consists of lowercase English letters only. No letter occurs more than once in any string of words.

Two strings s1 and s2 are said to be connected if the set of letters of s2 can be obtained from the set of letters of s1 by any one of the following operations:

Adding exactly one letter to the set of the letters of s1.
Deleting exactly one letter from the set of the letters of s1.
Replacing exactly one letter from the set of the letters of s1 with any letter, including itself.
The array words can be divided into one or more non-intersecting groups. A string belongs to a group if any one of the following is true:

It is connected to at least one other string of the group.
It is the only string present in the group.
Note that the strings in words should be grouped in such a manner that a string belonging to a group cannot be connected to a string present in any other group. It can be proved that such an arrangement is always unique.

Return an array ans of size 2 where:

ans[0] is the total number of groups words can be divided into, and
ans[1] is the size of the largest group.
 

Example 1:

Input: words = ["a","b","ab","cde"]
Output: [2,3]
Explanation:
- words[0] can be used to obtain words[1] (by replacing 'a' with 'b'), and words[2] (by adding 'b'). So words[0] is connected to words[1] and words[2].
- words[1] can be used to obtain words[0] (by replacing 'b' with 'a'), and words[2] (by adding 'a'). So words[1] is connected to words[0] and words[2].
- words[2] can be used to obtain words[0] (by deleting 'b'), and words[1] (by deleting 'a'). So words[2] is connected to words[0] and words[1].
- words[3] is not connected to any string in words.
Thus, words can be divided into 2 groups ["a","b","ab"] and ["cde"]. The size of the largest group is 3.  
Example 2:

Input: words = ["a","ab","abc"]
Output: [1,3]
Explanation:
- words[0] is connected to words[1].
- words[1] is connected to words[0] and words[2].
- words[2] is connected to words[1].
Since all strings are connected to each other, they should be grouped together.
Thus, the size of the largest group is 3.
 

Constraints:

1 <= words.length <= 2 * 104
1 <= words[i].length <= 26
words[i] consists of lowercase English letters only.
No letter occurs more than once in words[i].

*/

/**
 * @param {string[]} words
 * @return {number[]}
 */
 var groupStrings = function(words) {

  
    const dSet = new Array(words.length).fill(-1);

    const find = (node) => {

        if(dSet[node] < 0) return node;

        return find(dSet[node]);
    };

    const union = (node1, node2) => {

        const p1 = find(node1), p2 = find(node2);

        if(p1 === p2) return;

        const r1 = dSet[p1], r2 = dSet[p2];

        if(r1 < r2) {
            dSet[p1] += r2;
            dSet[p2]  = p1; 
        } else {
            dSet[p2] += r1;
            dSet[p1]  = p2;             
        }
    };

    words = words.map((word) => {

        let b = 0;

        for(const ch of word) {
            b |= 1 << (ch.charCodeAt(0) - 97);
        }
        
        return [word.length, b];
    });

    words.sort((w1, w2) => w1[0] - w2[0]);

    const isConnected = ([l1, b1], [l2, b2]) => {

        const lenDiff = Math.abs(l1 - l2);

        if(lenDiff > 1) return false;

        let xor = b1 ^ b2, diff = 0, maxDiff = lenDiff > 0 ? 1 : 2;

        while(xor > 0) {

            diff += xor % 2;

            if(diff > maxDiff) return false;

            xor >>= 1;
        }

        return true;
    };

    for(let i = 0; i < words.length; i++) {

        for(let j = i - 1; j >= 0 && words[i][0] - words[j][0] < 2; j--) {

            if(isConnected(words[i], words[j])) {
                union(i, j);
            }
        }
    }

    const res = [0, 0];

    for(const rank of dSet) {

        if(rank < 0) {
            res[0]++;
            res[1] = Math.max(res[1], -1 * rank);
        }
    }

    //console.table(dSet);
    return res;
};

let words  = ["a","b","ab","cde","dc"];
//words = ["a","ab","abc"];
//words = ["a","b","ab","bda","xzdy","xzy", "yzxr","rda"];
//words = ["ab","bda","xzdy","xzy", "yzxr","rda"];

/*
["a","b","ab","cde"]
["a","ab","abc"]
["ab","bda","xzdy","xzy", "yzxr","rda"]
["a","b","ab","bda","xzdy","xzy", "yzxr", "rda", "rxy", "rdx"]
*/

//words = ["qamp","am","khdrn"]; //3, 1


console.table(groupStrings(words));