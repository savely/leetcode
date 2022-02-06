/*
#2165. Smallest Value of the Rearranged Number
You are given an integer num. Rearrange the digits of num such that its value is minimized and it does not contain any leading zeros.

Return the rearranged number with minimal value.

Note that the sign of the number does not change after rearranging the digits.

 

Example 1:

Input: num = 310
Output: 103
Explanation: The possible arrangements for the digits of 310 are 013, 031, 103, 130, 301, 310. 
The arrangement with the smallest value that does not contain any leading zeros is 103.
Example 2:

Input: num = -7605
Output: -7650
Explanation: Some possible arrangements for the digits of -7605 are -7650, -6705, -5076, -0567.
The arrangement with the smallest value that does not contain any leading zeros is -7650.
 

Constraints:

-1015 <= num <= 1015

*/

/**
 * @param {number} num
 * @return {number}
 */
 var smallestNumber = function(num) {

    if(Math.abs(num) < 10) return num;
    
    const arr = [... ''+ Math.abs(num)], pos = num > 0;

    let fst = pos ? Infinity : 0, idx = -1;


    for(let i = 0; i < arr.length; i++) {

        arr[i] = +arr[i];

        if(arr[i] === 0) continue;

        if((pos && arr[i] < fst) || (!pos && arr[i] > fst)) {
            fst = arr[i];
            idx = i;
        }
    }

    arr[idx] = pos ? Infinity : -Infinity;
    
    arr.sort((a, b) =>  pos? a - b : b - a);

    let smallest = fst;

    for(let i = 0; i < arr.length - 1; i++) {
        smallest = smallest * 10 + arr[i];
    }

    return smallest * (pos ? 1 : -1);
};
