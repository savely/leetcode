/*
#2007. Find Original Array From Doubled Array

An integer array original is transformed into a doubled array changed 
by appending twice the value of every element in original, and then randomly 
shuffling the resulting array.

Given an array changed, return original if changed is a doubled array. 
If changed is not a doubled array, return an empty array. 
The elements in original may be returned in any order.

 

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