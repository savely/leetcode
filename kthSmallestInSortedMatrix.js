/*
#378. Kth Smallest Element in a Sorted Matrix


Given an n x n matrix where each of the rows and columns are sorted in ascending order, return the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, not the kth distinct element.

 

Example 1:

Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
Output: 13
Explanation: The elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13
Example 2:

Input: matrix = [[-5]], k = 1
Output: -5
 

Constraints:

n == matrix.length
n == matrix[i].length
1 <= n <= 300
-109 <= matrix[i][j] <= 109
All the rows and columns of matrix are guaranteed to be sorted in non-decreasing order.
1 <= k <= n2
*/
/*

let temp = fist row

- take next row
- find position of smallest element of second row in temp;
- if   k < pos return temp[k];
- tmp  = tmp.slice(pos);
- k - pos;
- merge row and temp;
- increase row;
- repeat;


/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(matrix, k) {
    

};

let  matrix = [[1,5,9],
               [10,11,13],
               [12,13,15]];
let k = 8;