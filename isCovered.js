/*
#1893. Check if All the Integers in a Range Are Covered
*/
/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
 var isCovered = function(ranges, left, right) {
    
    ranges.sort(([s1,e1], [s2,e2]) => s1 === s2 ? e1 - e2 : s1 - s2);
    
    for(let i = 0; i < ranges.length; i++) {
        
        const [start, end] = ranges[i];
        
        if(end < left) continue;
        
        if(start > left) return false;
        
        if(start <= left && right <= end) return true;
        
        left = end + 1;
    }
    
    return false;
};

arr = [[6,29],[33,43],[7,50],[11,34],[24,26],[32,47]], l = 2, r = 31;

console.log(isCovered(arr, l, r));
