/*
#1013. Partition Array Into Three Parts With Equal Sum

Given an array of integers arr, return true if we can partition the array into three non-empty parts with equal sums.

Formally, we can partition the array if we can find indexes i + 1 < j with (arr[0] + arr[1] + ... + arr[i] == arr[i + 1] + arr[i + 2] + ... + arr[j - 1] == arr[j] + arr[j + 1] + ... + arr[arr.length - 1])

 

Example 1:

Input: arr = [0,2,1,-6,6,-7,9,1,2,0,1]
Output: true
Explanation: 0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1

Example 2:

Input: arr = [0,2,1,-6,6,7,9,-1,2,0,1]
Output: false

Example 3:

Input: arr = [3,3,6,5,-2,2,5,1,-9,4]
Output: true
Explanation: 3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4

 

Constraints:

    3 <= arr.length <= 5 * 104
    -104 <= arr[i] <= 104

*/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var canThreePartsEqualSum = function(arr) {
    
    const total = arr.reduce((acc, n) => acc + n);
    
    if(total > 0 && total % 3) return false;
    
    const target = total / 3;
    
    let i = 0, firstSum = 0;
    
    while(i < arr.length -2) {
        
        firstSum += arr[i++];
        
        if(firstSum !== target) continue;
        
        let j = i, secondSum = 0;
        
        while(j < arr.length - 1) {
            
            secondSum += arr[j++];
            
            if(secondSum === target) return true;
        }
        
    }
    
    return false;
};