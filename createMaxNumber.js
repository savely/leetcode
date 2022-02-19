/*
#321. Create Maximum Number

You are given two integer arrays nums1 and nums2 of lengths m and n respectively. nums1 and nums2 represent the digits of two numbers. 
You are also given an integer k.

Create the maximum number of length k <= m + n from digits of the two numbers. The relative order of the digits from the same array must be preserved.

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

let nums1 = [3,4,6,5], nums2 = [9,1,2,5,8,3], k = 5;
nums1 = [3,9], nums2 = [8,9], k = 3;
nums1 = [6,7], nums2 = [6,0,4], k = 5;
//nums1 = [3,4,6,5,3,2,5,7,9,2,1,4,7,7,2,3,4,5,6,2,3,4,6,7,8,2,3,1,4,5,3,2,1,6,8,7,4,3,2,2,1,3,4,3,1,3,3,4,5,2,4,4,3,4,3,4,3,1,7,8,6,4,2,3,4,5,6,3,4,3,1,3,9,7,4,4,4];
//nums2 = [4,6,7,6,5,9,9,9,1,2,5,8,3,4,8,8,5,6,3,4,1,6,8,9,7,6,4,4,3,4,5,4,9,3,1,3,5,6,7,4,5,2];
//k = 109; //[9,9,9,8,8,8,5,6,3,4,6,5,3,4,3,2,5,7,9,2,1,6,8,9,7,6,4,4,3,4,5,4,9,3,1,4,7,7,2,3,4,5,6,2,3,4,6,7,8,2,3,1,4,5,3,2,1,6,8,7,4,3,2,2,1,3,5,6,7,4,5,2,1,3,4,3,1,3,3,4,5,2,4,4,3,4,3,4,3,1,7,8,6,4,2,3,4,5,6,3,4,3,1,3,9,7,4,4,4];

//nums1 = [2,5,6,4,4,0], nums2 =[7,3,8,0,6,5,7,6,2], k = 15; //[7,3,8,2,5,6,4,4,0,6,5,7,6,2,0]
//nums1 = [6,7], nums2 = [6,0,4], k = 1; //[6,7,6,0,4]

nums1 = [8,5,9,5,1,6,9], nums2 = [2,6,4,3,8,4,1,0,7,2,9,2,8], k = 20;// [8,5,9,5,2,6,4,3,8,4,1,6,9,1,0,7,2,9,2,8];

console.table(maxNumber(nums1, nums2, k));