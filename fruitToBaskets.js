/*
*/

/**
 * @param {number[]} fruits
 * @return {number}
 */
 var totalFruit = function(fruits) {
    
    
    const map = {};
    
    let start = 0, end = 0, max = 0;
    
    while(end < fruits.length) {
        
        const fruit = fruits[end], buckets = Object.keys(map).length;
        
        if(map[fruit] !== undefined) {
            map[fruit] ++;
            end++;
            continue;
        }
        if(buckets < 2) {
           map[fruit] = 1;
            end++;
            continue;
        }
        
        let sum = 0;
        for(const fr in map) {
            sum+= map[fr];
        }
        
        max = Math.max(max, sum);
       
        while(start < end) {
            
            map[fruits[start]]--;

            if(map[fruits[start]] === 0) break;
            start++;
        }
        
        delete map[fruits[start++]];
        
    }
    
        let sum = 0;
        for(const fr in map) {
            sum+= map[fr];
        }
        
        return  Math.max(max, sum);
};

fruits = [1,0,1,4,1,4,1,2,3];

console.log(totalFruit(fruits));
