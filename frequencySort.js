/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const freq =  Array.from(s).reduce((acc, ch) => {
     if(acc[ch] === undefined) {
         acc[ch] = 0
     }
      acc[ch]++
      return acc
    }, {})
    
  return Object.keys(freq)
         .map(ch => [ch, freq[ch]])
         .sort((a,b) => b[1] - a[1])
         .reduce((acc, arr) => {
             acc += arr[0].repeat(arr[1])
             return acc
          }, "")
    
};

console.log(frequencySort('tree'))