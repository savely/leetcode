/*
#646. Maximum Length of Pair Chain

You are given an array of n pairs pairs 
where pairs[i] = [lefti, righti] and lefti < righti.

A pair p2 = [c, d] follows a pair p1 = [a, b] if b < c. 
A chain of pairs can be formed in this fashion.

Return the length longest chain which can be formed.

You do not need to use up all the given intervals. You can select pairs in any order.

 

Example 1:

Input: pairs = [[1,2],[2,3],[3,4]]
Output: 2
Explanation: The longest chain is [1,2] -> [3,4].

Example 2:

Input: pairs = [[1,2],[7,8],[4,5]]
Output: 3
Explanation: The longest chain is [1,2] -> [4,5] -> [7,8].

 

Constraints:

    n == pairs.length
    1 <= n <= 1000
    -1000 <= lefti < righti < 1000


*/

/**
 * @param {number[][]} pairs
 * @return {number}
 */
 var findLongestChain = function(pairs) {
    
    pairs.sort(([s1,e1], [s2,e2]) => e1 === e2 ? s1 - s2 : e1 - e2);
    
    let pair = pairs[0];
    
    let length = 1;
    
    for(let i = 1; i < pairs.length; i++) {
        
        let [s, e] = pairs[i], [s0, e0] = pair;
        
        if(e0 < s) {
            pair = [s, e];
            length++;
        }
        
    }
    
    return length;
};

let pairs = [[-10,-8],[8,9],[-5,0],[6,10],[-6,-4],[1,7],[9,10],[-4,7]];//4

console.log(findLongestChain(pairs));