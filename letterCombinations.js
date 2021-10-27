/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    
    const keyb = [' ','','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']

    const perm = function(arr, i) {
        const chars = Array.from(keyb[i])

        if(arr.length === 0) return chars

        return chars.map(char => arr.map(a => a + char)).reduce((acc, a) => acc.concat(a),[])
    }
    return Array.from(digits).map(c => parseInt(c)).reduce((acc, n) => {
         return perm(acc, n)
    }, [])
};
