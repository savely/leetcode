var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
       
      if(n === 1) return n

      let left = 1
      
      let right = n
      
      while(right > left) {
          
        let mid = Math.floor((right+left)/2)  
        let isBad = isBadVersion(mid)
        let isBadPrev = isBadVersion(mid-1)
         
        if(isBad && !isBadPrev) return mid

        if(isBadPrev) {
          right = mid - 1
        } else {
          left = mid + 1
        }

      }

      if(left === right) return left
     }
    }
    

    var findPeakElement = function(nums) {
    
        let left = 0
        let right = nums.length - 1 

         while(right > left) {
            let mid = Math.floor((right+left)/2)  

            if(nums[mid] > nums[mid+1]) {
                right = mid
            } else {
                left = mid+1
            }

         }

         return left
    };

    var peakIndexInMountainArray = function(A) {
        let left = 0
        let right = A.length - 1 

        if(A.length === 3) return 1

        while(right > left) {
            let mid = Math.floor((right+left)/2) 

            if(A[mid-1] < A[mid] && A[mid] > A[mid+1]) return mid

            if(A[mid-1] < A[mid]) {
             left = mid+1 
            } else {
              right = mid
            }

        }
        return left
    };

    /**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
    
    const arr = mountainArr
    const len = arr.length() - 1 

    const peakIdx = function() {

        let left = 0
        let right = len

        if(right === 2) return 1

        while(right > left) {
            let mid = Math.floor((right+left)/2)
            
            let el   = arr.get(mid)
            let prev = arr.get(mid-1)
            let next = arr.get(mid+1)

            if(prev < el && el > next) return mid

            if(prev < el) {
             left = mid+1 
            } else {
              right = mid
            }

        }
        return left
    };

    const search = function(start, end, f) {

          if(end < start) return -1

          if(end - start < 2) {
            return arr.get(end) === target ? end : (arr.get(start) === target ? start : -1)
          }

          let mid = Math.floor((start+end)/2)

          if(arr.get(mid) === target) return mid
 
          if(f(arr.get(mid), target) > 0)   return search(start, mid, f)
        
          return search(mid, end, f)
    }

    const idx = peakIdx()
    const peak = arr.get(idx)

    if(peak < target) return -1
    if(peak === target) return idx

    const leftIdx  = search(0, idx-1, (a,b) => a-b)
    const rightIdx = search(idx+1, len, (a,b) => b-a)

    if(leftIdx < 0) return rightIdx

    if(rightIdx < 0) return leftIdx

    return Math.min(rightIdx, leftIdx)
};

    //const f = solution(x => x >= 1)

    const M = function(arr) {

        this.arr = arr
    }

    M.prototype.length = function() {
        return this.arr.length
    }

    M.prototype.get = function(idx) {
        return this.arr[idx]
    }
    //console.log(findInMountainArray(4, new M([1,2,3,4,5,3,1])))

    //console.log(peakIndexInMountainArray([1,2,3,4,5,3,1]))
    console.log(findInMountainArray(5, new M([3,5,3,2,0])))