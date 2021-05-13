/*
# 816. Ambiguous Coordinates

We had some 2-dimensional coordinates, like "(1, 3)" or "(2, 0.5)".  
Then, we removed all commas, decimal points, and spaces, and ended up with the string s.  
Return a list of strings representing all possibilities for what our original coordinates could have been.

Our original representation never had extraneous zeroes, so we never started with numbers 
like "00", "0.0", "0.00", "1.0", "001", "00.01", or any other number that can be represented with less digits.  
Also, a decimal point within a number never occurs without at least one digit occuring before it, so we never started with numbers like ".1".

The final answer list can be returned in any order. 
Also note that all coordinates in the final answer have exactly one space between them (occurring after the comma.)
*/
/**
 * @param {string} s
 * @return {string[]}
 */
 var ambiguousCoordinates = function(s) {
    
    const validNums = (str) => {
        
        if(str.length === 1) return [str];
       
        if(str[0] === '0' && str[str.length -1] === '0') return [];
        
        if(str[0] === '0') return ['0.' + str.substring(1)];
        
        if([str.length -1] === '0') return [str];
        
        const res = [str]
        
        for(let i = 1; i < str.length; i++) {

            const base =str.slice(0,i), frac = str.slice(i)

            if(frac[frac.length-1] === '0') continue;

            res.push(`${base}.${frac}` )
        }
        
        return res
    }
    
    const res = []
    
    for(let i = 2; i < s.length - 1; i++) {
        
        const nums1 = validNums(s.substring(1, i))
        
        if(!nums1.length) continue;
        
        const nums2 = validNums(s.substring(i, s.length -1))
        
        if(!nums2.length) continue;
        
        for(let m = 0; m < nums1.length; m++) {
            for(let k = 0; k < nums2.length; k++) {
                res.push(`(${nums1[m]}, ${nums2[k]})`)
            }
        }
    }
    
    return res
};