

function findLongestSubarrayBySum(s, arr) {
     
    let start = 0, end = 0, max = -1
    const sums = new Array(arr.length+1).fill(0)

   for(let i = 1; i < arr.length; i++) {
       sums[i] = arr[i-1] + sums[i-1]
       if(sums[i] === s && i > max) {
           max = i
           end = i + 1
       }
   }
   
   for(let i = 0; i < arr.length; i++) {
       
       for(let i = 0; i < arr.length; i++) {
           for(let j = i+1; j <= arr.length; j++) {
               if(sums[j] - sums[i] === s && j - i > max) {
                   max = j - i
                   start = i
                   end = j
               }
           }
       }

   }
   
   return max === -1 ? [-1] : [start+1, end]
}

let arr = [1,2,3,7,5]
arr = [0, 12, 0]
console.log(findLongestSubarrayBySum(12,arr))
