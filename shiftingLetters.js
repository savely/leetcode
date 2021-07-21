/*
#848
We have a string S of lowercase letters, and an integer array shifts.

Call the shift of a letter, the next letter in the alphabet, (wrapping around so that 'z' becomes 'a'). 

For example, shift('a') = 'b', shift('t') = 'u', and shift('z') = 'a'.

Now for each shifts[i] = x, we want to shift the first i+1 letters of S, x times.

Return the final string after all such shifts to S are applied.
*/

/**
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(S, shifts) {

  const shift = function(letter, n) {
       let code = letter.charCodeAt(0) + n % 26
       if(code > 122) {
           code -= 26
       }
       return String.fromCharCode(code)
  } 
  const s = Array.from(S) 
  let n = 0

  for(let i = shifts.length-1; i >= 0; i--) {
     n += shifts[i]
     s[i] = shift(s[i], n)
  }

  return s.join('')
};

"ruu"
[26,9,17]

console.log(shiftingLetters('abc', [3,5,9]))
console.log(shiftingLetters('ruu', [26,9,17]))