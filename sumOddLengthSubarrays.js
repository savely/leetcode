/**
 * @param {number[]} arr
 * @return {number}
 */
 var sumOddLengthSubarrays = function(arr) {
    
    let sum = arr.reduce((acc, num) => acc + num);
    
    for(let n = 3; n <= arr.length; n+= 2) {
        
        let windowSum = arr.slice(0,n).reduce((acc, num) => acc + num)
        sum += windowSum
        
        for(let i = 1; i < arr.length - n + 1; i++) {
            windowSum += arr[n + i -1] - arr[i -1]
            sum += windowSum
           
        }
    }
    
    return sum
};

let arr = [1,4,2,5,3]

console.log(sumOddLengthSubarrays(arr))