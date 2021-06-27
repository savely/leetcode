/*
#135. Candy
There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

You are giving candies to these children subjected to the following requirements:

    Each child must have at least one candy.
    Children with a higher rating get more candies than their neighbors.

Return the minimum number of candies you need to have to distribute the candies to the children.

 

Example 1:

Input: ratings = [1,0,2]
Output: 5
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.

Example 2:

Input: ratings = [1,2,2]
Output: 4
Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
The third child gets 1 candy because it satisfies the above two conditions.

 

Constraints:

    n == ratings.length
    1 <= n <= 2 * 104
    0 <= ratings[i] <= 2 * 104


*/

/**
 * @param {number[]} ratings
 * @return {number}
 */
 var candy = function(ratings) {
    
    const positions = new Array(ratings.length).fill(0).map((_,i) => i);
    const candies  = new Array(ratings.length).fill(0);
    let total = 0;
    
    positions.sort((a,b) => ratings[a] - ratings[b]);
    
    for(let i = 0; i < positions.length; i++) {
        
        const idx = positions[i];
        
        const rating = ratings[idx];
        const left = (idx > 0) ? ratings[idx -1] : Infinity;
        const right = (idx < ratings.length - 1) ? ratings[idx + 1] : Infinity;
        const candiesLeft = candies[idx - 1] || 0, candiesRight = candies[idx+1] || 0;

        if(left >= rating && right >= rating) {
            candies[idx] = 1;
        }

        if(left < rating && right < rating) {
         candies[idx] = Math.max(candiesLeft, candiesRight) + 1;
        }

        if(left < rating && right >= rating) {
            candies[idx] = candiesLeft + 1;
        }

        if(right < rating && left >= rating) {
            candies[idx] = candiesRight + 1;
        }

        total += candies[idx];
    }

    return total;
};

ratings = [1,2,2];

console.log(candy(ratings));