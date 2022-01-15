/*
#1345 Given an array of integers arr, you are initially positioned at the first index of the array.

In one step you can jump from index i to index:

i + 1 where: i + 1 < arr.length.
i - 1 where: i - 1 >= 0.
j where: arr[i] == arr[j] and i != j.
Return the minimum number of steps to reach the last index of the array.

Notice that you can not jump outside of the array at any time.

Given an array of integers arr, you are initially positioned at the first index of the array.

In one step you can jump from index i to index:

i + 1 where: i + 1 < arr.length.
i - 1 where: i - 1 >= 0.
j where: arr[i] == arr[j] and i != j.
Return the minimum number of steps to reach the last index of the array.

Notice that you can not jump outside of the array at any time.

 

Example 1:

Input: arr = [100,-23,-23,404,100,23,23,23,3,404]
Output: 3
Explanation: You need three jumps from index 0 --> 4 --> 3 --> 9. Note that index 9 is the last index of the array.
Example 2:

Input: arr = [7]
Output: 0
Explanation: Start index is the last index. You do not need to jump.
Example 3:

Input: arr = [7,6,9,6,9,6,9,7]
Output: 1
Explanation: You can jump directly from index 0 to index 7 which is last index of the array.
 

Constraints:

1 <= arr.length <= 5 * 104
-108 <= arr[i] <= 108

*/


/**
 * @param {number[]} arr
 * @return {number}
 */
 var minJumps = function(arr) {

    if(arr.length < 3) return arr.length - 1;

    const indexes = {};

    for(let i = 0; i < arr.length; i++) {

        const num = arr[i];

        indexes[num] = indexes[num] || [];
        indexes[num].push(i);        
    }

    targetVal = arr[arr.length - 1];

    let queue = [0], steps = 0;

    while(queue.length) {

        const nextQ = [];

        while(queue.length) {

            const idx = queue.pop(),  val = arr[idx];

            if(idx === arr.length - 1) return steps;

            if(idx > 0) {

                const prevVal = arr[idx - 1];

                if(indexes[prevVal].length) nextQ.push(idx - 1);
            }

            if(idx < arr.length - 1) {

                const nextVal = arr[idx + 1];

                if(indexes[nextVal].length) nextQ.push(idx + 1);
            }

            while(indexes[val].length) {

                const id = indexes[val].pop();

                if(id === idx) continue;

                nextQ.push(id);
            }
        }

        steps++;
        queue = nextQ;
    }
    
    return arr.length;
};

let  arr = [100,-23,-23,404,100,23,23,23,3,404];
arr = [7];
arr = [7,6,9,6,9,6,9,7];
arr = Array(50000).fill(7);
arr.push(1,1,1,1,1,1,11);

/*arr = [51,64,-15,58,98,31,48,72,78,-63,92,-5,64,-64,51,-48,64,48,-76,-86,-5,-64,-86,-47,92,-41,58,72,31,78,-15,-76,72,-5,-97,98,78,-97,-41,
      -47,-86,-97,78,-97,58,-41,72,-41,72,-25,-76,51,-86,-65,78,-63,72,-15,48,-15,-63,-65,31,-41,95,51,-47,51,-41,-76,58,-81,-41,88,58,-81,88,
      8,-47,-48,72,-25,-86,-41,-86,-64,-15,-63];*/

console.log(minJumps(arr));