/*
#5818. Longest Common Subsequence Between Sorted Arrays

iven an array of integer arrays arrays where each arrays[i] is sorted in strictly increasing order, return an integer array representing the longest common subsequence between all the arrays.

A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

 

Example 1:

Input: arrays = [[1,3,4],
               [1,4,7,9]]
Output: [1,4]
Explanation: The longest subsequence which in the two arrays is [1,4].

Example 2:

Input: arrays = [[2,3,6,8],
               [1,2,3,5,6,7,10],
               [2,3,4,6,9]]
Output: [2,3,6]
Explanation: The longest subsequence which in all of the three arrays is [2,3,6].

Example 3:

Input: arrays = [[1,2,3,4,5],
               [6,7,8]]
Output: []
Explanation: There is no common subsequence between the two arrays.

 

Constraints:

    2 <= arrays.length <= 100
    1 <= arrays[i].length <= 100
    1 <= arrays[i][j] <= 100
    arrays[i] is sorted in strictly increasing order.

*/

var longestCommomSubsequence = function(arrays) {
    
    let el = arrays[0][0], last = arrays.length -1;
    
    const lcs = [];

    while(true) {
    
        for(let i = 0; i < arrays.length; i++) {
            
            const arr = arrays[i];
            
            if(!arr.length) return lcs;
            
            let currEl = -1 ,skip = false;
            
            while(arr.length && arr[0] <= el) {
                currEl = arr.shift();
                if(currEl === el) {

                    if(i === last) {
                        lcs.push(el);
                    } else {
                        skip = true;
                        break;
                    }
                
                }
            }

            if(skip) continue;
            
            if(!arr.length) return lcs;
            
            el = arr.shift();
            last = i > 0 ? i -1 : arrays.length -1;
        }
     
    }

     return lcs;
};