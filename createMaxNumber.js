/*
#321. Create Maximum Number

You are given two integer arrays nums1 and nums2 of lengths m and n respectively. nums1 and nums2 represent 
the digits of two numbers. 

You are also given an integer k.

Create the maximum number of length k <= m + n from digits of the two numbers. 
The relative order of the digits from the same array must be preserved.

Return an array of the k digits representing the answer.

 
Example 1:

Input: nums1 = [3,4,6,5], nums2 = [9,1,2,5,8,3], k = 5
Output: [9,8,6,5,3]
Example 2:

Input: nums1 = [6,7], nums2 = [6,0,4], k = 5
Output: [6,7,6,0,4]
Example 3:

Input: nums1 = [3,9], nums2 = [8,9], k = 3
Output: [9,8,9]
 

Constraints:

m == nums1.length
n == nums2.length
1 <= m, n <= 500
0 <= nums1[i], nums2[i] <= 9
1 <= k <= m + n
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
 var maxNumber = function(nums1, nums2, k) {

    const maxNumbers = (nums) => {

        const stack = [], res = [];

        let i = 0;

        while(i < nums.length) {

            const num = nums[i];

            while(stack.length && stack[stack.length - 1] < num) {

                if(stack.length + nums.length - i <= k) {
                    res.push(stack.concat(nums.slice(i)));
                }

                stack.pop();                
            }

            stack.push(num);
            i++;
        }

        while(stack.length) {
            if(stack.length <= k) res.push([...stack]);
            stack.pop();
        }

        res.push([]);

        return res;
    };

    const compare = (i, arr1, j, arr2) => {

        while(i < arr1.length && j < arr2.length && arr1[i] === arr2[j]) {
            i++;
            j++;
        }

        return j === arr2.length || arr1[i] > arr2[j] ? true : false;
    };

    const merge = (nums1, nums2) => {

        const res = [];

        let i = 0, j = 0;

        while(i < nums1.length && j < nums2.length) {

            if(compare(i, nums1, j, nums2)) {
                res.push(nums1[i++]);
                continue;
            }

           res.push(nums2[j++]);
        }

        return res.concat(nums1.slice(i), nums2.slice(j));
    };

    const numbers1  = maxNumbers(nums1), numbers2 = maxNumbers(nums2);
    
    let maxSeq = [], i = 0, j = numbers2.length - 1;

    while(numbers1[i].length + numbers2[j].length < k) j--;

    while(i < numbers1.length && j >= 0) {

        const seq = merge(numbers1[i++], numbers2[j--]);

        if(compare(0, seq, 0, maxSeq)) {
            maxSeq = seq; 
        }
    }

    return maxSeq;
};
