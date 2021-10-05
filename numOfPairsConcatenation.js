/*
#2023. Number of Pairs of Strings With Concatenation Equal to Target

iven an array of digit strings nums and a digit string target, return the number of pairs of indices (i, j) (where i != j) such that the concatenation of nums[i] + nums[j] equals target.

 

Example 1:

Input: nums = ["777","7","77","77"], target = "7777"
Output: 4
Explanation: Valid pairs are:
- (0, 1): "777" + "7"
- (1, 0): "7" + "777"
- (2, 3): "77" + "77"
- (3, 2): "77" + "77"

Example 2:

Input: nums = ["123","4","12","34"], target = "1234"
Output: 2
Explanation: Valid pairs are:
- (0, 1): "123" + "4"
- (2, 3): "12" + "34"

Example 3:

Input: nums = ["1","1","1"], target = "11"
Output: 6
Explanation: Valid pairs are:
- (0, 1): "1" + "1"
- (1, 0): "1" + "1"
- (0, 2): "1" + "1"
- (2, 0): "1" + "1"
- (1, 2): "1" + "1"
- (2, 1): "1" + "1"

 

Constraints:

    2 <= nums.length <= 100
    1 <= nums[i].length <= 100
    2 <= target.length <= 100
    nums[i] and target consist of digits.
    nums[i] and target do not have leading zeros.
*/

/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
 var numOfPairs = function(nums, target) {

    const suffix = (num)  => {

        const diff = target.length - num.length;

        for(let i = num.length - 1; i >= 0; i--) {

            if(num[i] !== target[diff + i]) return -1;
        }

        return num.length;
    };

    const prefix = (num) => {

        for(let i = 0; i < num.length; i++) {
            if(num[i] !== target[i]) return -1;
        }
        return num.length;
    };

    const arr = [];

    for(const num of nums) {

        if(num.length >= target.length) continue;

        const p = prefix(num), s = suffix(num);

        if(p < 0 && s < 0) continue;

        arr.push([prefix(num), suffix(num)]);
    }

    let ans = 0;

    for(let i = 0; i < arr.length - 1; i++) {

        const [p1, s1] = arr[i];

        for (let j = i + 1; j < arr.length; j++) {

            const [p2, s2] = arr[j];

            ans += (p1 + s2 === target.length) ? 1 : 0;
            ans += (p2 + s1 === target.length) ? 1 : 0; 
        }
    }
    return ans;
};