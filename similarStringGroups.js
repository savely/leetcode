/*
#839. Similar String Groups

Two strings X and Y are similar if we can swap two letters (in different positions) of X, so that it equals Y. Also two strings X and Y are similar if they are equal.

For example, "tars" and "rats" are similar (swapping at positions 0 and 2), and "rats" and "arts" are similar, but "star" is not similar to "tars", "rats", or "arts".

Together, these form two connected groups by similarity: {"tars", "rats", "arts"} and {"star"}.  Notice that "tars" and "arts" are in the same group even though they are not similar.  Formally, each group is such that a word is in the group if and only if it is similar to at least one other word in the group.

We are given a list strs of strings where every string in strs is an anagram of every other string in strs. How many groups are there?

 

Example 1:

Input: strs = ["tars","rats","arts","star"]
Output: 2
Example 2:

Input: strs = ["omv","ovm"]
Output: 1
 

Constraints:

1 <= strs.length <= 300
1 <= strs[i].length <= 300
strs[i] consists of lowercase letters only.
All words in strs have the same length and are anagrams of each other.

*/

/**
 * @param {string[]} strs
 * @return {number}
 */
 var numSimilarGroups = function(strs) {

    strs = [...new Set(strs)];

    const dSet = new Array(strs.length).fill(-1);

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
    
    const cmp = (str1, str2)  => {

        let diff = 0;

        for(let i = 0; i < str1.length; i++) {
            diff += str1[i] === str2[i] ? 0 : 1;

            if(diff > 2) return false;
        }

        return true;
    };

    for(let i = 0; i < strs.length - 1; i++) {
        for(let j = i + 1; j < strs.length; j++) {

            if(cmp(strs[i], strs[j])) union(i,j);
        }
    }

    let res = 0;

    for(const rank of dSet) {

        res += rank < 0 ? 1 : 0;
    }
    
    return res;
};
