/*
Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.

Note:
The length of num is less than 10002 and will be ≥ k.
The given num does not contain any leading zero.
Example 1:

Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
Example 2:

Input: num = "10200", k = 1
Output: "200"
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
Example 3:

Input: num = "10", k = 2
Output: "0"
Explanation: Remove all the digits from the number and it is left with nothing which is 0.
*/

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  
    if(num.length <= k) return '0'

    const trimZeroes = function(arr) {
        if(!arr.length) return ['0']

        if(arr[0] !== '0') return arr
    
        let pos = 1
        
        while(pos < arr.length && arr[pos] === '0') {
            pos++
        }
         return pos === arr.length ? ['0'] : arr.slice(pos, arr.length)
    }    

    const  f = function (arr, pos, n) {

        if(n === 0) return arr

        if(pos > arr.length-1) {
            arr.length -= Math.min(n, arr.length)
            return arr
        }

        if(arr[0] === '0') {
           arr.splice(0, 1)
           return f(arr, pos, n)
        }

        if(arr[pos] > arr[pos+1]) {
            arr.splice(pos, 1)    
            return f(arr, Math.max(0, pos-1), n-1)
    }
      return f(arr, pos+1, n)
  }

    const arr =  f(Array.from(num), 0, k)

    return trimZeroes(arr).join('')
};


console.log(removeKdigits("100200", 1))

//console.log(removeKdigits("94399", 2))
1432219

console.log(removeKdigits("1432219", 2))
//console.log(removeKdigits("1219", 2))




