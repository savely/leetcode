/*
#1346. Check If N and Its Double Exist

Given an array arr of integers, check if there exist two indices i and j such that :

    i != j
    0 <= i, j < arr.length
    arr[i] == 2 * arr[j]

 

Example 1:

Input: arr = [10,2,5,3]
Output: true
Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]

Example 2:

Input: arr = [3,1,7,11]
Output: false
Explanation: There is no i and j that satisfy the conditions.

 

Constraints:

    2 <= arr.length <= 500
    -103 <= arr[i] <= 103

*/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    
    arr.sort((a,b) => a - b);

    const search = (val, lo, hi = arr.length - 1) => {

        while(hi >= lo) {

            let mid = (lo + hi) / 2 >> 0;

            if(arr[mid] >= val) {
                hi = mid - 1;
            } else {
                lo = mid + 1;
            }
        }

        return lo;
    };

    for(let i = 0; i < arr.length - 1; i++) {

        const val = arr[i] > 0 ? arr[i] * 2 : arr[i] / 2, idx = search(val, i + 1);

        if(arr[idx] === val) return true;
    }

    return false;
};

let arr = [7,1,14,11];
//arr = [-10,12,-20,-8,15];

console.log(checkIfExist(arr));