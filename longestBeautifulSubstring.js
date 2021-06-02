/*
#1839. Longest Substring Of All Vowels in Order


*/

/**
 * @param {string} word
 * @return {number}
 */
 var longestBeautifulSubstring = function(word) {
    
    
    counter[0] = word[0] == 'a' ? 1 : 0;
    
    let max = 0,  count = 0;
    
   
    for(let i = 1; i < word.length; i++) {
        
        const ch = word.charCodeAt(i), prev =word.charCodeAt(i-1);
        
        if(prev > ch) {
            len = 1;
            count = 1;
        }

        if(ch === prev)  {
            len++
        }  else if(ch === prev + 1) {
            len++
            count++
        }

        if(count === 5) {
            max = Math.max(max, len)
            len = 0;
            count = 0;
        }
        
    }

    return max;
};

let str = "aeiaaioaaaaeiiiiouuuooaauuaeiu";
//str = 'aeiou';
//str = "aaaaaaeiiiioou";
console.log(longestBeautifulSubstring(str))