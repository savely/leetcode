/*
#2007. Find Original Array From Doubled Array

An integer array original is transformed into a doubled array changed by appending twice the value of every element in original, and then randomly shuffling the resulting array.

Given an array changed, return original if changed is a doubled array. If changed is not a doubled array, return an empty array. The elements in original may be returned in any order.

 

Example 1:

Input: changed = [1,3,4,2,6,8]
Output: [1,3,4]
Explanation: One possible original array could be [1,3,4]:
- Twice the value of 1 is 1 * 2 = 2.
- Twice the value of 3 is 3 * 2 = 6.
- Twice the value of 4 is 4 * 2 = 8.
Other original arrays could be [4,3,1] or [3,1,4].

Example 2:

Input: changed = [6,3,0,1]
Output: []
Explanation: changed is not a doubled array.

Example 3:

Input: changed = [1]
Output: []
Explanation: changed is not a doubled array.

 

Constraints:

    1 <= changed.length <= 105
    0 <= changed[i] <= 105


*/

var findOriginalArray = function(changed) {
    
    const map = {}, res = [];
    
    if(changed.length % 2) return [];
    
    for(const n of changed) map[n] = (map[n] || 0) + 1;
    
    if(map[0] !== undefined) {
        
        if(map[0] % 2) return [];
        
        res.push(...(new Array(map[0]/ 2).fill(0)));

        delete map[0];
    }
    
    console.table(map);

    changed.sort((a, b) => b - a);
    
    
    for(const n of changed) {

        if(!map[n]) continue;
        
        let k = n * 2;
        
        if(!map[k]) {

            if(map[n / 2]) {
                map[n]--;
                map[n/2]--;
                res.push(n/2);
            }

            continue;
        }
        
        while(map[k * 2] > 0) k *= 2;
        
        map[k]--;
        map[k/2]--;
        
        res.push(k/2);
    }
    res.sort((a,b) => a -b);
    console.table(res);
    
    return res.length === changed.length / 2 ? res : [];
};

let changed = [1,3,4,2,6,8];
changed = [0,6,3,0,1,2];
changed = [80,52,12,33,23,43,49,6,40,88,48,96,14,29,27,58,9,2,19,58,30,54,47,14,35,16,48,18,29,76,72,30,38,28,78,42,60,6,37,94,30,41,56,30,42,38,39,84,3,24,7,36,29,34,48,24,24,68,47,88,6,15,76,28,72,94,3,44,12,32,38,82,36,70,14,26,12,50,58,15,66,98,7,14,15,4,39,74,2,100,44,78,1,6,21,12,24,28,46,86];
//[1,2,3,3,6,6,7,7,9,12,12,14,14,15,15,15,16,19,21,23,24,24,26,27,28,29,29,29,30,33,34,35,36,36,37,38,38,39,39,40,41,42,43,44,44,47,47,48,49,50]



console.table(findOriginalArray(changed));