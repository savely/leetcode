/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  
    if(x < 2) return x

    let left = 1
    let right = x

    while(right > left) {

        let mid = Math.floor((right+left)/2)

        if(mid * mid === x) return mid

        if(mid * mid > x ) {
            right = mid
            continue
        }

        left = mid + 1
    }

    return left - 1
};

var twoSum = function(numbers, target) {
    
    let left = 0
    let right = numbers.length-1
    
    while(right > left) {
       
        if(right- left < 2)  return [left+1,right+1]
        
        let sum = numbers[left] + numbers[right]
        
        if(sum === target) return [left+1, right+1]
        
        if(sum <target) {
            left++
        } else {
            right--
        }
    }
};


console.log(twoSum([2,7,11,13,15],  22))