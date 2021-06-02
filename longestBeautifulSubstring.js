/*
#1839. Longest Substring Of All Vowels in Order


*/

/**
 * @param {string} word
 * @return {number}
 */
 var longestBeautifulSubstring = function(word) {
    
    let max = 0,  count = word[0] == 'a' ? 1 : 0, len = count;
    
   
    for(let i = 1; i < word.length; i++) {
        
        const ch = word.charCodeAt(i), prev =word.charCodeAt(i-1);
        
        if(prev > ch) {

            if(count === 5) {
                max = Math.max(max, len)
            } 

            len = 1;
            count = 1;
            continue;
        }

        if(ch === prev)  {
            len++
        }  else if(ch > prev) {
            len++
            count++
        }
    }
     
    if(count === 5) {
       max = Math.max(max, len)     
    }

    return max
};

let str = "aeiaaioaaaaeiiiiouuuooaauuaeiu";
//str = 'aeiou';
//str = "aaaaaaeiiiioou";
//str = "aiaeioouaaeeiouuiuieeo"; //8
console.log(longestBeautifulSubstring(str))