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

let nums = [3,1,3,2,4,3];
nums = [1,2,2,2,2,2];
nums = [3,1,3,4,4,1,1,1,1,1,3,1,1,4,4,4,4,4,2,4,3];//12
//nums = [1,1,1,2,2,2,3];
//nums = [3,1,3,4,4,1,1,3,1,1,3,1,1,1,4,4,4,4,4,2,4,3,3]//13
nums =[3,1,3,4,4,1,1,3,1,1,3,1,1,1,1,1,1,1,1,4,4,4,4,4,2,4,3,3]//17
nums = [69,91,47,74,75,94,22,100,43,50,82,47,40,51,90,27,98,85,47,14,55,82,52,9,65,90,86,45,52,52,95,40,85,3,46,77,16,59,32,22,41,87,89,78,59,78,34,26,71,9,82,68,80,74,100,6,10,53,84,80,7,87,3,82,26,26,14,37,26,58,96,73,41,2,79,43,56,74,30,71,6,100,72,93,83,40,28,79,24];//84
nums = [25,98,80,54,21,92,61,80,90,81,42,6,4,70,77,25,83,56,40,98,70,41,100,52,46,29,40,57,75,49,82,49,19,80,36,98,96,31,50,91,11,59,89,1,44,11,36,63,68,77,50,18,5,65,75,49,26,82,57,15,86,32,39,7,63,92,28,46,69,43,36,75,14,88,87,20,65,99,76,86,83,6,83,72,64,38,3,20,19]//83 
nums = [3,1,3,4,4,1,1,1,3,1,1,4,4,4,2,4,3]; //9


console.log(minimumOperations(nums));
