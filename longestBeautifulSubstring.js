/*
#1839. Longest Substring Of All Vowels in Order


*/

/**
 * @param {string} word
 * @return {number}
 */
 var longestBeautifulSubstring = function(word) {
    
    const counter = new Array(5).fill(0),  map = {'e' : [1,'a'],'i' :[2, 'e'],'o': [3,'i'],'u' : [4,'o']};
    
    counter[0] = word[0] == 'a' ? 1 : 0;
    
    let max = 0;
    
   
    for(let i = 1; i < word.length; i++) {
        
        const ch = word[i], prev = word[i-1];
        
        if(ch !=='u' && prev === 'u') {
            
            if(counter[4] > 0) {
              max = Math.max(max, counter.reduce((acc, n) => acc + n))  
            }
            
            counter.fill(0);
        }
        
        if(ch === 'a') {
            
          if(prev !== 'a' && counter[0] > 0) {
               counter.fill(0); 
            }
            counter[0]++
            continue;
        }

        const [idx, pr]  = map[ch];
             
        if((prev !== ch && counter[idx] > 0)
            || (counter[idx] === 0 && prev !== pr)
            || !counter[idx - 1] > 0) {

            counter.fill(0);
            continue;
            }
            counter[idx]++
    }
    
    if(counter[4] > 0) {
        max = Math.max(max, counter.reduce((acc, n) => acc + n))  
    }
    return max;
};

let str = "aeiaaioaaaaeiiiiouuuooaauuaeiu";
//str = 'aeiou';
//str = "aaaaaaeiiiioou";
console.log(longestBeautifulSubstring(str))