/*
#546. Remove Boxes

You are given several boxes with different colors represented by different positive numbers.

You may experience several rounds to remove boxes until there is no box left. Each time you can choose some continuous boxes with the same color (i.e., composed of k boxes, k >= 1), remove them and get k * k points.

Return the maximum points you can get.

 

Example 1:

Input: boxes = [1,3,2,2,2,3,4,3,1]
Output: 23
Explanation:
[1, 3, 2, 2, 2, 3, 4, 3, 1] 
----> [1, 3, 3, 4, 3, 1] (3*3=9 points) 
----> [1, 3, 3, 3, 1] (1*1=1 points) 
----> [1, 1] (3*3=9 points) 
----> [] (2*2=4 points)
Example 2:

Input: boxes = [1,1,1]
Output: 9
Example 3:

Input: boxes = [1]
Output: 1
 

Constraints:

1 <= boxes.length <= 100
1 <= boxes[i] <= 100

*/

/**
 * @param {number[]} boxes
 * @return {number}
 */
 var removeBoxes = function(boxes) {

    const continuousFrom = (arr, i) => {

        const n = arr[i];
        let count = 0;

        while(i < arr.length && arr[i++] === n) count++;

        return count;
    };

    const key = boxes.join(':');

    let dp = {}, max = 0, maxLen = boxes.length;

    dp[key] = 0;

    while(maxLen > 1) {

        const nextDp = {};

        let len = 0;

        for(const key in dp) {

             const score = dp[key], arr = key.length ? key.split(':').map(n => +n) : [];

             let i = 0;

             while(i < arr.length) {

                const count = continuousFrom(arr, i);

                const newKey = [...arr], newScore = score + count * count;
                newKey.splice(i, count);
                len = Math.max(len, newKey.length);
                const k = newKey.join(':');
                nextDp[k] = Math.max((nextDp[k] || 0), newScore);
                i += count;
            }             
        }

        dp = nextDp;

        maxLen = Math.min(maxLen, len);
        max = Math.max(max, (dp[""] || 0));
    }

    console.dir(dp);

   return max;
};

let boxes = [1,3,2,2,2,3,4,3,1];

//boxes = [1,1,1];

boxes = [1,3,2,5,6,5,2,2,5,5,7,7,6,5,5,3,4,3,1,7];
boxes = [1,3,2,5,6,5,2,2,5,5,7,7,6,5,5,3,4,3];

boxes = [1,3,2,5,6,5,2,2,5,5,7,7,6,5,5,3,4,3,1,7,3,2,3,3,3,1,1,1,5,7,2,3];

console.log(removeBoxes(boxes));