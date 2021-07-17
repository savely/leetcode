/*
#927. Three Equal Parts

You are given an array arr which consists of only zeros and ones, divide the array into three non-empty parts such that all of these parts represent the same binary value.

If it is possible, return any [i, j] with i + 1 < j, such that:

arr[0], arr[1], ..., arr[i] is the first part,
arr[i + 1], arr[i + 2], ..., arr[j - 1] is the second part, and
arr[j], arr[j + 1], ..., arr[arr.length - 1] is the third part.
All three parts have equal binary values.
If it is not possible, return [-1, -1].

Note that the entire part is used when considering what binary value it represents. For example, [1,1,0] represents 6 in decimal, not 3. Also, leading zeros are allowed, so [0,1,1] and [1,1] represent the same value.

 

Example 1:

Input: arr = [1,0,1,0,1]
Output: [0,3]
Example 2:

Input: arr = [1,1,0,1,1]
Output: [-1,-1]
Example 3:

Input: arr = [1,1,0,0,1]
Output: [0,2]
 

Constraints:

3 <= arr.length <= 3 * 104
arr[i] is 0 or 1
*/

/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var threeEqualParts = function(arr) {

 
    let ones = 0, i = 0, start = 0;

    while(i < arr.length) {

        ones += arr[i++];

        if(ones === 0) start++;
    }

    if(ones === 0) return [0,1];

    if(ones % 3 !== 0) return [-1,-1];

    let target = ones / 3, end = start;

    while(true) {
        target -= arr[end];

        if(target === 0) break;

        end++;
    }

    i = end + 1, j = start;

    let start2 = -1;

    while (i < arr.length) {
        if(start2 < 0 && arr[i] === 0 ) {
            i++;
            continue;
        }
        if(start2 < 0) start2 = i;

        if(arr.length - start2 < end - start) return [-1,-1];

        if(arr[i] !== arr[j]) return [-1,-1];

        if(i - start2 == end - start) break;

        i++;
        j++;
    }

    let end2 = i;
    i = end2 + 1;
    j = start;

    let start3 = -1;

    while (i < arr.length) {
        if(start3 < 0 && arr[i] === 0 ) {
            i++;
            continue;
        }
        if(start3 < 0) start3 = i;

        if(arr.length - start3 < end - start) return [-1,-1];

        if(arr[i] !== arr[j]) return [-1,-1];

        if(i - start3 == end - start ) break;

       i++;
       j++;
    } 

    let end3 = i;

    while(end3 < arr.length - 1) {

        end++;
        end2++;
        end3++;
        
        if(arr[end3] !== 0 || arr[end2] !== 0 || arr[end] !== 0 ) return [-1, -1];
    } 
    
    return [end, end2 + 1];
};

let arr = [1,0,1,0,1];
//arr = [1,1,0,1,1];
arr = [1,1,0,0,1];
//arr = [1,0,1,1,0];
//arr = [1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0];

console.log(threeEqualParts(arr));