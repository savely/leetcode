/*
#514. Freedom Trail

In the video game Fallout 4, the quest "Road to Freedom" requires players to reach a metal dial called the "Freedom Trail Ring" and use the dial to spell a specific keyword to open the door.

Given a string ring that represents the code engraved on the outer ring and another string key that represents the keyword that needs to be spelled, return the minimum number of steps to spell all the characters in the keyword.

Initially, the first character of the ring is aligned at the "12:00" direction. You should spell all the characters in key one by one by rotating ring clockwise or anticlockwise to make each character of the string key aligned at the "12:00" direction and then by pressing the center button.

At the stage of rotating the ring to spell the key character key[i]:

    You can rotate the ring clockwise or anticlockwise by one place, which counts as one step. The final purpose of the rotation is to align one of ring's characters at the "12:00" direction, where this character must equal key[i].
    If the character key[i] has been aligned at the "12:00" direction, press the center button to spell, which also counts as one step. After the pressing, you could begin to spell the next character in the key (next stage). Otherwise, you have finished all the spelling.

 

Example 1:

Input: ring = "godding", key = "gd"
Output: 4
Explanation:
For the first key character 'g', since it is already in place, we just need 1 step to spell this character. 
For the second key character 'd', we need to rotate the ring "godding" anticlockwise by two steps to make it become "ddinggo".
Also, we need 1 more step for spelling.
So the final output is 4.

Example 2:

Input: ring = "godding", key = "godding"
Output: 13

 

Constraints:

    1 <= ring.length, key.length <= 100
    ring and key consist of only lower case English letters.
    It is guaranteed that key could always be spelled by rotating ring.

*/

/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
 var findRotateSteps = function(ring, key) {

    if(ring.length === 1) return key.length;

    const positions = {};

    for(let i = 0; i < ring.length; i++) {

        const char = ring[i];
        positions[char] = positions[char] || [];
        positions[char].push(i);
    }

    if(Object.keys(positions).length === 1) return key.length;

    let dp = {};

    for(const pos of positions[key[0]]) {

        const minDist = Math.min(pos, ring.length - pos);
        dp[pos] = Math.min((dp[pos] || Infinity), minDist);
    }

    for(let i = 1; i < key.length; i++) {

        if(key[i - 1] === key[i]) continue;

        const char = key[i], nextDp = {};

        for (const kd in dp) {

            const prevPos = +kd;

            const  prevDist = dp[prevPos];

            for(const kp of positions[char]) {

                const pos = +kp, dist = Math.abs(pos - prevPos);

                const minDist = Math.min(dist, ring.length - dist);

                nextDp[pos] = nextDp[pos] === undefined ? minDist + prevDist : Math.min(nextDp[pos], minDist + prevDist);  
            }
        }
        dp = nextDp;
    }

    let dist = Infinity;

    for(const pos in dp) {
        dist = Math.min(dist, dp[pos]);
    }
    
    return dist + key.length;
};
