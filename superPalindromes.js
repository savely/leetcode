/*
#906. Super Palindromes

Let's say a positive integer is a super-palindrome if it is a palindrome, and it is also the square of a palindrome.

Given two positive integers left and right represented as strings, return the number of super-palindromes integers in the inclusive range [left, right].

 

Example 1:

Input: left = "4", right = "1000"
Output: 4
Explanation: 4, 9, 121, and 484 are superpalindromes.
Note that 676 is not a superpalindrome: 26 * 26 = 676, but 26 is not a palindrome.
Example 2:

Input: left = "1", right = "2"
Output: 1
 

Constraints:

1 <= left.length, right.length <= 18
left and right consist of only digits.
left and right cannot have leading zeros.
left and right represent integers in the range [1, 1018].
left is less than or equal to right.
*/

/**
 * @param {string} left
 * @param {string} right
 * @return {number}
 */
 var superpalindromesInRange = function(left, right) {
    
     const palindromes = (l,r) => {

        const prev = [], set = new Set()
   
        for(let i = 1; i <= 9; i++) {
            prev.push(`${i}`)
   
            if(i < 4 && i >= l && i < r) {
                set.add(BigInt(i))
            }
        }
   
       
       const inserts = ['0','1','2','3','4','5','6','7','8','9','00']
       const digits  = ['1','2','3','4','5','6','7','8','9']
   
        while(prev.length) {
   
           const next  = new Set() 
   
           while (prev.length){
             
               const str = prev.pop()

               for(const dig of digits) {
                   
                const  num = dig.concat(str).concat(dig)
                const bigNum = BigInt(num) 

                    if(bigNum <= r && !set.has(bigNum)) {
                        next.add(num)
                        if(bigNum >= l) set.add(bigNum)
                    }
                }               

   
               if(str.length % 2) {
                   const even = str.concat([...str].reverse().join(''))
                   const bigEven = BigInt(even)
   
                   if(bigEven <= r && !set.has(bigEven)) {
                       next.add(even)
                       if(bigEven >= l) set.add(bigEven)
                   }
                  continue 
               }
               
               const half = str.length / 2, fst = str.slice(0, half), last = str.slice(half, str.length + 1)
               for(const num of inserts) {
                   
                   const odd = fst.concat(num).concat(last)
                   const bigOdd = BigInt(odd) 

                   if(bigOdd <= r && !set.has(bigOdd)) {
                       next.add(odd)
                       if(bigOdd >= l) set.add(bigOdd)
                   }
               }
           }
   
           prev.push(...next)
       }
     return [...set]
   }

    const palindromesArr = palindromes(Math.floor(Math.sqrt(parseInt(left))), Math.ceil(Math.sqrt(parseInt(right))))    

    //console.table(palindromesArr)    

    return palindromesArr.filter(bigN => {
        const arr = [...(bigN * bigN).toString()], isSuper = arr.join('') === arr.reverse().join('')

       if(isSuper) console.log([bigN, bigN * bigN])
        return isSuper
    }).length
};


let start = "40000000000000000"
end = "50000000000000000"

start  = "99999999999999"
end = "999999999999999999"

console.log(superpalindromesInRange(start, end))