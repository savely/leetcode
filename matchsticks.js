/*
#473. Matchsticks to Square

You are given an integer array matchsticks where matchsticks[i] is the length 
of the ith matchstick. You want to use all the matchsticks to make one square.
 You should not break any stick, but you can link them up, and each matchstick 
 must be used exactly one time.

Return true if you can make this square and false otherwise.

 

Example 1:

Input: matchsticks = [1,1,2,2,2]
Output: true
Explanation: You can form a square with length 2, one side of the square came two sticks with length 1.

Example 2:

Input: matchsticks = [3,3,3,3,4]
Output: false
Explanation: You cannot find a way to form a square with all the matchsticks.

 

Constraints:

    1 <= matchsticks.length <= 15
    0 <= matchsticks[i] <= 109


*/

/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
 var makesquare = function(matchsticks) {
    
    if(matchsticks.length < 4) return false;
    
    const sum = matchsticks.reduce((acc, n) => acc + n, 0);
    
    if(sum % 4) return false;
    
    if(matchsticks.length === 4) return true;
     
     matchsticks.sort((a,b) => b - a);
    
    const side = sum / 4, visited = new Set();
    
    let candidates =[[0,0,0,0]];
    
    for (let i =  0; i < matchsticks.length; i++) {
        
        const newCandidates = [], el = matchsticks[i];
        
        visited.clear();
        
        while(candidates.length) {

            const cand = candidates.pop();
            
            for(let j = 0; j < 4; j++) {
                if(cand[j] + el > side) continue;
                
                const next = [...cand];
                next[j] += el;

                if(next[0] === side && next[1] === side
                   && next[2] === side && next[3] === side) return true;

                const hash = next.sort((a,b) => a-b).join('|');

                if(visited.has(hash)) continue;

                visited.add(hash);

                newCandidates.push(next);
            }
        }

        if(!newCandidates.length) return false;
        candidates = newCandidates;
    } 
    return false;
};