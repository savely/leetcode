/*
#1901. Find a Peak Element II

A peak element in a 2D grid is an element that is strictly greater than all of its adjacent neighbors to the left, right, top, and bottom.

Given a 0-indexed m x n matrix mat where no two adjacent cells are equal, find any peak element mat[i][j] and return the length 2 array [i,j].

You may assume that the entire matrix is surrounded by an outer perimeter with the value -1 in each cell.

You must write an algorithm that runs in O(m log(n)) or O(n log(m)) time.

 

Example 1:



Input: mat = [[1,4],[3,2]]
Output: [0,1]
Explanation: Both 3 and 4 are peak elements so [1,0] and [0,1] are both acceptable answers.
Example 2:



Input: mat = [[10,20,15],[21,30,14],[7,16,32]]
Output: [1,1]
Explanation: Both 30 and 32 are peak elements so [1,1] and [2,2] are both acceptable answers.

*/

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
 var findPeakGrid = function(mat) {
    
    
    const findPeakIdxCol = (row, to) => {
        
        if(to > mat[0].length - 1) return -1;
        
        let lo = 0, hi = to;
        
        while(hi > lo) {
            
            const mid = (hi + lo) / 2 >> 0;
            
            if(mat[row][mid] > mat[row][mid + 1]) {
                hi = mid;
            } else {
               lo = mid + 1; 
            }
        }
        return (lo === mat[0].length - 1 || mat[row][lo] > mat[row][lo + 1])  && (lo === 0 || mat[row][lo] > mat[row][lo - 1]) ? lo : -1;
    }
        
     for(let i = 0; i < mat.length; i++) {
         
         let j = findPeakIdxCol(i, mat[0].length -1);
         
         while(j > -1) {

            const left =  ( i > 0) ? mat[i - 1][j] : -1, right = (i < mat.length - 1) ? mat[i + 1][j] : -1;
         
             if(mat[i][j] > left && mat[i][j] > right) return [i,j];
             
             j = findPeakIdxCol(i,  mat[0].length - j - 2);
         }
     }   
    
    return [-1,-1];
};