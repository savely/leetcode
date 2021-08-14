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

    const boxesCount = [];

    let color = boxes[0], count = 1;

    for(let i = 1; i < boxes.length; i++) {

        if(boxes[i - 1] === boxes[i]) {
            count++;
            continue;
        }

        boxesCount.push([color, count]);

        color = boxes[i];
        count = 1;
    }

    boxesCount.push([color, count]);

    const countContiguous = (from, visited) => {

        let newVis = visited.slice(0, from);

        const [color, count] = boxesCount[from];

        newVis += "1";

        let newCount = count;

        for(let i = from + 1; i < boxesCount.length; i++) {

            const [col, cnt] = boxesCount[i];

            if(visited[i] === '1')  {
                newVis  += '1';                
                continue;
            }

            if(col !== color) break;

            newCount += cnt;
            newVis  += '1';
        }

        return [newCount * newCount, newVis + visited.slice(newVis.length)];
    }


    const key = "0".repeat(boxesCount.length), ansKey = '1'.repeat(boxesCount.length);
    
    let dp = {};

    dp[key] = 0;

    let max = 0;

    while(true) {

        const newDp = {};

        for(const vis in dp) {

            if(vis === ansKey) continue;

            const score = dp[vis];

            for(let i = 0; i < vis.length; i++) {

                if(vis[i] === '1') continue;

                [newScore, newVisited] = countContiguous(i, vis);

                newDp[newVisited] = Math.max((newDp[newVisited] || 0), score + newScore);
            }

        }

        dp = newDp;

        console.log(Object.keys(dp).length);

        max = Math.max(max, (dp[ansKey] || 0));

        if(Object.keys(dp).length === 1) break;
    }



    //console.table(boxesCount);

    return max;
};

//let boxes = [1,3,2,2,2,3,4,3,1];

boxes = [1,1,1];
boxes = [1,3,4,3,1];


boxes = [1,3,2,5,6,5,2,2,5,5,7,7,6,5,5,3,4,3,1,7];
//boxes = [1,3,2,5,6,5,2,2,5,5,7,7,6,5,5,3,4,3];

boxes = [1,3,2,5,6,5,2,2,5,5,7,7,6,5,5,3,4,3,1,7,3,2,3,3,3,1,1,1,5,7,2,3];


console.log(removeBoxes(boxes));