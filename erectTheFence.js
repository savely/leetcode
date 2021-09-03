/*
#587. Erect the Fence

You are given an array trees where trees[i] = [xi, yi] represents the location of a tree in the garden.

You are asked to fence the entire garden using the minimum length of rope as it is expensive. 
The garden is well fenced only if all the trees are enclosed.

Return the coordinates of trees that are exactly located on the fence perimeter.

 

Example 1:


Input: points = [[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]]
Output: [[1,1],[2,0],[3,3],[2,4],[4,2]]
Example 2:


Input: points = [[1,2],[2,2],[4,2]]
Output: [[4,2],[2,2],[1,2]]
 

Constraints:

1 <= points.length <= 3000
points[i].length == 2
0 <= xi, yi <= 100
All the given points are unique.
*/

/**
 * @param {number[][]} trees
 * @return {number[][]}
 */
 var outerTrees = function(trees) {
     
    if(trees.length < 3) return trees;

    const ccw = ([x1, y1], [x2, y2], [x3, y3]) =>  {
        const area = (x2 - x1) * (y3 - y1) - (y2 - y1) * (x3 - x1);

        if(area === 0) return 0;

        return area >  0 ? 1 : -1;
    };

    let refPoint = trees[0];

    for(const [x, y] of trees) {

        if((y === refPoint[1] && x < refPoint[0]) || y < refPoint[1]) {

            refPoint = [x, y];
        }
    }

    trees.sort((a, b) => {

        if(a[0] === refPoint[0] && a[1] === refPoint[1]) return -1;

        if(b[0] === refPoint[0] && b[1] === refPoint[1]) return 1;

        const pos = ccw(refPoint, a, b);

        if(pos !== 0) return pos * -1;

        if(a[0] === b[0]) return (a[1] > b[1] ? 1 : -1);

        return a[0] > b[0] ? 1 : -1;
    });

    const stack = [trees[0], trees[1]];

    for(let i = 2; i < trees.length; i++) {

        let pos = ccw(refPoint, stack[stack.length -1], trees[i]);

           while (stack.length > 2 && (pos < 0 || (pos === 0 && stack[stack.length -1][1]  < trees[i][1])) ) {
                stack.pop();
                pos = ccw(stack[stack.length - 2], stack[stack.length -1], trees[i]);            
           }

           stack.push(trees[i]);
    }

    return stack;    
};

let points = [[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]];
//points = [[1,2],[2,2],[4,2]];
//points = [[3,7],[6,8],[7,8],[11,10],[4,3],[8,5],[7,13],[4,13]];//[[4,13],[4,3],[3,7],[8,5],[11,10],[7,13]]

console.table(outerTrees(points));