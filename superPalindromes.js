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

    const palindromesFor = (n) => {
      
       if(n < 10) return [BigInt(`${n}${n}`), BigInt(n)]

       const str = n.toString(), rev = [...str].reverse().join('')

       return [BigInt(`${str}${rev}`), BigInt(`${str}${rev.slice(1)}`)]

    }

    const isPalindrome = (n) => {

        const str = n.toString()

        return str === [...str].reverse().join('')
    }

    let ans = 0

    for(let i = 1; i < 1e5; i++) {

        const ps = palindromesFor(i)

        if(ps[1] * ps[1] > right) return ans

        for(p of ps) {
            const sq = p * p
            ans += (sq >= left && sq <= right && isPalindrome(sq)) ? 1 : 0 
        }
    }

    return ans
 }

let start = "40000000000000000"
end = "50000000000000000"

start  = "99999999999999"
end = "999999999999999999"

//start = "4"
//end   = "1000" 
console.log(superpalindromesInRange(start, end))