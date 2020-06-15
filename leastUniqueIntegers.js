/*
#1481
Given an array of integers arr and an integer k. Find the least number of unique integers after removing exactly k elements.
 */

 /**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    
    const freq =  arr.reduce((acc, n) => {
      if(acc[n] === undefined) {
          acc[n] = 0
      }
       acc[n]++
       return acc
     }, {})
    
    const freqArr = Object.keys(freq).sort((a,b) => freq[a] - freq[b])
    let num = freqArr.length
 
    for (let n of freqArr) {
        const count = freq[n]
        if(k - count < 0) return num
        k -=count
        num--
    }
     
     return num
 };