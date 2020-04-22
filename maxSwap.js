/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
   const arr = Array.from((num).toString()).map(s => parseInt(s))
   const sorted = Array.from(arr).sort((a,b) => a-b)

   for(i = 0; i < arr.length; i++) {
       const el = sorted[sorted.length-1] 
       if(el > arr[i]) {
           const j = arr.lastIndexOf(el)
           const t = arr[i]
           arr[i] = arr[j]
           arr[j] = t
           break
       } 

       if(el === arr[i]) {
           sorted.pop()
       }
   }

   return parseInt(arr.join(''))
};

console.log(maximumSwap(98368))