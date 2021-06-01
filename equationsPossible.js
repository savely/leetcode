/*
#990. Satisfiability of Equality Equations

Given an array equations of strings that represent relationships between variables, each string equations[i] has length 4 
and takes one of two different forms: "a==b" or "a!=b".  Here, a and b are lowercase letters (not necessarily different) 
that represent one-letter variable names.

Return true if and only if it is possible to assign integers to variable names so as to satisfy all the given equations.

 

Example 1:

Input: ["a==b","b!=a"]
Output: false
Explanation: If we assign say, a = 1 and b = 1, then the first equation is satisfied, but not the second.  
There is no way to assign the variables to satisfy both equations.
Example 2:

Input: ["b==a","a==b"]
Output: true
Explanation: We could assign a = 1 and b = 1 to satisfy both equations.
Example 3:

Input: ["a==b","b==c","a==c"]
Output: true
Example 4:

Input: ["a==b","b!=c","c==a"]
Output: false
Example 5:

Input: ["c==c","b==d","x!=z"]
Output: true
 

Note:

1 <= equations.length <= 500
equations[i].length == 4
equations[i][0] and equations[i][3] are lowercase letters
equations[i][1] is either '=' or '!'
equations[i][2] is '='
*/

/**
 * @param {string[]} equations
 * @return {boolean}
 */
 var equationsPossible = function(equations) {
   
    const equalsMap = new Array(26).fill(0).map((b, i) => {
        b |= (1 << i);
        return b;
    })

    const bt = (ch) => ch.charCodeAt(0) - 97
   
    const equalsTo = (ch) => {
        
        const byte = equalsMap[bt(ch)], res = [];
        let b = 0, i = 0;

        while(i < 26) {

            b = 1 << i++

            if(byte & b) {
              res.push(i - 1)
            }
        }

        return res;
    }

    for(let i = 0; i < equations.length; i++) {

        if(equations[i][1] === '!') continue;

        const fst = equations[i][0], snd = equations[i][3];
        const fstIdx = bt(fst), sndIdx = bt(snd);

        if(equalsMap[fstIdx] & (1 << sndIdx)) continue;

        const eqFst = equalsTo(fst), eqSnd = equalsTo(snd);

        for(const idx of eqFst) {
            equalsMap[idx] |= equalsMap[sndIdx]
        }

        for(const idx of eqSnd) {
            equalsMap[idx] |= equalsMap[fstIdx]
        }
    }

    for(let i = 0; i < equations.length; i++) {

        if(equations[i][1] !== '!') continue;

        const fst = equations[i][0], snd = equations[i][3];
        const fstEquals = equalsMap[bt(fst)], sndBt = 1 << bt(snd);

        if(fstEquals & sndBt) return false;

    }
    
    return true;
};

let equations = ["a==b", "b!=a"];
equations = ["a==b","b!=c","c==a"];

console.log(equationsPossible(equations));