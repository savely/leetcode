/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {

    let numZeroes = 0
    let hi = arr.length - 1
    
     for (let i = 0; i < arr.length - numZeroes; i++) {
         if(arr[i] === 0) {
           if(i === arr.length - numZeroes - 1) {
               arr[hi] = 0
               hi--
           } else {
               numZeroes++
           }
         }
     }  

     if(numZeroes === 0) return

     let lo = arr.length - numZeroes - 1

     while (hi > lo && lo >= 0) {
        arr[hi--] = arr[lo] 
        if(arr[lo--] === 0) {
           arr[hi--] = 0 
        }
     }
};

let arr = [1,0,2,3,0,4,5,0]
//arr = [1,2,3]
//arr = [0,1,7,6,0,2,0,7]
arr = [8,4,5,0,0,0,0,7]
//arr = 
//    [9,9,9,4,8,0,0,0,0,3,7,2,0,0,0,0,0,0,0,0,9,1,0,0,0,0,1,1,0,0,5,6,3,1,6,0,0,0,0,2,3,4,7,0,0,3,9,3,6,5,8,9,1,1,3,2,0,0,0,0,7,3,3,0,0,5,7,0,0,8,1,9,6,3,0,0,8,8,8,8,0]
//    [9,9,9,4,8,0,0,0,3,7,2,0,0,0,0,0,0,0,0,9,1,0,0,0,0,1,1,0,0,5,6,3,1,6,0,0,0,0,2,3,4,7,0,0,3,9,3,6,5,8,9,1,1,3,2,0,0,0,0,7,3,3,0,0,5,7,0,0,8,1,9,6,3,0,0,8,8,8,8,0,0]
duplicateZeros(arr)
console.log(arr)