/*
#881 Boats to Save People

The i-th person has weight people[i], and each boat can carry a maximum weight of limit.

Each boat carries at most 2 people at the same time, provided the sum of the weight of those people is at most limit.

Return the minimum number of boats to carry every given person.  (It is guaranteed each person can be carried by a boat.)
*/

/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    
    people.sort((a,b) => a - b);

    let left = 0, right = people.length - 1, boats = 0;

    while(right > left) {

        right -= people[right] + people[left] <= limit ? 1 : 0;
        left++;
        boats++;
    }

    return boats + (right === people.length - 1 ? 1 : 0);
};

let people = [3,5,3,4];
people = [3,2,2,1];
people = [5,1,4,2], limit = 6; //2
people = [3,5,3,4], limit = 5;//4

console.log(numRescueBoats(people, limit));