/*
#1370 Increasing Decreasing String

Given a string s. You should re-order the string using the following algorithm:

    Pick the smallest character from s and append it to the result.
    Pick the smallest character from s which is greater than the last appended character to the result and append it.
    Repeat step 2 until you cannot pick more characters.
    Pick the largest character from s and append it to the result.
    Pick the largest character from s which is smaller than the last appended character to the result and append it.
    Repeat step 5 until you cannot pick more characters.
    Repeat the steps from 1 to 6 until you pick all characters from s.

In each step, If the smallest or the largest character appears more than once you can choose any occurrence and append it to the result.

Return the result string after sorting s with this algorithm.

*/

/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    
    if(s.length < 2) return s

    const map = new Map(Array(26).fill(0).map((_, i) => [97+i, 0]))
    Array.from(s).reduce((acc, ch) => {
        acc.set(ch.charCodeAt(0), acc.get(ch.charCodeAt(0)) + 1)
        return acc
    }, map)

    let res = ''
    const freq =  Array.from(map)
    

    while(res.length < s.length) {
      let lo = 0, hi = 25
      while(lo <= hi) {
          if(freq[lo][1] === 0 ) {
              lo++
              continue
          }
          
    const char = String.fromCharCode(freq[lo][0])
    res+= char
    --freq[lo++][1]
      }

      while(hi >= 0) {

      if(freq[hi][1] === 0 ) {
            hi--
            continue
        }
        
    const char = String.fromCharCode(freq[hi][0])

      res+= char
      --freq[hi--][1]
      }
    }
   
 return res
};