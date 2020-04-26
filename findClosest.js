/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {

    if(x <= arr[0]) return arr.slice(0,k)

    if(x >= arr[arr.length-1]) return arr.slice(-k)

    const findElIdx = function () {
        let left = 0
        let right = arr.length - 1

        while(right > left) {

            if(right == left) return left

            if(right - left === 1) {
                return Math.abs(x-arr[left]) <= Math.abs(arr[right]-x) ? left : right
            }

            let mid = Math.trunc((left+right)/2)

            if(arr[mid] === x) return mid

            if(arr[mid] < x) {
                left = mid
                continue
            }
            right = mid
        }
    }

    const  idx = findElIdx()
    let lo = idx
    let hi = idx

    while(hi-lo < k -1) {

      if(hi === arr.length-1) {
        return arr.slice(-k)
      }
      if(lo === 0) {
        return arr.slice(0,k)        
      } 
      
      if(Math.abs(x-arr[lo-1]) <= Math.abs(arr[hi+1]-x)) {
          lo--
      } else {
          hi++
      }
 
    }

    return arr.slice(lo, hi+1)
};

console.log(findClosestElements([3,5,6,7],3,5))