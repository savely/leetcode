/*
#830. Positions of Large Groups

In a string s of lowercase letters, these letters form consecutive groups of the same character.

For example, a string like s = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z", and "yy".

A group is identified by an interval [start, end], where start and end denote the start and end indices (inclusive) of the group. In the above example, "xxxx" has the interval [3,6].

A group is considered large if it has 3 or more characters.

Return the intervals of every large group sorted in increasing order by start index.
*/

/**
 * @param {string} S
 * @return {number[][]}
 */
 var largeGroupPositions = function(S) {
    
    let start = 0, end = 0
    
    const groups = []
    
    for(let i = 1; i < S.length; i++) {
        
        if(S[i] === S[i-1]) {
            end++
            continue
        }
        
        if(end - start > 1) {
            groups.push([start, end])
        }
        
        start = end = i
    }
    
    if(end - start > 1) {
       groups.push([start, end])    
    }
    
    return groups
};