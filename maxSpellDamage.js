/*
#3186. Maximum Total Damage With Spell Casting

A magician has various spells.

You are given an array power, where each element represents the damage of a spell. Multiple spells can have the same damage value.

It is a known fact that if a magician decides to cast a spell with a damage of power[i], they cannot cast any spell with a damage of power[i] - 2, power[i] - 1, power[i] + 1, or power[i] + 2.

Each spell can be cast only once.

Return the maximum possible total damage that a magician can cast.

 

Example 1:

Input: power = [1,1,3,4]

Output: 6

Explanation:

The maximum possible damage of 6 is produced by casting spells 0, 1, 3 with damage 1, 1, 4.

Example 2:

Input: power = [7,1,6,6]

Output: 13

Explanation:

The maximum possible damage of 13 is produced by casting spells 1, 2, 3 with damage 1, 6, 6.

 

Constraints:

    1 <= power.length <= 105
    1 <= power[i] <= 109

*/

/**
 * @param {number[]} power
 * @return {number}
 */
var maximumTotalDamage = function(power) {

    const spells = {};

    for(const pow of power) {
        spells[pow] = (spells[pow] || 0) + pow;
    }

    power = [];

    for(const pow in spells) {
        power.push([+pow, spells[pow]]);
    }

    power.sort((a, b) => a[0] - b[0]);

    for(let i = 0; i < power.length; i++) {

        const [pow, total] = power[i];

        let prev = 0, max = 0;

        for(j = i - 1; j >= Math.max(i - 3, 0); j--) {

            const [prevPow, prevTotal] = power[j];

            if(pow - prevPow < 3) {
                prev = Math.max(prev, prevTotal);
            } else {
                max = Math.max(max, prevTotal);
            }
           
        }

        power[i] = [pow, Math.max(total + max, prev)];
    }
    
    return power[power.length - 1][1];
};

let power = [1,1,3,4];
power = [7,1,6,6];

console.log(maximumTotalDamage(power));