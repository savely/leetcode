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

    people = people.sort((a,b) =>  b - a)
    
    let boats = 0, i = 0, j = people.length - 1
    
    while(i < j) {
       const wMax = people[i++], wMin = people[j]

       if(wMin + wMax <= limit) {
           j--
       }
       boats++ 
    }
    
    if(i === j) boats++
    
    
    return boats
};

let arr = [3,5,3,4]
arr = [3,2,2,1]

console.log(numRescueBoats(arr, 5))