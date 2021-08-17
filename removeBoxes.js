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

    const l = boxes.length;

    let dp = new Array(l).fill(0).map(_ => new Array(l).fill(0).map(_1 => new Array(l).fill(0)));

    const f = (i, j, k) => {

        if(i > j) return 0;

        if(dp[i][j][k] > 0) return dp[i][j][k];

        const origI = i, origK = k;

        while((i + 1) < j && boxes[i] === boxes[i + 1]) {
            i++;
            k++;
        }

        let res = (k + 1) * (k + 1) + f(i + 1, j, 0);

        for(let l = i + 1; l <= j; l++) {

            if(boxes[i] === boxes[l]) {
                res = Math.max(res, f(i + 1, l - 1, 0) + f(l, j, k + 1));
            }
        }

        dp[origI][j][origK] = res;

        return res;
    }

    const res = f(0, l - 1, 0);

    return res;
};

let boxes = [1,3,2,2,2,3,4,3,1];

//boxes = [1,1,1];
//boxes = [1,3,4,3,1];


//boxes = [1,3,2,5,6,5,2,2,5,5,7,7,6,5,5,3,4,3,1,7];
//boxes = [1,3,2,5,6,5,2,2,5,5,7,7,6,5,5,3,4,3];

boxes = [1,3,2,5,6,5,2,2,5,5,7,7,6,5,5,3,4,3,1,7,3,2,3,3,3,1,1,1,5,7,2,3];


console.log(removeBoxes(boxes));