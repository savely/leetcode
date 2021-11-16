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
    

    const h = matrix.length - 1, w = matrix[0].length - 1;

    const countLessOrEqual = (n) => {

        let row = 0, col = w, count = 0;

        while(row <= h) {

            while(matrix[row][col] > n) col--;

            if(col < 0) break;

            count += col + 1;
            row++;
        }
        return count;
    };

    let lo = matrix[0][0], hi = matrix[h][w];

    while(hi >= lo) {

        const mid = (hi + lo) / 2 >> 0;

        if(countLessOrEqual(mid) >= k) {
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }

    return lo;
}

matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8;

matrix = [[-5]], k = 1;

console.log(kthSmallest(matrix, k));