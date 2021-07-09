/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {

 const seq = [nums[0]];

 const search  = (n) => {

        let i = 0;

        while(i < seq.length && seq[i] < n) i++;

        return i;
    }

    for(let i = 1; i < nums.length; i++) {
        
        if(nums[i] > seq[seq.length - 1]) {
            seq.push(nums[i]);
            continue;
        }
        const idx = search(nums[i]);
        seq[idx] = nums[i];
    }

    return seq.length;
};

let arr = [10,9,2,5,3,7,101,18]

console.log(lengthOfLIS(arr))