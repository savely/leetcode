/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    
    const isLetter = char =>  char.charCodeAt() >= 'A'.charCodeAt() && char.charCodeAt() <= 'z'.charCodeAt()
    const isUpper = char =>  char.charCodeAt() >= 'A'.charCodeAt() && char.charCodeAt() <= 'Z'.charCodeAt()

    const addPermutation = (permutations, char) => {
        if(permutations.length === 0) return [[char]]
        return permutations.map(perm => {
            perm.push(char)
            return perm
        })
    }

    return Array.from(S).reduce((acc, ch) => {

        if(!isLetter(ch)) return addPermutation(acc, ch)

        const accCpy = [...acc].map(perm => [...perm])

        acc = addPermutation(acc, ch)

        f = isUpper(ch) ? ''.toLowerCase : ''.toUpperCase

       return acc.concat(addPermutation(accCpy, f.call(ch)))

    } , []).map(arr => arr.join(''))

};

console.log(letterCasePermutation('12345'))