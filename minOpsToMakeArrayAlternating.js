/*
#2170. Minimum Operations to Make the Array Alternating

You are given a 0-indexed array nums consisting of n positive integers.

The array nums is called alternating if:

nums[i - 2] == nums[i], where 2 <= i <= n - 1.
nums[i - 1] != nums[i], where 1 <= i <= n - 1.
In one operation, you can choose an index i and change nums[i] into any positive integer.

Return the minimum number of operations required to make the array alternating.

 

Example 1:

Input: nums = [3,1,3,2,4,3]
Output: 3
Explanation:
One way to make the array alternating is by converting it to [3,1,3,1,3,1].
The number of operations required in this case is 3.
It can be proven that it is not possible to make the array alternating in less than 3 operations. 
Example 2:

Input: nums = [1,2,2,2,2]
Output: 2
Explanation:
One way to make the array alternating is by converting it to [1,2,1,2,1].
The number of operations required in this case is 2.
Note that the array cannot be converted to [2,2,2,2,2] because in this case nums[0] == nums[1] which violates the conditions of an alternating array.
 

Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 105

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var minimumOperations = function(nums) {

    if(nums.length < 3) return nums[0] === nums[1] ? 1 : 0;

    const oddFreq = {}, evenFreq = {};

    let totalOdd = 0, totalEven = 0;

    for(let i = 0; i < nums.length; i++) {

        const num = nums[i];
        if(i % 2) {
            oddFreq[num] = (oddFreq[num] || 0) + 1;
            totalOdd++;
        } else {
            evenFreq[num] = (evenFreq[num] || 0) + 1;
            totalEven++;
        }
    }

    const  twoMostFreq = (freq) => {
        let fst = 0, fstCount = 0, snd = 0, sndCount = 0; 

        for(const num in freq) {
    
            if(freq[num] > fstCount) {
                snd = fst;
                sndCount = fstCount;
                fst = +num;
                fstCount = freq[num];
            } else if(freq[num] > sndCount) {
                snd = +num;
                sndCount = freq[num];
            }
        }
        return [fst, snd];
    };

    const [fstOdd, sndOdd] = twoMostFreq(oddFreq), [fstEven, sndEven] = twoMostFreq(evenFreq);

    const odd = totalOdd - oddFreq[fstOdd] + totalEven - ((evenFreq[ (fstOdd === fstEven) ? sndEven : fstEven ]) || 0);
    const even = totalEven - evenFreq[fstEven] + totalOdd - (oddFreq[ (fstEven === fstOdd) ? sndOdd : fstOdd ] || 0);

    return Math.min(odd, even);
};
