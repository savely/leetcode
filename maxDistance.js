/*
#1552. Magnetic Force Between Two Balls

In universe Earth C-137, Rick discovered a special form of magnetic force between two balls if they are put in his new invented basket. Rick has n empty baskets, the ith basket is at position[i], Morty has m balls and needs to distribute the balls into the baskets such that the minimum magnetic force between any two balls is maximum.

Rick stated that magnetic force between two different balls at positions x and y is |x - y|.

Given the integer array position and the integer m. Return the required force.

nput: position = [1,2,3,4,7], m = 3
Output: 3
Explanation: Distributing the 3 balls into baskets 1, 4 and 7 will make the magnetic force between ball pairs [3, 3, 6]. The minimum magnetic force is 3. We cannot achieve a larger minimum magnetic force than 3.
Example 2:

Input: position = [5,4,3,2,1,1000000000], m = 2
Output: 999999999
Explanation: We can use baskets 1 and 1000000000.
 

Constraints:

n == position.length
2 <= n <= 10^5
1 <= position[i] <= 10^9
All integers in position are distinct.
2 <= m <= position.length
*/

/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
 var maxDistance = function(position, m) {
    
    const canDistribute = (dist, n) => {
     
        let pos = position[0], i = 1;

        n--;
        
        while(i < position.length && n > 0) {
            
            const nextPos = position[i++]
            
            if(nextPos - pos < dist) continue;
            
            pos = nextPos;
            n--;
        }
        
        return n === 0
    }
     
     position.sort((a, b) => a - b);

     let max = position[position.length - 1], min = 1;
     
     let result
      
     while(max >= min) {
         
         const mid = Math.floor((max + min) / 2), valid = canDistribute(mid, m)
         
         if(valid) {
             result = mid
             min = mid + 1
         } else {
             max = mid - 1
         }
         
     }
     
     return result
 }