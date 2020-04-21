/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    
    const keyb = [' ','','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']

    const perm = function(arr, i) {
        const chars = Array.from(keyb[i])

        if(arr.length === 0) return chars

        return chars.map(char => arr.map(a => a + char)).reduce((acc, a) => acc.concat(a),[])
    }
    return Array.from(digits).map(c => parseInt(c)).reduce((acc, n) => {
         return perm(acc, n)
    }, [])
};


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {

    if(nums.length < 2) return nums

     let red = 0, white = 1, blue = 2
     let lo = 0, mid = 0,  hi = nums.length - 1
     
     const swap = function(i,j) {
       const tmp = nums[i]
       nums[i] = nums[j]
       nums[j] = tmp
     }

     while(mid <= hi) {
         if(nums[mid] === red) {
            swap(lo,mid)
             lo++
             mid++
             continue
         }
         
         if(nums[mid] === white) {
           mid++
           continue  
         }

        swap(mid, hi) 
        hi--  
     }

};

const toColors = c => c == 0 ? 'r' :(c == 1 ? 'w' : 'b')
const xs = [2,0,2,1,1,0,0,1,2]
console.log(xs.map(toColors))
console.log('------------------------------')
sortColors(xs)
console.log(xs.map(toColors))

