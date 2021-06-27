/*
#949. Largest Time for Given Digits

Given an array of 4 digits, return the largest 24 hour time that can be made.

The smallest 24 hour time is 00:00, and the largest is 23:59.  Starting from 00:00, a time is larger if more time has elapsed since midnight.

Return the answer as a string of length 5.  If no valid time can be made, return an empty string.
*/

/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function(A) {
    
    let maxSeconds = -1, len = A.length - 1, perms = []

    const toSeconds = function(arr) {

       const hours = arr[0] * 10 + arr[1]
       const mins  = arr[2] * 10 + arr[3]

       if(hours > 23 || mins > 59) return -1

       return hours * 3600 + mins * 60

    }
    
    const swap = function(i,j) {

        if(i === j) return

        const t = A[i]
        A[i] = A[j]
        A[j] = t
    }
    
    const perm = function(n) {
        
        if(n === len+1) {
         perms.push(Array.from(A))
           maxSeconds = Math.max(maxSeconds, toSeconds(A))
        }
        
        for(let i = n; i <= len; i++){
            swap(n,i)
            perm(i+1)
            swap(i,n)
        }
    }
    
    perm(0)

    return perms

    if(maxSeconds < 0) return ''

    const date = new Date(0)
    date.setSeconds(maxSeconds)
    return date.toISOString().substr(11, 5)
};

console.log(largestTimeFromDigits([1,2,3,4]))



