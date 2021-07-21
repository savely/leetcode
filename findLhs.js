/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    
    let max = 0
    
  const freq = nums.reduce((acc, n) => {
      if(!acc[n]) {
          acc[n] = 0
      }
      acc[n]++
      return acc
  }, {})
  
  const keys = Object.keys(freq)
  
  for(let i = 0; i < keys.length ; i++) {
      const key = keys[i], next = parseInt(key) + 1, nextKey = next.toString()

      
      if(!freq[nextKey]) continue
      
      max = Math.max(max, freq[key] + freq[nextKey])
  }
    
    return max
};

let arr = [1,3,2,2,5,2,3,7]

console.log(findLHS(arr))