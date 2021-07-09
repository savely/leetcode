/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {

 const seq = [nums[0]];

 const search  = (n) => {

       if(seq.length === 1) return 0;

        let lo = 0, hi = seq.length -1;

        while(hi > lo)  {

            const mid = (hi + lo) / 2 >> 0, el = seq[mid];

            if(el >= n) {
                if(seq[mid - 1] < n) return mid;
                hi = mid - 1;
            } else {
                if(seq[mid + 1] >= n) return mid + 1;
                lo = mid + 1;
            }
        }

        return lo;
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

let arr = [10,9,2,5,3,7,101,18];
arr = [0,1,0,3,2,3];
arr = [4,10,4,3,8,9];
arr = [3,5,6,2,5,4,19,5,6,7,12]; //6

console.log(lengthOfLIS(arr))